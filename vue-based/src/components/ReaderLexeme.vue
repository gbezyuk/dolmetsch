<script setup lang="ts">
import { ref, defineEmits, computed } from 'vue'
import { smartTrimLeft, smartTrimRight, isNumber, sanitizeWord } from '@utils/reader/str-utils.js'
import { punctuation } from '@utils/reader/text-parsing.js'

interface Props {
  lexeme?: string,
  selectedWordSanitized?: string
}

const props = withDefaults(defineProps<Props>(), {
  lexeme: '',
})

const emit = defineEmits(['selectionUpdate'])

const trimmedRight = computed(
	() => props.lexeme.trimRight()
)
const postSpaces = computed(
	() => props.lexeme.slice(trimmedRight.value.length)
)

const trimmed = computed(
	() => trimmedRight.value.trimLeft()
)
const preSpaces = computed(
	() => trimmedRight.value.slice(0, (trimmedRight.value.length - trimmed.value.length))
)

const preWord = computed(
	() => smartTrimRight(trimmed.value, punctuation)
)
const postPunctuation = computed(
	() => trimmed.value.slice(preWord.value.length)
)
const word = computed(
	() => smartTrimLeft(preWord.value, punctuation)
)
const prePunctuation = computed(
	() => preWord.value.slice(0, (preWord.value.length - word.value.length))
)

const isOccurence = computed(
	() => {
		const somethingSelected = !!props.selectedWordSanitized
		const sanitized = sanitizeWord(word.value)
		const match = props.selectedWordSanitized === sanitized
		return somethingSelected && match
	}
)

const isSelected = ref(false)

const handleClick = () => {
	if (isSelected.value) {
		isSelected.value = false
		emit('selectionUpdate', { wordSanitized: '' })
	} else {
		isSelected.value = true
		emit('selectionUpdate', { wordSanitized: sanitizeWord(word.value) })
	}
}

</script>

<template>
	<span class="lexeme">
		<span v-if="preSpaces" class="spaces pre-spaces">{{ preSpaces }}</span>
		<span v-if="prePunctuation" class="punctuation pre-punctuation">{{ prePunctuation }}</span>
		<template v-if="word">
			<span v-if="isNumber(word)" class="number">{{ word }}</span>
			<span v-else class="word" :class="{ occurence: isOccurence, selected: isOccurence }" @click="handleClick">{{ word }}</span>
		</template>
		<span v-if="postPunctuation" class="punctuation post-punctuation">{{ postPunctuation }}</span>
		<span v-if="postSpaces" class="spaces post-spaces">{{ postSpaces }}</span>
	</span>
</template>

<style lang="stylus" scoped>
.occurence
	background-color lightgreen

.selected,
.occurence.selected
	background-color green
</style>
