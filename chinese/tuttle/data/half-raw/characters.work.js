const characters = [
	{
		"id": 1,
		"hanzi": "一",
		"pinyin": "yī (yí; yì)",
		"english": "one"
	},
	{
		"id": 2,
		"hanzi": "二",
		"pinyin": "èr",
		"english": "two"
	},
	{
		"id": 3,
		"hanzi": "三",
		"pinyin": "sān",
		"english": "three"
	},
	{
		"id": 4,
		"hanzi": "十",
		"pinyin": "shí",
		"english": "ten"
	},
	{
		"id": 5,
		"hanzi": "口",
		"pinyin": "kǒu",
		"english": "mouth"
	},
	{
		"id": 6,
		"hanzi": "日",
		"pinyin": "rì",
		"english": "sun"
	},
	{
		"id": 7,
		"hanzi": "几",
		"pinyin": "jǐ (jī)",
		"english": "several"
	},
	{
		"id": 8,
		"hanzi": "也",
		"pinyin": "yě",
		"english": "also"
	},
	{
		"id": 9,
		"hanzi": "不",
		"pinyin": "bù (bú)",
		"english": "not"
	},
	{
		"id": "10a",
		"hanzi": "木",
		"pinyin": "mù",
		"english": "tree"
	},
	{
		"id": 10,
		"hanzi": "机",
		"pinyin": "jī",
		"english": "machine"
	},
	{
		"id": 11,
		"hanzi": "杯",
		"pinyin": "bēi",
		"english": "cup"
	},
	{
		"id": 12,
		"hanzi": "人",
		"pinyin": "rén",
		"english": "person"
	},
	{
		"id": "13a",
		"hanzi": "亻",
		"pinyin": null,
		"english": "person"
	},
	{
		"id": 13,
		"hanzi": "他",
		"pinyin": "tā",
		"english": "he"
	},
	{
		"id": 14,
		"hanzi": "力",
		"pinyin": "lì",
		"english": "power"
	},
	{
		"id": 15,
		"hanzi": "女",
		"pinyin": "nǚ",
		"english": "woman"
	},
	{
		"id": 16,
		"hanzi": "她",
		"pinyin": "tā",
		"english": "she"
	},
	{
		"id": 17,
		"hanzi": "子",
		"pinyin": "zi",
		"english": "child"
	},
	{
		"id": 18,
		"hanzi": "好",
		"pinyin": "hǎo (hào)",
		"english": "good"
	},
	{
		"id": "19a",
		"hanzi": "丨",
		"pinyin": null,
		"english": "stick"
	},
	{
		"id": "19b",
		"hanzi": "人",
		"pinyin": null,
		"english": "“tent”"
	},
	{
		"id": 19,
		"hanzi": "个",
		"pinyin": "gè",
		"english": "number of items"
	},
	{
		"id": 20,
		"hanzi": "八",
		"pinyin": "bā",
		"english": "eight"
	},
	{
		"id": 21,
		"hanzi": "儿",
		"pinyin": "ér (r)",
		"english": "boy"
	},
	{
		"id": "22a",
		"hanzi": "丶",
		"pinyin": "a",
		"english": "drop"
	},
	{
		"id": 22,
		"hanzi": "白",
		"pinyin": "bái",
		"english": "white"
	},
	{
		"id": "23a",
		"hanzi": "勹",
		"pinyin": null,
		"english": "wrap"
	},
	{
		"id": "23b",
		"hanzi": "勺",
		"pinyin": "sháo",
		"english": "ladle"
	},
	{
		"id": 23,
		"hanzi": "的",
		"pinyin": "de (dí)",
		"english": "of"
	},
	{
		"id": "24a",
		"hanzi": "囗",
		"pinyin": null,
		"english": "enclosed"
	},
	{
		"id": 24,
		"hanzi": "四",
		"pinyin": "sì",
		"english": "four"
	},
	{
		"id": "25a",
		"hanzi": "乂",
		"pinyin": null,
		"english": "shears"
	},
	{
		"id": "25b",
		"hanzi": "亠",
		"pinyin": null,
		"english": "lid"
	},
	{
		"id": 25,
		"hanzi": "文",
		"pinyin": "wén",
		"english": "culture"
	},
	{
		"id": "26a",
		"hanzi": "辶",
		"pinyin": null,
		"english": "road"
	},
	{
		"id": 26,
		"hanzi": "这",
		"pinyin": "zhè",
		"english": "this"
	},
	{
		"id": 27,
		"hanzi": "门",
		"pinyin": "mén",
		"english": "gate"
	},
	{
		"id": 28,
		"hanzi": "们",
		"pinyin": "men",
		"english": "people"
	},
	{
		"id": "29a",
		"hanzi": "止",
		"pinyin": "zhǐ",
		"english": "stop"
	},
	{
		"id": 29,
		"hanzi": "正",
		"pinyin": "zhèng",
		"english": "upright"
	},
	{
		"id": "30b",
		"hanzi": "疋",
		"pinyin": null,
		"english": "upright"
	},
	{
		"id": 30,
		"hanzi": "是",
		"pinyin": "shì",
		"english": "is"
	},
	{
		"id": 31,
		"hanzi": "手",
		"pinyin": "shǒu",
		"english": "hand"
	},
	{
		"id": "32a",
		"hanzi": "戈",
		"pinyin": "gē",
		"english": "dagger"
	},
	{
		"id": 32,
		"hanzi": "我",
		"pinyin": "wǒ",
		"english": "I"
	},
	{
		"id": 33,
		"hanzi": "中",
		"pinyin": "zhōng",
		"english": "middle"
	},
	{
		"id": "34a",
		"hanzi": "厶",
		"pinyin": null,
		"english": "cocoon"
	},
	{
		"id": 34,
		"hanzi": "么",
		"pinyin": "me",
		"english": "“appendage”"
	},
	{
		"id": 35,
		"hanzi": "什",
		"pinyin": "shén",
		"english": "what?"
	},
	{
		"id": 36,
		"hanzi": "五",
		"pinyin": "wǔ",
		"english": "five"
	},
	{
		"id": 37,
		"hanzi": "七",
		"pinyin": "qī",
		"english": "seven"
	},
	{
		"id": 38,
		"hanzi": "九",
		"pinyin": "jiǔ",
		"english": "nine"
	},
	{
		"id": 39,
		"hanzi": "六",
		"pinyin": "liù",
		"english": "six"
	},
	{
		"id": 40,
		"hanzi": "百",
		"pinyin": "bǎi",
		"english": "hundred"
	},
	{
		"id": 41,
		"hanzi": "边",
		"pinyin": "biān",
		"english": "side"
	},
	{
		"id": "42a",
		"hanzi": "卜",
		"pinyin": "bǔ; bo",
		"english": "fortune teller"
	},
	{
		"id": 42,
		"hanzi": "上",
		"pinyin": "shàng",
		"english": "above"
	},
	{
		"id": 43,
		"hanzi": "下",
		"pinyin": "xià",
		"english": "below"
	},
	{
		"id": 44,
		"hanzi": "马",
		"pinyin": "mǎ",
		"english": "horse"
	},
	{
		"id": 45,
		"hanzi": "吗",
		"pinyin": "ma",
		"english": "question mark"
	},
	{
		"id": 46,
		"hanzi": "妈",
		"pinyin": "mā",
		"english": "mum"
	},
	{
		"id": 47,
		"hanzi": "大",
		"pinyin": "dà (dài)",
		"english": "big"
	},
	{
		"id": 48,
		"hanzi": "太",
		"pinyin": "tài",
		"english": "too much"
	},
	{
		"id": 49,
		"hanzi": "夫",
		"pinyin": "fū",
		"english": "husband"
	},
	{
		"id": 50,
		"hanzi": "小",
		"pinyin": "xiǎo",
		"english": "small"
	},
	{
		"id": "51b",
		"hanzi": "尔",
		"pinyin": "ěr",
		"english": "thou"
	},
	{
		"id": 51,
		"hanzi": "你",
		"pinyin": "nǐ",
		"english": "you"
	},
	{
		"id": 52,
		"hanzi": "又",
		"pinyin": "yòu",
		"english": "right hand"
	},
	{
		"id": 53,
		"hanzi": "友",
		"pinyin": "yǒu",
		"english": "friend"
	},
	{
		"id": "54a",
		"hanzi": "土",
		"pinyin": "tǔ",
		"english": "earth"
	},
	{
		"id": 54,
		"hanzi": "地",
		"pinyin": "dì; de",
		"english": "1. ground 2. -ly"
	},
	{
		"id": 55,
		"hanzi": "在",
		"pinyin": "zài",
		"english": "at"
	},
	{
		"id": 56,
		"hanzi": "云",
		"pinyin": "yún",
		"english": "cloud"
	},
	{
		"id": 57,
		"hanzi": "运",
		"pinyin": "yùn",
		"english": "transport"
	},
	{
		"id": 58,
		"hanzi": "动",
		"pinyin": "dòng",
		"english": "move"
	},
	{
		"id": 59,
		"hanzi": "会",
		"pinyin": "huì",
		"english": "meeting"
	},
	{
		"id": "60a",
		"hanzi": "王",
		"pinyin": "wáng",
		"english": "king"
	},
	{
		"id": "60b",
		"hanzi": "玉",
		"pinyin": "yù",
		"english": "jade"
	},
	{
		"id": 60,
		"hanzi": "国",
		"pinyin": "guó",
		"english": "country"
	},
	{
		"id": 61,
		"hanzi": "月",
		"pinyin": "yuè",
		"english": "moon"
	},
	{
		"id": 62,
		"hanzi": "朋",
		"pinyin": "péng",
		"english": "companion"
	},
	{
		"id": 63,
		"hanzi": "有",
		"pinyin": "yǒu",
		"english": "have"
	},
	{
		"id": "64a",
		"hanzi": "未",
		"pinyin": "wèi",
		"english": "not yet"
	},
	{
		"id": 64,
		"hanzi": "妹",
		"pinyin": "mèi",
		"english": "younger sister"
	},
	{
		"id": "65a",
		"hanzi": "丷",
		"pinyin": null,
		"english": "horns"
	},
	{
		"id": 65,
		"hanzi": "来",
		"pinyin": "lái",
		"english": "come"
	},
	{
		"id": 66,
		"hanzi": "了",
		"pinyin": "le; liǎo",
		"english": "1. transition 2. complete"
	},
	{
		"id": "67a",
		"hanzi": "兄",
		"pinyin": "xiōng",
		"english": "older brother"
	},
	{
		"id": "67b",
		"hanzi": "兌",
		"pinyin": "duì",
		"english": "to convert"
	},
	{
		"id": "67c",
		"hanzi": "讠",
		"pinyin": null,
		"english": "words"
	},
	{
		"id": 67,
		"hanzi": "说",
		"pinyin": "shuō",
		"english": "say"
	},
	{
		"id": "68a",
		"hanzi": "吾",
		"pinyin": "wú",
		"english": "yours truly"
	},
	{
		"id": 68,
		"hanzi": "语",
		"pinyin": "yǔ",
		"english": "language"
	},
	{
		"id": "69a",
		"hanzi": "夕",
		"pinyin": "xī",
		"english": "evening"
	},
	{
		"id": 69,
		"hanzi": "多",
		"pinyin": "duō",
		"english": "many"
	},
	{
		"id": 70,
		"hanzi": "名",
		"pinyin": "míng",
		"english": "name"
	},
	{
		"id": 71,
		"hanzi": "外",
		"pinyin": "wài",
		"english": "outside"
	},
	{
		"id": 72,
		"hanzi": "刀",
		"pinyin": "dāo",
		"english": "knife"
	},
	{
		"id": 73,
		"hanzi": "分",
		"pinyin": "fēn (fèn)",
		"english": "division"
	},
	{
		"id": "74a",
		"hanzi": "刂",
		"pinyin": null,
		"english": "knife"
	},
	{
		"id": "74b",
		"hanzi": "至",
		"pinyin": "zhì",
		"english": "until"
	},
	{
		"id": 74,
		"hanzi": "到",
		"pinyin": "dào",
		"english": "arrive"
	},
	{
		"id": 75,
		"hanzi": "倒",
		"pinyin": "dǎo; dào",
		"english": "topple; invert"
	},
	{
		"id": 76,
		"hanzi": "天",
		"pinyin": "tiān",
		"english": "heaven"
	},
	{
		"id": 77,
		"hanzi": "明",
		"pinyin": "míng",
		"english": "bright"
	},
	{
		"id": "78a",
		"hanzi": "氵",
		"pinyin": null,
		"english": "water"
	},
	{
		"id": 78,
		"hanzi": "汉",
		"pinyin": "hàn",
		"english": "Han Chinese"
	},
	{
		"id": "79a",
		"hanzi": "另",
		"pinyin": "lìng",
		"english": "other"
	},
	{
		"id": 79,
		"hanzi": "别",
		"pinyin": "bié",
		"english": "don’t"
	},
	{
		"id": 80,
		"hanzi": "如",
		"pinyin": "rú",
		"english": "if"
	},
	{
		"id": "81a",
		"hanzi": "彳",
		"pinyin": "step",
		"english": "forward"
	},
	{
		"id": "81b",
		"hanzi": "丁",
		"pinyin": "dīng",
		"english": "nail"
	},
	{
		"id": "81c",
		"hanzi": "亍",
		"pinyin": null,
		"english": "footstep"
	},
	{
		"id": 81,
		"hanzi": "行",
		"pinyin": "xíng; háng",
		"english": "1. OK 2. line"
	},
	{
		"id": "82a",
		"hanzi": "冖",
		"pinyin": null,
		"english": "cover"
	},
	{
		"id": 82,
		"hanzi": "学",
		"pinyin": "xué",
		"english": "study"
	},
	{
		"id": 83,
		"hanzi": "车",
		"pinyin": "chē",
		"english": "car"
	},
	{
		"id": 84,
		"hanzi": "连",
		"pinyin": "lián",
		"english": "linked up"
	},
	{
		"id": 85,
		"hanzi": "开",
		"pinyin": "kāi",
		"english": "open"
	},
	{
		"id": 86,
		"hanzi": "去",
		"pinyin": "qù",
		"english": "go"
	},
	{
		"id": 87,
		"hanzi": "法",
		"pinyin": "fǎ",
		"english": "law"
	},
	{
		"id": "88a",
		"hanzi": "耳",
		"pinyin": "ěr",
		"english": "ear"
	},
	{
		"id": 88,
		"hanzi": "取",
		"pinyin": "qǔ",
		"english": "acquire"
	},
	{
		"id": 89,
		"hanzi": "千",
		"pinyin": "qiān",
		"english": "thousand"
	},
	{
		"id": 90,
		"hanzi": "前",
		"pinyin": "qián",
		"english": "in front of"
	},
	{
		"id": "91a",
		"hanzi": "宀",
		"pinyin": null,
		"english": "house"
	},
	{
		"id": 91,
		"hanzi": "安",
		"pinyin": "ān",
		"english": "peace"
	},
	{
		"id": 92,
		"hanzi": "字",
		"pinyin": "zì",
		"english": "Chinese character"
	},
	{
		"id": 93,
		"hanzi": "目",
		"pinyin": "mù",
		"english": "eye"
	},
	{
		"id": 94,
		"hanzi": "自",
		"pinyin": "zì",
		"english": "self"
	},
	{
		"id": 95,
		"hanzi": "咱",
		"pinyin": "zán",
		"english": "we"
	},
	{
		"id": "96a",
		"hanzi": "阝",
		"pinyin": null,
		"english": "mound; city"
	},
	{
		"id": 96,
		"hanzi": "阳",
		"pinyin": "yáng",
		"english": "in the open"
	},
	{
		"id": 97,
		"hanzi": "阴",
		"pinyin": "yīn",
		"english": "hidden"
	},
	{
		"id": 98,
		"hanzi": "那",
		"pinyin": "nà",
		"english": "that"
	},
	{
		"id": 99,
		"hanzi": "哪",
		"pinyin": "nǎ (na)",
		"english": "which?"
	},
	{
		"id": 100,
		"hanzi": "西",
		"pinyin": "xī",
		"english": "west"
	},
	{
		"id": 101,
		"hanzi": "要",
		"pinyin": "yào; yāo",
		"english": "want; ask for"
	},
	{
		"id": "102a",
		"hanzi": "酉",
		"pinyin": "yǒu",
		"english": "whisky bottle"
	},
	{
		"id": 102,
		"hanzi": "酒",
		"pinyin": "jiǔ",
		"english": "liquor"
	},
	{
		"id": 103,
		"hanzi": "从",
		"pinyin": "cóng",
		"english": "from"
	},
	{
		"id": "104a",
		"hanzi": "寸",
		"pinyin": "cùn",
		"english": "inch"
	},
	{
		"id": 104,
		"hanzi": "村",
		"pinyin": "cūn",
		"english": "village"
	},
	{
		"id": 105,
		"hanzi": "时",
		"pinyin": "shí",
		"english": "time"
	},
	{
		"id": 106,
		"hanzi": "过",
		"pinyin": "guò",
		"english": "to cross"
	},
	{
		"id": 107,
		"hanzi": "身",
		"pinyin": "shēn",
		"english": "body"
	},
	{
		"id": "108a",
		"hanzi": "射",
		"pinyin": "shè",
		"english": "to shoot"
	},
	{
		"id": 108,
		"hanzi": "谢",
		"pinyin": "xiè",
		"english": "thank"
	},
	{
		"id": "109a",
		"hanzi": "豕",
		"pinyin": null,
		"english": "pig"
	},
	{
		"id": 109,
		"hanzi": "家",
		"pinyin": "jiā",
		"english": "household"
	},
	{
		"id": 110,
		"hanzi": "山",
		"pinyin": "shān",
		"english": "mountain"
	},
	{
		"id": 111,
		"hanzi": "羊",
		"pinyin": "yáng",
		"english": "sheep"
	},
	{
		"id": 112,
		"hanzi": "样",
		"pinyin": "yàng",
		"english": "appearance"
	},
	{
		"id": 113,
		"hanzi": "班",
		"pinyin": "bān",
		"english": "team"
	},
	{
		"id": 114,
		"hanzi": "出",
		"pinyin": "chū",
		"english": "exit"
	},
	{
		"id": "115a",
		"hanzi": "石",
		"pinyin": "shí",
		"english": "stone"
	},
	{
		"id": 115,
		"hanzi": "础",
		"pinyin": "chǔ",
		"english": "plinth"
	},
	{
		"id": 116,
		"hanzi": "岁",
		"pinyin": "suì",
		"english": "years old"
	},
	{
		"id": 117,
		"hanzi": "但",
		"pinyin": "dàn",
		"english": "but"
	},
	{
		"id": 118,
		"hanzi": "得",
		"pinyin": "dé; de; děi",
		"english": "1. obtain 2. way 3. must"
	},
	{
		"id": 119,
		"hanzi": "公",
		"pinyin": "gōng",
		"english": "public"
	},
	{
		"id": 120,
		"hanzi": "以",
		"pinyin": "yǐ",
		"english": "using"
	},
	{
		"id": 121,
		"hanzi": "之",
		"pinyin": "zhī",
		"english": "of"
	},
	{
		"id": 122,
		"hanzi": "为",
		"pinyin": "wéi; wèi",
		"english": "act as; for"
	},
	{
		"id": 123,
		"hanzi": "办",
		"pinyin": "bàn",
		"english": "manage"
	},
	{
		"id": 124,
		"hanzi": "干",
		"pinyin": "gān; gàn",
		"english": "dry; work"
	},
	{
		"id": 125,
		"hanzi": "午",
		"pinyin": "wǔ",
		"english": "noon"
	},
	{
		"id": "126a",
		"hanzi": "禾",
		"pinyin": "hé",
		"english": "grain"
	},
	{
		"id": 126,
		"hanzi": "和",
		"pinyin": "hé; huó",
		"english": "1. with 2. mix"
	},
	{
		"id": 127,
		"hanzi": "母",
		"pinyin": "mǔ",
		"english": "mother"
	},
	{
		"id": 128,
		"hanzi": "每",
		"pinyin": "měi",
		"english": "every"
	},
	{
		"id": 129,
		"hanzi": "海",
		"pinyin": "hǎi",
		"english": "sea"
	},
	{
		"id": 130,
		"hanzi": "用",
		"pinyin": "yòng",
		"english": "to use"
	},
	{
		"id": 131,
		"hanzi": "半",
		"pinyin": "bàn",
		"english": "half"
	},
	{
		"id": 132,
		"hanzi": "利",
		"pinyin": "lì",
		"english": "benefit"
	},
	{
		"id": 133,
		"hanzi": "生",
		"pinyin": "shēng",
		"english": "life"
	},
	{
		"id": 134,
		"hanzi": "胜",
		"pinyin": "shèng",
		"english": "triumph"
	},
	{
		"id": 135,
		"hanzi": "姓",
		"pinyin": "xìng",
		"english": "surname"
	},
	{
		"id": 136,
		"hanzi": "星",
		"pinyin": "xīng",
		"english": "star"
	},
	{
		"id": 137,
		"hanzi": "先",
		"pinyin": "xiān",
		"english": "ahead"
	},
	{
		"id": 138,
		"hanzi": "告",
		"pinyin": "gào",
		"english": "inform"
	},
	{
		"id": 139,
		"hanzi": "洗",
		"pinyin": "xǐ",
		"english": "wash"
	},
	{
		"id": 140,
		"hanzi": "可",
		"pinyin": "kě",
		"english": "may"
	},
	{
		"id": 141,
		"hanzi": "河",
		"pinyin": "hé",
		"english": "river"
	},
	{
		"id": 142,
		"hanzi": "何",
		"pinyin": "hé",
		"english": "what"
	},
	{
		"id": "143a",
		"hanzi": "阿",
		"pinyin": "ā",
		"english": "ah"
	},
	{
		"id": 143,
		"hanzi": "啊",
		"pinyin": "ā (a)",
		"english": "eh!"
	},
	{
		"id": 144,
		"hanzi": "首",
		"pinyin": "shǒu",
		"english": "head"
	},
	{
		"id": 145,
		"hanzi": "道",
		"pinyin": "dào",
		"english": "way"
	},
	{
		"id": 146,
		"hanzi": "发",
		"pinyin": "fā (fà)",
		"english": "send out"
	},
	{
		"id": 147,
		"hanzi": "工",
		"pinyin": "gōng",
		"english": "to work"
	},
	{
		"id": 148,
		"hanzi": "江",
		"pinyin": "jiāng",
		"english": "river"
	},
	{
		"id": 149,
		"hanzi": "厂",
		"pinyin": "chǎng",
		"english": "cliff"
	},
	{
		"id": 150,
		"hanzi": "后",
		"pinyin": "hòu",
		"english": "rear"
	},
	{
		"id": 151,
		"hanzi": "而",
		"pinyin": "ér",
		"english": "and yet"
	},
	{
		"id": "152a",
		"hanzi": "扌",
		"pinyin": null,
		"english": "hand"
	},
	{
		"id": 152,
		"hanzi": "找",
		"pinyin": "zhǎo",
		"english": "look for"
	},
	{
		"id": 153,
		"hanzi": "打",
		"pinyin": "dǎ",
		"english": "hit"
	},
	{
		"id": 154,
		"hanzi": "对",
		"pinyin": "duì",
		"english": "correct"
	},
	{
		"id": 155,
		"hanzi": "树",
		"pinyin": "shù",
		"english": "tree"
	},
	{
		"id": "156a",
		"hanzi": "田",
		"pinyin": "tián",
		"english": "field"
	},
	{
		"id": 156,
		"hanzi": "男",
		"pinyin": "nán",
		"english": "male"
	},
	{
		"id": 157,
		"hanzi": "里",
		"pinyin": "lǐ (li)",
		"english": "in"
	},
	{
		"id": 158,
		"hanzi": "理",
		"pinyin": "lǐ",
		"english": "reason"
	},
	{
		"id": 159,
		"hanzi": "电",
		"pinyin": "diàn",
		"english": "electricity"
	},
	{
		"id": "160a",
		"hanzi": "冂",
		"pinyin": "outer",
		"english": "limits"
	},
	{
		"id": 160,
		"hanzi": "同",
		"pinyin": "tóng",
		"english": "same"
	},
	{
		"id": 161,
		"hanzi": "心",
		"pinyin": "xīn",
		"english": "heart"
	},
	{
		"id": 162,
		"hanzi": "必",
		"pinyin": "bì",
		"english": "inevitably"
	},
	{
		"id": 163,
		"hanzi": "相",
		"pinyin": "xiāng; xiàng",
		"english": "mutual; appearance"
	},
	{
		"id": 164,
		"hanzi": "想",
		"pinyin": "xiǎng",
		"english": "Think about"
	},
	{
		"id": 165,
		"hanzi": "思",
		"pinyin": "sǐ",
		"english": "Think"
	},
	{
		"id": 166,
		"hanzi": "今",
		"pinyin": "jīn",
		"english": "now"
	},
	{
		"id": 167,
		"hanzi": "念",
		"pinyin": "niàn",
		"english": "To study"
	},
	{
		"id": 168,
		"hanzi": "年",
		"pinyin": "nián",
		"english": "year"
	},
	{
		"id": "169a",
		"hanzi": "殳",
		"pinyin": null,
		"english": "to strike"
	},
	{
		"id": 169,
		"hanzi": "没",
		"pinyin": "méi",
		"english": "not"
	},
	{
		"id": 170,
		"hanzi": "广",
		"pinyin": "guǎng",
		"english": "shelter"
	},
	{
		"id": 171,
		"hanzi": "床",
		"pinyin": "chuáng",
		"english": "bed"
	},
	{
		"id": 172,
		"hanzi": "长",
		"pinyin": "cháng; zhǎng",
		"english": "1. long 2. chief"
	},
	{
		"id": "173a",
		"hanzi": "弓",
		"pinyin": "gōng",
		"english": "a bow"
	},
	{
		"id": 173,
		"hanzi": "张",
		"pinyin": "zhāng",
		"english": "sheet (of paper)"
	},
	{
		"id": 174,
		"hanzi": "本",
		"pinyin": "běn",
		"english": "source"
	},
	{
		"id": 175,
		"hanzi": "体",
		"pinyin": "tǐ",
		"english": "body"
	},
	{
		"id": 176,
		"hanzi": "书",
		"pinyin": "shū",
		"english": "book"
	},
	{
		"id": 177,
		"hanzi": "立",
		"pinyin": "lì",
		"english": "To stand"
	},
	{
		"id": 178,
		"hanzi": "位",
		"pinyin": "wèi",
		"english": "place"
	},
	{
		"id": 179,
		"hanzi": "拉",
		"pinyin": "lā (lǎ)",
		"english": "pull"
	},
	{
		"id": 180,
		"hanzi": "啦",
		"pinyin": "la",
		"english": "exclamation"
	},
	{
		"id": 181,
		"hanzi": "火",
		"pinyin": "huǒ",
		"english": "fire"
	},
	{
		"id": 182,
		"hanzi": "灯",
		"pinyin": "dēng",
		"english": "lamp"
	},
	{
		"id": 183,
		"hanzi": "占",
		"pinyin": "zhàn",
		"english": "occupy"
	},
	{
		"id": 184,
		"hanzi": "站",
		"pinyin": "zhàn",
		"english": "station"
	},
	{
		"id": "185a",
		"hanzi": "灬",
		"pinyin": null,
		"english": "fire"
	},
	{
		"id": 185,
		"hanzi": "点",
		"pinyin": "diǎn",
		"english": "speck"
	},
	{
		"id": 186,
		"hanzi": "店",
		"pinyin": "diàn",
		"english": "store"
	},
	{
		"id": 187,
		"hanzi": "果",
		"pinyin": "guǒ",
		"english": "fruit"
	},
	{
		"id": 188,
		"hanzi": "棵",
		"pinyin": "kē",
		"english": "number of trees"
	},
	{
		"id": 189,
		"hanzi": "课",
		"pinyin": "kè",
		"english": "lesson"
	},
	{
		"id": "190a",
		"hanzi": "攵",
		"pinyin": null,
		"english": "to tap"
	},
	{
		"id": 190,
		"hanzi": "政",
		"pinyin": "zhèng",
		"english": "government"
	},
	{
		"id": "191a",
		"hanzi": "古",
		"pinyin": "gǔ",
		"english": "old"
	},
	{
		"id": 191,
		"hanzi": "故",
		"pinyin": "gù",
		"english": "former"
	},
	{
		"id": 192,
		"hanzi": "姑",
		"pinyin": "gū",
		"english": "aunt"
	},
	{
		"id": "193a",
		"hanzi": "胡",
		"pinyin": "hú",
		"english": "beard"
	},
	{
		"id": 193,
		"hanzi": "湖",
		"pinyin": "hú",
		"english": "lake"
	},
	{
		"id": 194,
		"hanzi": "克",
		"pinyin": "kè",
		"english": "gram"
	},
	{
		"id": 195,
		"hanzi": "辛",
		"pinyin": "xīn",
		"english": "spicy"
	},
	{
		"id": 196,
		"hanzi": "亲",
		"pinyin": "qīn",
		"english": "kin"
	},
	{
		"id": 197,
		"hanzi": "产",
		"pinyin": "chǎn",
		"english": "to produce"
	},
	{
		"id": 198,
		"hanzi": "卡",
		"pinyin": "kǎ",
		"english": "card"
	},
	{
		"id": 199,
		"hanzi": "还",
		"pinyin": "hái; huán",
		"english": "1. still 2. give back"
	},
	{
		"id": 200,
		"hanzi": "看",
		"pinyin": "kàn",
		"english": "look at"
	},
	{
		"id": 201,
		"hanzi": "讨",
		"pinyin": "tǎo",
		"english": "ask for"
	},
	{
		"id": 202,
		"hanzi": "回",
		"pinyin": "huí",
		"english": "return"
	},
	{
		"id": "203a",
		"hanzi": "妾",
		"pinyin": null,
		"english": "concubine"
	},
	{
		"id": 203,
		"hanzi": "接",
		"pinyin": "jiē",
		"english": "receive"
	},
	{
		"id": 204,
		"hanzi": "差",
		"pinyin": "chà",
		"english": "fall short"
	},
	{
		"id": 205,
		"hanzi": "着",
		"pinyin": "zháo; zhe (zhāo)",
		"english": "1. to catch 2. -ing"
	},
	{
		"id": "206a",
		"hanzi": "匕",
		"pinyin": null,
		"english": "spoon"
	},
	{
		"id": 206,
		"hanzi": "能",
		"pinyin": "néng",
		"english": "able to"
	},
	{
		"id": "207a",
		"hanzi": "乍",
		"pinyin": "zhà",
		"english": "suddenly"
	},
	{
		"id": 207,
		"hanzi": "作",
		"pinyin": "zuò",
		"english": "do"
	},
	{
		"id": 208,
		"hanzi": "昨",
		"pinyin": "zuó",
		"english": "yesterday"
	},
	{
		"id": 209,
		"hanzi": "左",
		"pinyin": "zuǒ",
		"english": "left (hand)"
	},
	{
		"id": 210,
		"hanzi": "做",
		"pinyin": "zuò",
		"english": "do"
	},
	{
		"id": 211,
		"hanzi": "坐",
		"pinyin": "zuò",
		"english": "sit"
	},
	{
		"id": 212,
		"hanzi": "座",
		"pinyin": "zuò",
		"english": "seat"
	},
	{
		"id": 213,
		"hanzi": "右",
		"pinyin": "yòu",
		"english": "right (hand)"
	},
	{
		"id": 214,
		"hanzi": "见",
		"pinyin": "jiàn",
		"english": "see"
	},
	{
		"id": 215,
		"hanzi": "现",
		"pinyin": "xiàn",
		"english": "the present"
	},
	{
		"id": 216,
		"hanzi": "观",
		"pinyin": "guān",
		"english": "observe"
	},
	{
		"id": 217,
		"hanzi": "再",
		"pinyin": "zài",
		"english": "again"
	},
	{
		"id": "218a",
		"hanzi": "艹",
		"pinyin": null,
		"english": "grass"
	},
	{
		"id": 218,
		"hanzi": "苦",
		"pinyin": "kǔ",
		"english": "bitter"
	},
	{
		"id": "219a",
		"hanzi": "入",
		"pinyin": "rù",
		"english": "enter"
	},
	{
		"id": 219,
		"hanzi": "内",
		"pinyin": "nèi",
		"english": "inside"
	},
	{
		"id": 220,
		"hanzi": "呐",
		"pinyin": "nà (na)",
		"english": ["shout"]
	},
	{
		"id": 221,
		"hanzi": "肉",
		"pinyin": "ròu",
		"english": "meat"
	},
	{
		"id": 222,
		"hanzi": "两",
		"pinyin": "liǎng",
		"english": "a couple"
	},
	{
		"id": 223,
		"hanzi": "辆",
		"pinyin": "liàng",
		"english": "number of cars"
	},
	{
		"id": 224,
		"hanzi": "俩",
		"pinyin": "liǎ",
		"english": "two people"
	},
	{
		"id": 225,
		"hanzi": "满",
		"pinyin": "mǎn",
		"english": "full"
	},
	{
		"id": 226,
		"hanzi": "互",
		"pinyin": "hù",
		"english": "reciprocal"
	},
	{
		"id": 227,
		"hanzi": "它",
		"pinyin": "tā",
		"english": "it"
	},
	{
		"id": 228,
		"hanzi": "比",
		"pinyin": "bǐ",
		"english": "compared with"
	},
	{
		"id": 229,
		"hanzi": "批",
		"pinyin": "pī",
		"english": "criticize"
	},
	{
		"id": 230,
		"hanzi": "切",
		"pinyin": "qiè (qiē)",
		"english": "to cut"
	},
	{
		"id": "231b",
		"hanzi": "司",
		"pinyin": "sī",
		"english": "department"
	},
	{
		"id": 231,
		"hanzi": "词",
		"pinyin": "cí",
		"english": "word"
	},
	{
		"id": "232a",
		"hanzi": "曲",
		"pinyin": null,
		"english": "bend"
	},
	{
		"id": 232,
		"hanzi": "典",
		"pinyin": "diǎn",
		"english": "reference book"
	},
	{
		"id": "233a",
		"hanzi": "纟",
		"pinyin": null,
		"english": "thread"
	},
	{
		"id": 233,
		"hanzi": "红",
		"pinyin": "hóng",
		"english": "red"
	},
	{
		"id": 234,
		"hanzi": "细",
		"pinyin": "xì",
		"english": "slender"
	},
	{
		"id": 235,
		"hanzi": "其",
		"pinyin": "qí",
		"english": "“this or that”"
	},
	{
		"id": 236,
		"hanzi": "期",
		"pinyin": "qī",
		"english": "due"
	},
	{
		"id": 237,
		"hanzi": "基",
		"pinyin": "jī",
		"english": "foundation"
	},
	{
		"id": "238a",
		"hanzi": "犬",
		"pinyin": "quǎn",
		"english": "dog"
	},
	{
		"id": 238,
		"hanzi": "尤",
		"pinyin": "yóu",
		"english": "especially"
	},
	{
		"id": "239b",
		"hanzi": "京",
		"pinyin": "jīng",
		"english": "capital"
	},
	{
		"id": 239,
		"hanzi": "就",
		"pinyin": "jiù",
		"english": "right away"
	},
	{
		"id": 240,
		"hanzi": "斤",
		"pinyin": "jīn",
		"english": "axe"
	},
	{
		"id": 241,
		"hanzi": "近",
		"pinyin": "jìn",
		"english": "close"
	},
	{
		"id": 242,
		"hanzi": "听",
		"pinyin": "tīng",
		"english": "listen"
	},
	{
		"id": 243,
		"hanzi": "新",
		"pinyin": "xīn",
		"english": "new"
	},
	{
		"id": 244,
		"hanzi": "经",
		"pinyin": "jīng go",
		"english": "through"
	},
	{
		"id": 245,
		"hanzi": "轻",
		"pinyin": "qīng",
		"english": "lightweight"
	},
	{
		"id": 246,
		"hanzi": "头",
		"pinyin": "tóu",
		"english": "head"
	},
	{
		"id": "247a",
		"hanzi": "乛",
		"pinyin": null,
		"english": "“cap”"
	},
	{
		"id": 247,
		"hanzi": "买",
		"pinyin": "mǎi",
		"english": "buy"
	},
	{
		"id": 248,
		"hanzi": "卖",
		"pinyin": "mài",
		"english": "sell"
	},
	{
		"id": 249,
		"hanzi": "读",
		"pinyin": "dú",
		"english": "to read"
	},
	{
		"id": 250,
		"hanzi": "实",
		"pinyin": "shí",
		"english": "real"
	},
	{
		"id": "251a",
		"hanzi": "旨",
		"pinyin": "zhǐ",
		"english": "purpose"
	},
	{
		"id": 251,
		"hanzi": "指",
		"pinyin": "zhǐ",
		"english": "point at"
	},
	{
		"id": "252a",
		"hanzi": "仑",
		"pinyin": null,
		"english": "meditate"
	},
	{
		"id": 252,
		"hanzi": "论",
		"pinyin": "lùn",
		"english": "discuss"
	},
	{
		"id": 253,
		"hanzi": "认",
		"pinyin": "rèn",
		"english": "recognize"
	},
	{
		"id": 254,
		"hanzi": "只",
		"pinyin": "zhǐ; zhī",
		"english": "only; one of a pair"
	},
	{
		"id": 255,
		"hanzi": "织",
		"pinyin": "zhī",
		"english": "weave"
	},
	{
		"id": 256,
		"hanzi": "识",
		"pinyin": "shí",
		"english": "knowledge"
	},
	{
		"id": 257,
		"hanzi": "音",
		"pinyin": "yīn",
		"english": "sound"
	},
	{
		"id": 258,
		"hanzi": "意",
		"pinyin": "yì",
		"english": "idea"
	},
	{
		"id": "259a",
		"hanzi": "戊",
		"pinyin": "wù",
		"english": "fifth"
	},
	{
		"id": 259,
		"hanzi": "成",
		"pinyin": "chéng",
		"english": "turn into"
	},
	{
		"id": 260,
		"hanzi": "城",
		"pinyin": "chéng",
		"english": "town"
	},
	{
		"id": 261,
		"hanzi": "者",
		"pinyin": "zhě",
		"english": "specialist"
	},
	{
		"id": 262,
		"hanzi": "都",
		"pinyin": "dōu; dū",
		"english": "1. all 2. metropolis"
	},
	{
		"id": "263a",
		"hanzi": "犭",
		"pinyin": null,
		"english": "dog"
	},
	{
		"id": 263,
		"hanzi": "猪",
		"pinyin": "zhū",
		"english": "pig"
	},
	{
		"id": 264,
		"hanzi": "老",
		"pinyin": "lǎo",
		"english": "old"
	},
	{
		"id": "265a",
		"hanzi": "孝",
		"pinyin": "xiào",
		"english": "filial piety"
	},
	{
		"id": 265,
		"hanzi": "教",
		"pinyin": "jiāo; jiào",
		"english": "teach"
	},
	{
		"id": 266,
		"hanzi": "然",
		"pinyin": "rán",
		"english": "however"
	},
	{
		"id": 267,
		"hanzi": "当",
		"pinyin": "dāng (dàng)",
		"english": "act as"
	},
	{
		"id": "268a",
		"hanzi": "尸",
		"pinyin": "shī",
		"english": "corpse"
	},
	{
		"id": "268b",
		"hanzi": "尼",
		"pinyin": "ní",
		"english": "nun"
	},
	{
		"id": 268,
		"hanzi": "呢",
		"pinyin": "ne",
		"english": "as for"
	},
	{
		"id": 269,
		"hanzi": "户",
		"pinyin": "hù",
		"english": "door"
	},
	{
		"id": 270,
		"hanzi": "所",
		"pinyin": "suǒ",
		"english": "building"
	},
	{
		"id": 271,
		"hanzi": "己",
		"pinyin": "jǐ",
		"english": "self"
	},
	{
		"id": 272,
		"hanzi": "记",
		"pinyin": "jì",
		"english": "note down"
	},
	{
		"id": 273,
		"hanzi": "纪",
		"pinyin": "jì",
		"english": "discipline"
	},
	{
		"id": 274,
		"hanzi": "已",
		"pinyin": "yǐ",
		"english": "already"
	},
	{
		"id": "275a",
		"hanzi": "巳",
		"pinyin": "sì",
		"english": "snake"
	},
	{
		"id": 275,
		"hanzi": "走",
		"pinyin": "zǒu",
		"english": "walk"
	},
	{
		"id": 276,
		"hanzi": "起",
		"pinyin": "qǐ",
		"english": "rise up"
	},
	{
		"id": 277,
		"hanzi": "导",
		"pinyin": "dǎo",
		"english": "guide"
	},
	{
		"id": "278a",
		"hanzi": "钅",
		"pinyin": null,
		"english": "gold"
	},
	{
		"id": 278,
		"hanzi": "钟",
		"pinyin": "zhōng",
		"english": "clock"
	},
	{
		"id": 279,
		"hanzi": "种",
		"pinyin": "zhǒng (zhòng)",
		"english": "species"
	},
	{
		"id": 280,
		"hanzi": "足",
		"pinyin": "zú",
		"english": "foot"
	},
	{
		"id": "281a",
		"hanzi": "艮",
		"pinyin": null,
		"english": "stubborn"
	},
	{
		"id": 281,
		"hanzi": "很",
		"pinyin": "hěn",
		"english": "very"
	},
	{
		"id": 282,
		"hanzi": "根",
		"pinyin": "gēn",
		"english": "root"
	},
	{
		"id": 283,
		"hanzi": "跟",
		"pinyin": "gēn",
		"english": "with"
	},
	{
		"id": 284,
		"hanzi": "眼",
		"pinyin": "yǎn",
		"english": "eye"
	},
	{
		"id": 285,
		"hanzi": "银",
		"pinyin": "yín",
		"english": "silver"
	},
	{
		"id": "286a",
		"hanzi": "良",
		"pinyin": "liáng",
		"english": "good"
	},
	{
		"id": 286,
		"hanzi": "娘",
		"pinyin": "niáng",
		"english": "young lady"
	},
	{
		"id": 287,
		"hanzi": "食",
		"pinyin": "shí",
		"english": "food"
	},
	{
		"id": "288a",
		"hanzi": "饣",
		"pinyin": null,
		"english": "food"
	},
	{
		"id": 288,
		"hanzi": "饿",
		"pinyin": "è",
		"english": "hungry"
	},
	{
		"id": 289,
		"hanzi": "问",
		"pinyin": "wèn",
		"english": "ask"
	},
	{
		"id": 290,
		"hanzi": "闻",
		"pinyin": "wén",
		"english": "hear"
	},
	{
		"id": 291,
		"hanzi": "方",
		"pinyin": "fāng",
		"english": "direction"
	},
	{
		"id": 292,
		"hanzi": "访",
		"pinyin": "fǎng",
		"english": "visit"
	},
	{
		"id": 293,
		"hanzi": "房",
		"pinyin": "fáng",
		"english": "house"
	},
	{
		"id": 294,
		"hanzi": "放",
		"pinyin": "fàng",
		"english": "release"
	},
	{
		"id": 295,
		"hanzi": "旁",
		"pinyin": "páng",
		"english": "beside"
	},
	{
		"id": 296,
		"hanzi": "万",
		"pinyin": "wàn",
		"english": "ten thousand"
	},
	{
		"id": 297,
		"hanzi": "主",
		"pinyin": "zhǔ",
		"english": "lord"
	},
	{
		"id": 298,
		"hanzi": "住",
		"pinyin": "zhù",
		"english": "to live in"
	},
	{
		"id": 299,
		"hanzi": "注",
		"pinyin": "zhù",
		"english": "pour"
	},
	{
		"id": 300,
		"hanzi": "往",
		"pinyin": "wàng; wǎng",
		"english": "towards; go"
	},
	{
		"id": "301a",
		"hanzi": "兀",
		"pinyin": null,
		"english": "“pedestal”"
	},
	{
		"id": 301,
		"hanzi": "元",
		"pinyin": "yuán",
		"english": "yuan"
	},
	{
		"id": 302,
		"hanzi": "园",
		"pinyin": "yuán",
		"english": "garden"
	},
	{
		"id": 303,
		"hanzi": "远",
		"pinyin": "yuǎn",
		"english": "distant"
	},
	{
		"id": 304,
		"hanzi": "玩",
		"pinyin": "wán",
		"english": "play"
	},
	{
		"id": 305,
		"hanzi": "完",
		"pinyin": "wán",
		"english": "finish"
	},
	{
		"id": 306,
		"hanzi": "院",
		"pinyin": "yuàn",
		"english": "institute"
	},
	{
		"id": 307,
		"hanzi": "南",
		"pinyin": "nán",
		"english": "south"
	},
	{
		"id": 308,
		"hanzi": "幸",
		"pinyin": "xìng",
		"english": "good fortune"
	},
	{
		"id": 309,
		"hanzi": "平",
		"pinyin": "píng",
		"english": "level"
	},
	{
		"id": 310,
		"hanzi": "苹",
		"pinyin": "píng",
		"english": ["apple"]
	},
	{
		"id": 311,
		"hanzi": "评",
		"pinyin": "píng",
		"english": "comment on"
	},
	{
		"id": 312,
		"hanzi": "事",
		"pinyin": "shì",
		"english": "affair"
	},
	{
		"id": 313,
		"hanzi": "面",
		"pinyin": "miàn",
		"english": "face"
	},
	{
		"id": "314a",
		"hanzi": "此",
		"pinyin": "cǐ",
		"english": "this"
	},
	{
		"id": 314,
		"hanzi": "些",
		"pinyin": "xiē",
		"english": "a few"
	},
	{
		"id": 315,
		"hanzi": "倍",
		"pinyin": "bèi",
		"english": "multiple"
	},
	{
		"id": 316,
		"hanzi": "部",
		"pinyin": "bù",
		"english": "section"
	},
	{
		"id": "317a",
		"hanzi": "丬",
		"pinyin": null,
		"english": "“firewood”"
	},
	{
		"id": 317,
		"hanzi": "北",
		"pinyin": "běi",
		"english": "north"
	},
	{
		"id": 318,
		"hanzi": "将",
		"pinyin": "jiāng",
		"english": "going to"
	},
	{
		"id": 319,
		"hanzi": "东",
		"pinyin": "dōng",
		"english": "east"
	},
	{
		"id": 320,
		"hanzi": "乐",
		"pinyin": "yuè (lè)",
		"english": "music"
	},
	{
		"id": 321,
		"hanzi": "算",
		"pinyin": "suàn",
		"english": "reckon"
	},
	{
		"id": 322,
		"hanzi": "第",
		"pinyin": "dì",
		"english": "number"
	},
	{
		"id": 323,
		"hanzi": "弟",
		"pinyin": "dì",
		"english": "younger brother"
	},
	{
		"id": 324,
		"hanzi": "劳",
		"pinyin": "láo",
		"english": "toil"
	},
	{
		"id": 325,
		"hanzi": "加",
		"pinyin": "jiā",
		"english": "add"
	},
	{
		"id": 326,
		"hanzi": "驾",
		"pinyin": "jià",
		"english": "drive (a vehicle)"
	},
	{
		"id": 327,
		"hanzi": "咖",
		"pinyin": "kā",
		"english": ["coffee"]
	},
	{
		"id": 328,
		"hanzi": "非",
		"pinyin": "fēi",
		"english": "un-"
	},
	{
		"id": 329,
		"hanzi": "啡",
		"pinyin": "fēi",
		"english": ["coffee"]
	},
	{
		"id": 330,
		"hanzi": "排",
		"pinyin": "pái",
		"english": "line"
	},
	{
		"id": 331,
		"hanzi": "反",
		"pinyin": "fǎn",
		"english": "oppose"
	},
	{
		"id": 332,
		"hanzi": "饭",
		"pinyin": "fàn",
		"english": "meal"
	},
	{
		"id": 333,
		"hanzi": "板",
		"pinyin": "bǎn",
		"english": "board"
	},
	{
		"id": 334,
		"hanzi": "米",
		"pinyin": "mǐ",
		"english": "rice"
	},
	{
		"id": 335,
		"hanzi": "青",
		"pinyin": "qīng",
		"english": "blue-green"
	},
	{
		"id": 336,
		"hanzi": "请",
		"pinyin": "qǐng",
		"english": "please"
	},
	{
		"id": 337,
		"hanzi": "清",
		"pinyin": "qīng",
		"english": "transparent"
	},
	{
		"id": 338,
		"hanzi": "晴",
		"pinyin": "qíng",
		"english": "fine weather"
	},
	{
		"id": "339a",
		"hanzi": "忄",
		"pinyin": null,
		"english": "heart"
	},
	{
		"id": 339,
		"hanzi": "情",
		"pinyin": "qíng",
		"english": "state of affairs"
	},
	{
		"id": 340,
		"hanzi": "睛",
		"pinyin": "jīng",
		"english": "pupil (of eye)"
	},
	{
		"id": 341,
		"hanzi": "精",
		"pinyin": "jīng",
		"english": "splendid"
	},
	{
		"id": 342,
		"hanzi": "亮",
		"pinyin": "liàng",
		"english": "shining"
	},
	{
		"id": "343a",
		"hanzi": "亭",
		"pinyin": "tíng",
		"english": "pavilion"
	},
	{
		"id": 343,
		"hanzi": "停",
		"pinyin": "tíng",
		"english": "halt"
	},
	{
		"id": 344,
		"hanzi": "单",
		"pinyin": "dān",
		"english": "single"
	},
	{
		"id": 345,
		"hanzi": "间",
		"pinyin": "jiān",
		"english": "room"
	},
	{
		"id": 346,
		"hanzi": "简",
		"pinyin": "jiǎn",
		"english": "simple"
	},
	{
		"id": 347,
		"hanzi": "合",
		"pinyin": "hé",
		"english": "join together"
	},
	{
		"id": 348,
		"hanzi": "拿",
		"pinyin": "ná",
		"english": "using"
	},
	{
		"id": 349,
		"hanzi": "拾",
		"pinyin": "shí",
		"english": "pick up"
	},
	{
		"id": 350,
		"hanzi": "哈",
		"pinyin": "hā",
		"english": "laugh"
	},
	{
		"id": 351,
		"hanzi": "给",
		"pinyin": "gěi (jǐ)",
		"english": "for (someone)"
	},
	{
		"id": 352,
		"hanzi": "答",
		"pinyin": "dá (dā)",
		"english": "answer"
	},
	{
		"id": 353,
		"hanzi": "片",
		"pinyin": "piàn",
		"english": "slice"
	},
	{
		"id": 354,
		"hanzi": "叫",
		"pinyin": "jiào",
		"english": "call"
	},
	{
		"id": 355,
		"hanzi": "收",
		"pinyin": "shōu",
		"english": "accept"
	},
	{
		"id": "356a",
		"hanzi": "卑",
		"pinyin": "bēi",
		"english": "inferior"
	},
	{
		"id": 356,
		"hanzi": "啤",
		"pinyin": "pí",
		"english": ["beer"]
	},
	{
		"id": "357a",
		"hanzi": "井",
		"pinyin": "jǐng",
		"english": "a well"
	},
	{
		"id": 357,
		"hanzi": "讲",
		"pinyin": "jiǎng",
		"english": "talk"
	},
	{
		"id": 358,
		"hanzi": "进",
		"pinyin": "jìn",
		"english": "proceed"
	},
	{
		"id": 359,
		"hanzi": "改",
		"pinyin": "gǎi",
		"english": "alter"
	},
	{
		"id": "360a",
		"hanzi": "冫",
		"pinyin": null,
		"english": "ice"
	},
	{
		"id": 360,
		"hanzi": "况",
		"pinyin": "kuàng",
		"english": "situation"
	},
	{
		"id": "361a",
		"hanzi": "欠",
		"pinyin": "qiàn",
		"english": "lacking"
	},
	{
		"id": 361,
		"hanzi": "次",
		"pinyin": "cì",
		"english": "times"
	},
	{
		"id": 362,
		"hanzi": "吹",
		"pinyin": "chuī",
		"english": "puff"
	},
	{
		"id": 363,
		"hanzi": "欢",
		"pinyin": "huān",
		"english": "joyful"
	},
	{
		"id": 364,
		"hanzi": "久",
		"pinyin": "jiǔ",
		"english": "long time"
	},
	{
		"id": "365a",
		"hanzi": "爪",
		"pinyin": "zhǎo; zhuǎ",
		"english": "claw"
	},
	{
		"id": 365,
		"hanzi": "爱",
		"pinyin": "ài",
		"english": "love"
	},
	{
		"id": 366,
		"hanzi": "暖",
		"pinyin": "nuǎn",
		"english": "warm"
	},
	{
		"id": 367,
		"hanzi": "父",
		"pinyin": "fù",
		"english": "father"
	},
	{
		"id": "368a",
		"hanzi": "巴",
		"pinyin": "bā",
		"english": "wait for"
	},
	{
		"id": 368,
		"hanzi": "吧",
		"pinyin": "ba",
		"english": "suggestion"
	},
	{
		"id": 369,
		"hanzi": "把",
		"pinyin": "bǎ",
		"english": "handle"
	},
	{
		"id": 370,
		"hanzi": "爸",
		"pinyin": "bà",
		"english": "dad"
	},
	{
		"id": 371,
		"hanzi": "爬",
		"pinyin": "pá",
		"english": "climb"
	},
	{
		"id": 372,
		"hanzi": "关",
		"pinyin": "guān",
		"english": "switch off"
	},
	{
		"id": 373,
		"hanzi": "送",
		"pinyin": "sòng",
		"english": "deliver"
	},
	{
		"id": 374,
		"hanzi": "联",
		"pinyin": "lián",
		"english": "connect"
	},
	{
		"id": 375,
		"hanzi": "言",
		"pinyin": "yán",
		"english": "words"
	},
	{
		"id": 376,
		"hanzi": "信",
		"pinyin": "xìn",
		"english": "letter"
	},
	{
		"id": 377,
		"hanzi": "少",
		"pinyin": "shǎo (shào)",
		"english": "few"
	},
	{
		"id": 378,
		"hanzi": "步",
		"pinyin": "bù",
		"english": "step"
	},
	{
		"id": 379,
		"hanzi": "省",
		"pinyin": "shěng",
		"english": "province"
	},
	{
		"id": 380,
		"hanzi": "交",
		"pinyin": "jiāo",
		"english": "pay"
	},
	{
		"id": 381,
		"hanzi": "饺",
		"pinyin": "jiǎo",
		"english": "dumpling"
	},
	{
		"id": 382,
		"hanzi": "较",
		"pinyin": "jiào",
		"english": "comparison"
	},
	{
		"id": 383,
		"hanzi": "校",
		"pinyin": "xiào",
		"english": "school"
	},
	{
		"id": 384,
		"hanzi": "牛",
		"pinyin": "niú",
		"english": "cow"
	},
	{
		"id": 385,
		"hanzi": "件",
		"pinyin": "jiàn",
		"english": "number of things"
	},
	{
		"id": 386,
		"hanzi": "哥",
		"pinyin": "gē",
		"english": "older brother"
	},
	{
		"id": 387,
		"hanzi": "歌",
		"pinyin": "gē",
		"english": "song"
	},
	{
		"id": 388,
		"hanzi": "应",
		"pinyin": "yīng (yìng)",
		"english": "should"
	},
	{
		"id": 389,
		"hanzi": "向",
		"pinyin": "xiàng",
		"english": "towards"
	},
	{
		"id": 390,
		"hanzi": "响",
		"pinyin": "xiǎng",
		"english": "noisy"
	},
	{
		"id": 391,
		"hanzi": "化",
		"pinyin": "huà",
		"english": "to change"
	},
	{
		"id": 392,
		"hanzi": "花",
		"pinyin": "huā",
		"english": "flower"
	},
	{
		"id": 393,
		"hanzi": "历",
		"pinyin": "lì",
		"english": "experience"
	},
	{
		"id": 394,
		"hanzi": "旧",
		"pinyin": "jiù",
		"english": "outdated"
	},
	{
		"id": 395,
		"hanzi": "业",
		"pinyin": "yè",
		"english": "industry"
	},
	{
		"id": "396a",
		"hanzi": "亚",
		"pinyin": "yà",
		"english": "asia"
	},
	{
		"id": "396b",
		"hanzi": "並",
		"pinyin": null,
		"english": "stand side by side"
	},
	{
		"id": 396,
		"hanzi": "碰",
		"pinyin": "pèng",
		"english": "bump into"
	},
	{
		"id": 397,
		"hanzi": "史",
		"pinyin": "shǐ",
		"english": "history"
	},
	{
		"id": "398a",
		"hanzi": "吏",
		"pinyin": null,
		"english": "an official"
	},
	{
		"id": 398,
		"hanzi": "使",
		"pinyin": "shǐ",
		"english": "use"
	},
	{
		"id": 399,
		"hanzi": "更",
		"pinyin": "gèng",
		"english": "even more"
	},
	{
		"id": 400,
		"hanzi": "便",
		"pinyin": "pián; biàn",
		"english": "1. advantageous 2. convenient"
	},
	{
		"id": "401a",
		"hanzi": "央",
		"pinyin": "yāng",
		"english": "center"
	},
	{
		"id": 401,
		"hanzi": "英",
		"pinyin": "yīng",
		"english": "hero"
	},
	{
		"id": "402a",
		"hanzi": "夬",
		"pinyin": "to",
		"english": "separate"
	},
	{
		"id": 402,
		"hanzi": "块",
		"pinyin": "kuài",
		"english": "lump"
	},
	{
		"id": 403,
		"hanzi": "快",
		"pinyin": "kuài",
		"english": "quick"
	},
	{
		"id": 404,
		"hanzi": "决",
		"pinyin": "jué",
		"english": "decide"
	},
	{
		"id": 405,
		"hanzi": "觉",
		"pinyin": "jué; jiào",
		"english": "1. feel 2. sleep"
	},
	{
		"id": 406,
		"hanzi": "定",
		"pinyin": "dìng",
		"english": "decide on"
	},
	{
		"id": 407,
		"hanzi": "重",
		"pinyin": "zhòng (chóng)",
		"english": "heavy"
	},
	{
		"id": "408a",
		"hanzi": "董",
		"pinyin": "dǒng",
		"english": "director"
	},
	{
		"id": 408,
		"hanzi": "懂",
		"pinyin": "dǒng",
		"english": "understand"
	},
	{
		"id": "409a",
		"hanzi": "垂",
		"pinyin": "chuí",
		"english": "droop"
	},
	{
		"id": 409,
		"hanzi": "睡",
		"pinyin": "shuì",
		"english": "sleep"
	},
	{
		"id": 410,
		"hanzi": "飞",
		"pinyin": "fēi<",
		"english": "to fly"
	},
	{
		"id": 411,
		"hanzi": "气",
		"pinyin": "qì",
		"english": "air"
	},
	{
		"id": 412,
		"hanzi": "汽",
		"pinyin": "qì",
		"english": "steam"
	},
	{
		"id": "413a",
		"hanzi": "乙",
		"pinyin": "yǐ",
		"english": "second"
	},
	{
		"id": 413,
		"hanzi": "亿",
		"pinyin": "yì",
		"english": "hundred million"
	},
	{
		"id": 414,
		"hanzi": "艺",
		"pinyin": "yì",
		"english": "art"
	},
	{
		"id": "415a",
		"hanzi": "乞",
		"pinyin": "qǐ",
		"english": "beg"
	},
	{
		"id": 415,
		"hanzi": "吃",
		"pinyin": "chī",
		"english": "eat"
	},
	{
		"id": 416,
		"hanzi": "全",
		"pinyin": "quán",
		"english": "whole"
	},
	{
		"id": 417,
		"hanzi": "色",
		"pinyin": "sè",
		"english": "color"
	},
	{
		"id": 418,
		"hanzi": "角",
		"pinyin": "jiǎo",
		"english": "“dime”"
	},
	{
		"id": 419,
		"hanzi": "确",
		"pinyin": "què",
		"english": "certain"
	},
	{
		"id": 420,
		"hanzi": "嘴",
		"pinyin": "zuǐ",
		"english": "mouth"
	},
	{
		"id": 421,
		"hanzi": "最",
		"pinyin": "zuì",
		"english": "utmost"
	},
	{
		"id": "422a",
		"hanzi": "炎",
		"pinyin": "yán",
		"english": "inflammation"
	},
	{
		"id": 422,
		"hanzi": "谈",
		"pinyin": "tán",
		"english": "talk over"
	},
	{
		"id": "423a",
		"hanzi": "与",
		"pinyin": "yǔ; yù",
		"english": "with"
	},
	{
		"id": 423,
		"hanzi": "写",
		"pinyin": "xiě",
		"english": "write"
	},
	{
		"id": "424a",
		"hanzi": "丂",
		"pinyin": null,
		"english": "“choke”"
	},
	{
		"id": 424,
		"hanzi": "号",
		"pinyin": "hào",
		"english": "date"
	},
	{
		"id": "425a",
		"hanzi": "廿",
		"pinyin": "niàn",
		"english": "twenty"
	},
	{
		"id": 425,
		"hanzi": "度",
		"pinyin": "dù",
		"english": "degrees"
	},
	{
		"id": 426,
		"hanzi": "态",
		"pinyin": "tài",
		"english": "attitude"
	},
	{
		"id": "427a",
		"hanzi": "巾",
		"pinyin": "jīn",
		"english": "towel"
	},
	{
		"id": 427,
		"hanzi": "市",
		"pinyin": "shì",
		"english": "market"
	},
	{
		"id": "428a",
		"hanzi": "帀",
		"pinyin": null,
		"english": "“encompass”"
	},
	{
		"id": 428,
		"hanzi": "师",
		"pinyin": "shī",
		"english": "master"
	},
	{
		"id": 429,
		"hanzi": "带",
		"pinyin": "dài",
		"english": "belt"
	},
	{
		"id": 430,
		"hanzi": "示",
		"pinyin": "shì",
		"english": "sign"
	},
	{
		"id": 431,
		"hanzi": "票",
		"pinyin": "piào",
		"english": "ticket"
	},
	{
		"id": 432,
		"hanzi": "漂",
		"pinyin": "piào",
		"english": "pretty"
	},
	{
		"id": "433a",
		"hanzi": "礻",
		"pinyin": null,
		"english": "sign"
	},
	{
		"id": 433,
		"hanzi": "社",
		"pinyin": "shè",
		"english": "society"
	},
	{
		"id": 434,
		"hanzi": "祝",
		"pinyin": "zhù",
		"english": "best wishes"
	},
	{
		"id": 435,
		"hanzi": "视",
		"pinyin": "shì",
		"english": "to watch"
	},
	{
		"id": 436,
		"hanzi": "表",
		"pinyin": "biǎo",
		"english": "indicator"
	},
	{
		"id": 437,
		"hanzi": "衣",
		"pinyin": "yī",
		"english": "clothes"
	},
	{
		"id": 438,
		"hanzi": "农",
		"pinyin": "nóng",
		"english": "farm"
	},
	{
		"id": "439a",
		"hanzi": "衤",
		"pinyin": null,
		"english": "clothes"
	},
	{
		"id": 439,
		"hanzi": "初",
		"pinyin": "chū",
		"english": "beginning"
	},
	{
		"id": "440a",
		"hanzi": "皮",
		"pinyin": "pí",
		"english": "skin"
	},
	{
		"id": 440,
		"hanzi": "被",
		"pinyin": "bèi",
		"english": "by"
	},
	{
		"id": 441,
		"hanzi": "破",
		"pinyin": "pò",
		"english": "damage"
	},
	{
		"id": 442,
		"hanzi": "坏",
		"pinyin": "huài",
		"english": "bad"
	},
	{
		"id": 443,
		"hanzi": "且",
		"pinyin": "qiě",
		"english": "“bookcase”"
	},
	{
		"id": 444,
		"hanzi": "姐",
		"pinyin": "jiě",
		"english": "older sister"
	},
	{
		"id": 445,
		"hanzi": "助",
		"pinyin": "zhù",
		"english": "to help"
	},
	{
		"id": 446,
		"hanzi": "租",
		"pinyin": "zū",
		"english": "rent"
	},
	{
		"id": 447,
		"hanzi": "祖",
		"pinyin": "zǔ",
		"english": "ancestor"
	},
	{
		"id": 448,
		"hanzi": "组",
		"pinyin": "zǔ",
		"english": "organize"
	},
	{
		"id": 449,
		"hanzi": "宜",
		"pinyin": "yí",
		"english": "appropriate"
	},
	{
		"id": 450,
		"hanzi": "谊",
		"pinyin": "yì",
		"english": "friendship"
	},
	{
		"id": 451,
		"hanzi": "直",
		"pinyin": "zhí",
		"english": "straight"
	},
	{
		"id": 452,
		"hanzi": "真",
		"pinyin": "zhēn",
		"english": "truly"
	},
	{
		"id": 453,
		"hanzi": "毛",
		"pinyin": "máo",
		"english": "wool"
	},
	{
		"id": 454,
		"hanzi": "笔",
		"pinyin": "bǐ",
		"english": "pen"
	},
	{
		"id": 455,
		"hanzi": "民",
		"pinyin": "mín",
		"english": "the people"
	},
	{
		"id": "456a",
		"hanzi": "弋",
		"pinyin": null,
		"english": "stake"
	},
	{
		"id": 456,
		"hanzi": "代",
		"pinyin": "dài",
		"english": "substitute"
	},
	{
		"id": "457a",
		"hanzi": "舌",
		"pinyin": "shé",
		"english": "tongue"
	},
	{
		"id": 457,
		"hanzi": "刮",
		"pinyin": "guā",
		"english": "to blow"
	},
	{
		"id": 458,
		"hanzi": "话",
		"pinyin": "huà",
		"english": "speech"
	},
	{
		"id": 459,
		"hanzi": "适",
		"pinyin": "shì",
		"english": "suitable"
	},
	{
		"id": 460,
		"hanzi": "活",
		"pinyin": "huó",
		"english": "alive"
	},
	{
		"id": 461,
		"hanzi": "术",
		"pinyin": "shù",
		"english": "craft"
	},
	{
		"id": 462,
		"hanzi": "支",
		"pinyin": "zhī",
		"english": "branch"
	},
	{
		"id": 463,
		"hanzi": "技",
		"pinyin": "jì",
		"english": "skill"
	},
	{
		"id": "464a",
		"hanzi": "寺",
		"pinyin": null,
		"english": "temple"
	},
	{
		"id": 464,
		"hanzi": "等",
		"pinyin": "děng",
		"english": "wait for"
	},
	{
		"id": 465,
		"hanzi": "持",
		"pinyin": "chí",
		"english": "maintain"
	},
	{
		"id": 466,
		"hanzi": "特",
		"pinyin": "tè",
		"english": "special"
	},
	{
		"id": 467,
		"hanzi": "义",
		"pinyin": "yì",
		"english": "just"
	},
	{
		"id": 468,
		"hanzi": "风",
		"pinyin": "fēng",
		"english": "wind"
	},
	{
		"id": 469,
		"hanzi": "数",
		"pinyin": "shù; shǔ",
		"english": "number; to count"
	},
	{
		"id": 470,
		"hanzi": "楼",
		"pinyin": "lóu",
		"english": "story"
	},
	{
		"id": 471,
		"hanzi": "层",
		"pinyin": "céng",
		"english": "tier"
	},
	{
		"id": 472,
		"hanzi": "室",
		"pinyin": "shì",
		"english": "a room"
	},
	{
		"id": 473,
		"hanzi": "屋",
		"pinyin": "wū",
		"english": "accommodation"
	},
	{
		"id": 474,
		"hanzi": "握",
		"pinyin": "wò",
		"english": "grasp"
	},
	{
		"id": 475,
		"hanzi": "提",
		"pinyin": "tí",
		"english": "carry"
	},
	{
		"id": 476,
		"hanzi": "让",
		"pinyin": "ràng",
		"english": "allow"
	},
	{
		"id": "477a",
		"hanzi": "贝",
		"pinyin": "bèi",
		"english": "seashell"
	},
	{
		"id": 477,
		"hanzi": "页",
		"pinyin": "yè",
		"english": "page"
	},
	{
		"id": 478,
		"hanzi": "题",
		"pinyin": "tí",
		"english": "topic"
	},
	{
		"id": 479,
		"hanzi": "员",
		"pinyin": "yuán",
		"english": "member"
	},
	{
		"id": 480,
		"hanzi": "圆",
		"pinyin": "yuán",
		"english": "circle"
	},
	{
		"id": 481,
		"hanzi": "高",
		"pinyin": "gāo",
		"english": "high"
	},
	{
		"id": 482,
		"hanzi": "搞",
		"pinyin": "gǎo",
		"english": "engaged in"
	},
	{
		"id": "483a",
		"hanzi": "台",
		"pinyin": "tái",
		"english": "platform"
	},
	{
		"id": 483,
		"hanzi": "治",
		"pinyin": "zhì",
		"english": "treat (disease)"
	},
	{
		"id": 484,
		"hanzi": "抬",
		"pinyin": "tái",
		"english": "raise"
	},
	{
		"id": 485,
		"hanzi": "始",
		"pinyin": "shǐ",
		"english": "start"
	},
	{
		"id": "486a",
		"hanzi": "谷",
		"pinyin": "gǔ",
		"english": "valley"
	},
	{
		"id": 486,
		"hanzi": "容",
		"pinyin": "róng",
		"english": "tolerate"
	},
	{
		"id": "487a",
		"hanzi": "士",
		"pinyin": "shì",
		"english": "scholar"
	},
	{
		"id": 487,
		"hanzi": "志",
		"pinyin": "zhì",
		"english": "intention"
	},
	{
		"id": 488,
		"hanzi": "声",
		"pinyin": "shēng",
		"english": "voice"
	},
	{
		"id": "489a",
		"hanzi": "壮",
		"pinyin": "zhuàng",
		"english": "sturdy"
	},
	{
		"id": 489,
		"hanzi": "装",
		"pinyin": "zhuāng",
		"english": "pretend"
	},
	{
		"id": "490a",
		"hanzi": "矢",
		"pinyin": "shǐ",
		"english": "arrow"
	},
	{
		"id": 490,
		"hanzi": "知",
		"pinyin": "zhī",
		"english": "know"
	},
	{
		"id": "491a",
		"hanzi": "匚",
		"pinyin": null,
		"english": "container"
	},
	{
		"id": 491,
		"hanzi": "医",
		"pinyin": "yī",
		"english": "heal"
	},
	{
		"id": 492,
		"hanzi": "贵",
		"pinyin": "guì",
		"english": "expensive"
	},
	{
		"id": 493,
		"hanzi": "您",
		"pinyin": "nín",
		"english": "you (polite)"
	},
	{
		"id": 494,
		"hanzi": "束",
		"pinyin": "shù",
		"english": "bundle"
	},
	{
		"id": 495,
		"hanzi": "整",
		"pinyin": "zhěng",
		"english": "entire"
	},
	{
		"id": 496,
		"hanzi": "嗽",
		"pinyin": "sòu",
		"english": "cough"
	},
	{
		"id": "497a",
		"hanzi": "亥",
		"pinyin": "hài",
		"english": "pig"
	},
	{
		"id": 497,
		"hanzi": "该",
		"pinyin": "gāi",
		"english": "ought"
	},
	{
		"id": 498,
		"hanzi": "孩",
		"pinyin": "hái",
		"english": "youngster"
	},
	{
		"id": 499,
		"hanzi": "咳",
		"pinyin": "ké",
		"english": "cough"
	},
	{
		"id": 500,
		"hanzi": "刻",
		"pinyin": "kè",
		"english": "quarter (hour)"
	},
	{
		"id": "501a",
		"hanzi": "隹",
		"pinyin": null,
		"english": "pigeon"
	},
	{
		"id": 501,
		"hanzi": "谁",
		"pinyin": "shuí (shéi)",
		"english": "who?"
	},
	{
		"id": 502,
		"hanzi": "推",
		"pinyin": "tuī",
		"english": "push"
	},
	{
		"id": 503,
		"hanzi": "难",
		"pinyin": "nán",
		"english": "difficult"
	},
	{
		"id": 504,
		"hanzi": "准",
		"pinyin": "zhǔn",
		"english": "accurate"
	},
	{
		"id": 505,
		"hanzi": "集",
		"pinyin": "jí",
		"english": "assemble"
	},
	{
		"id": "506a",
		"hanzi": "夂",
		"pinyin": null,
		"english": "pursue"
	},
	{
		"id": 506,
		"hanzi": "处",
		"pinyin": "chù (chǔ)",
		"english": "place"
	},
	{
		"id": 507,
		"hanzi": "各",
		"pinyin": "gè",
		"english": "each"
	},
	{
		"id": 508,
		"hanzi": "路",
		"pinyin": "lù",
		"english": "path"
	},
	{
		"id": 509,
		"hanzi": "客",
		"pinyin": "kè",
		"english": "guest"
	},
	{
		"id": "510a",
		"hanzi": "丙",
		"pinyin": "bǐng",
		"english": "third"
	},
	{
		"id": "510b",
		"hanzi": "疒",
		"pinyin": null,
		"english": "illness"
	},
	{
		"id": 510,
		"hanzi": "病",
		"pinyin": "bìng",
		"english": "disease"
	},
	{
		"id": 511,
		"hanzi": "杂",
		"pinyin": "zá",
		"english": "mixed"
	},
	{
		"id": 512,
		"hanzi": "怎",
		"pinyin": "zěn",
		"english": "how?"
	},
	{
		"id": "513a",
		"hanzi": "庄",
		"pinyin": "zhuāng",
		"english": "premises"
	},
	{
		"id": 513,
		"hanzi": "脏",
		"pinyin": "zāng (zàng)",
		"english": "dirty"
	},
	{
		"id": 514,
		"hanzi": "总",
		"pinyin": "zǒng",
		"english": "always"
	},
	{
		"id": 515,
		"hanzi": "责",
		"pinyin": "zé",
		"english": "duty"
	},
	{
		"id": 516,
		"hanzi": "绩",
		"pinyin": "jì",
		"english": "achievement"
	},
	{
		"id": 517,
		"hanzi": "负",
		"pinyin": "fù",
		"english": "to shoulder"
	},
	{
		"id": 518,
		"hanzi": "才",
		"pinyin": "cái",
		"english": "only; just"
	},
	{
		"id": 519,
		"hanzi": "团",
		"pinyin": "tuán",
		"english": "group"
	},
	{
		"id": 520,
		"hanzi": "因",
		"pinyin": "yīn",
		"english": "because"
	},
	{
		"id": "521a",
		"hanzi": "恩",
		"pinyin": "ēn",
		"english": "a favor"
	},
	{
		"id": 521,
		"hanzi": "嗯",
		"pinyin": "ng",
		"english": "eh"
	},
	{
		"id": 522,
		"hanzi": "困",
		"pinyin": "kùn",
		"english": "difficulty"
	},
	{
		"id": 523,
		"hanzi": "水",
		"pinyin": "shuǐ",
		"english": "water"
	},
	{
		"id": 524,
		"hanzi": "求",
		"pinyin": "qiú",
		"english": "request"
	},
	{
		"id": 525,
		"hanzi": "球",
		"pinyin": "qiú",
		"english": "ball"
	},
	{
		"id": "526a",
		"hanzi": "勿",
		"pinyin": "wù",
		"english": "don’t!"
	},
	{
		"id": 526,
		"hanzi": "忽",
		"pinyin": "hū",
		"english": "sudden"
	},
	{
		"id": 527,
		"hanzi": "物",
		"pinyin": "wù",
		"english": "thing"
	},
	{
		"id": 528,
		"hanzi": "易",
		"pinyin": "yì",
		"english": "easy"
	},
	{
		"id": 529,
		"hanzi": "踢",
		"pinyin": "tī",
		"english": "kick"
	},
	{
		"id": 530,
		"hanzi": "场",
		"pinyin": "chǎng",
		"english": "site"
	},
	{
		"id": 531,
		"hanzi": "汤",
		"pinyin": "tāng",
		"english": "soup"
	},
	{
		"id": 532,
		"hanzi": "扬",
		"pinyin": "yáng",
		"english": "make known"
	},
	{
		"id": "533a",
		"hanzi": "乃",
		"pinyin": "nǎi",
		"english": "sigh"
	},
	{
		"id": 533,
		"hanzi": "奶",
		"pinyin": "nǎi",
		"english": "milk"
	},
	{
		"id": "534a",
		"hanzi": "及",
		"pinyin": "jí",
		"english": "reach"
	},
	{
		"id": 534,
		"hanzi": "极",
		"pinyin": "jí",
		"english": "extremity"
	},
	{
		"id": 535,
		"hanzi": "级",
		"pinyin": "jí",
		"english": "grade"
	},
	{
		"id": 536,
		"hanzi": "原",
		"pinyin": "original",
		"english": "yuán"
	},
	{
		"id": 537,
		"hanzi": "愿",
		"pinyin": "yuàn",
		"english": "to desire"
	},
	{
		"id": "538a",
		"hanzi": "吉",
		"pinyin": "jí",
		"english": "auspicious"
	},
	{
		"id": 538,
		"hanzi": "结",
		"pinyin": "jié (jiē)",
		"english": "tie up"
	},
	{
		"id": 539,
		"hanzi": "喜",
		"pinyin": "xǐ",
		"english": "celebration"
	},
	{
		"id": 540,
		"hanzi": "周",
		"pinyin": "zhōu",
		"english": "week"
	},
	{
		"id": 541,
		"hanzi": "调",
		"pinyin": "diào",
		"english": "tune"
	},
	{
		"id": "542a",
		"hanzi": "尚",
		"pinyin": "shàng",
		"english": "esteem"
	},
	{
		"id": 542,
		"hanzi": "躺",
		"pinyin": "tǎng",
		"english": "lie down"
	},
	{
		"id": 543,
		"hanzi": "堂",
		"pinyin": "táng",
		"english": "hall"
	},
	{
		"id": 544,
		"hanzi": "常",
		"pinyin": "cháng",
		"english": "often"
	},
	{
		"id": 545,
		"hanzi": "掌",
		"pinyin": "zhǎng",
		"english": "palm (of hand)"
	},
	{
		"id": 546,
		"hanzi": "条",
		"pinyin": "tiáo",
		"english": "slip of paper"
	},
	{
		"id": 547,
		"hanzi": "务",
		"pinyin": "wù",
		"english": "to work at"
	},
	{
		"id": 548,
		"hanzi": "备",
		"pinyin": "bèi",
		"english": "prepare"
	},
	{
		"id": 549,
		"hanzi": "鱼",
		"pinyin": "yú",
		"english": "fish"
	},
	{
		"id": 550,
		"hanzi": "复",
		"pinyin": "fù",
		"english": "repeat"
	},
	{
		"id": "551a",
		"hanzi": "壬",
		"pinyin": "rén",
		"english": "ninth"
	},
	{
		"id": 551,
		"hanzi": "任",
		"pinyin": "rèn",
		"english": "whatever"
	},
	{
		"id": 552,
		"hanzi": "计",
		"pinyin": "jì",
		"english": "calculate"
	},
	{
		"id": 553,
		"hanzi": "设",
		"pinyin": "shè",
		"english": "establish"
	},
	{
		"id": 554,
		"hanzi": "划",
		"pinyin": "huà (huá)",
		"english": "to plan"
	},
	{
		"id": 555,
		"hanzi": "或",
		"pinyin": "huò",
		"english": "or"
	},
	{
		"id": "556a",
		"hanzi": "咸",
		"pinyin": "xián",
		"english": "salty"
	},
	{
		"id": 556,
		"hanzi": "感",
		"pinyin": "gǎn",
		"english": "feel"
	},
	{
		"id": 557,
		"hanzi": "喊",
		"pinyin": "hǎn",
		"english": "shout"
	},
	{
		"id": 558,
		"hanzi": "布",
		"pinyin": "bù",
		"english": "cloth"
	},
	{
		"id": 559,
		"hanzi": "希",
		"pinyin": "xī",
		"english": "to wish"
	},
	{
		"id": "560a",
		"hanzi": "卩",
		"pinyin": null,
		"english": "seal"
	},
	{
		"id": 560,
		"hanzi": "节",
		"pinyin": "jié",
		"english": "festival"
	},
	{
		"id": "561a",
		"hanzi": "却",
		"pinyin": "què",
		"english": "despite"
	},
	{
		"id": 561,
		"hanzi": "脚",
		"pinyin": "jiǎo",
		"english": "foot"
	},
	{
		"id": 562,
		"hanzi": "报",
		"pinyin": "bào",
		"english": "to report"
	},
	{
		"id": 563,
		"hanzi": "服",
		"pinyin": "fú",
		"english": "obey"
	},
	{
		"id": "564a",
		"hanzi": "甬",
		"pinyin": null,
		"english": "“explosion”"
	},
	{
		"id": 564,
		"hanzi": "通",
		"pinyin": "tōng",
		"english": "pass through"
	},
	{
		"id": 565,
		"hanzi": "痛",
		"pinyin": "tòng",
		"english": "to ache"
	},
	{
		"id": "566b",
		"hanzi": "厄",
		"pinyin": "è",
		"english": "“uphill”"
	},
	{
		"id": 566,
		"hanzi": "危",
		"pinyin": "wēi",
		"english": "danger"
	},
	{
		"id": 567,
		"hanzi": "顾",
		"pinyin": "gù",
		"english": "attend to"
	},
	{
		"id": "568b",
		"hanzi": "亡",
		"pinyin": "wáng",
		"english": "perish"
	},
	{
		"id": 568,
		"hanzi": "忙",
		"pinyin": "máng",
		"english": "busy"
	},
	{
		"id": 569,
		"hanzi": "忘",
		"pinyin": "wàng",
		"english": "forget"
	},
	{
		"id": 570,
		"hanzi": "望",
		"pinyin": "wàng",
		"english": "gaze"
	},
	{
		"id": 571,
		"hanzi": "雨",
		"pinyin": "yǔ",
		"english": "rain"
	},
	{
		"id": 572,
		"hanzi": "雪",
		"pinyin": "xuě",
		"english": "snow"
	},
	{
		"id": "573a",
		"hanzi": "彡",
		"pinyin": null,
		"english": "hairs"
	},
	{
		"id": 573,
		"hanzi": "参",
		"pinyin": "cān",
		"english": "consult"
	},
	{
		"id": "574a",
		"hanzi": "景",
		"pinyin": "jǐng",
		"english": "view"
	},
	{
		"id": 574,
		"hanzi": "影",
		"pinyin": "yǐng",
		"english": "shadow"
	},
	{
		"id": "575a",
		"hanzi": "匃",
		"pinyin": null,
		"english": "“beggar”"
	},
	{
		"id": "575b",
		"hanzi": "曷",
		"pinyin": null,
		"english": "“a drink”"
	},
	{
		"id": 575,
		"hanzi": "喝",
		"pinyin": "hē",
		"english": "to drink"
	},
	{
		"id": 576,
		"hanzi": "渴",
		"pinyin": "kě",
		"english": "thirsty"
	},
	{
		"id": 577,
		"hanzi": "继",
		"pinyin": "jì",
		"english": "continue"
	},
	{
		"id": 578,
		"hanzi": "世",
		"pinyin": "shì",
		"english": "world"
	},
	{
		"id": 579,
		"hanzi": "介",
		"pinyin": "jiè",
		"english": "between"
	},
	{
		"id": 580,
		"hanzi": "界",
		"pinyin": "jiè",
		"english": "boundary"
	},
	{
		"id": "581a",
		"hanzi": "亦",
		"pinyin": "yì as",
		"english": "well"
	},
	{
		"id": 581,
		"hanzi": "变",
		"pinyin": "biàn",
		"english": "transform"
	},
	{
		"id": "582a",
		"hanzi": "夭",
		"pinyin": "die",
		"english": "young"
	},
	{
		"id": 582,
		"hanzi": "笑",
		"pinyin": "xiào",
		"english": "smile"
	},
	{
		"id": "583a",
		"hanzi": "乔",
		"pinyin": "qiáo",
		"english": "tall"
	},
	{
		"id": 583,
		"hanzi": "桥",
		"pinyin": "qiáo",
		"english": "bridge"
	},
	{
		"id": "584a",
		"hanzi": "歹",
		"pinyin": "dǎi",
		"english": "evil"
	},
	{
		"id": "584b",
		"hanzi": "列",
		"pinyin": "liè",
		"english": "line up"
	},
	{
		"id": 584,
		"hanzi": "例",
		"pinyin": "lì",
		"english": "example"
	},
	{
		"id": 585,
		"hanzi": "死",
		"pinyin": "sǐ",
		"english": "die"
	},
	{
		"id": 586,
		"hanzi": "解",
		"pinyin": "jiě",
		"english": "untie"
	},
	{
		"id": 587,
		"hanzi": "急",
		"pinyin": "jí",
		"english": "urgent"
	},
	{
		"id": "588a",
		"hanzi": "彦",
		"pinyin": "yàn",
		"english": "a good man"
	},
	{
		"id": 588,
		"hanzi": "颜",
		"pinyin": "yán",
		"english": "complexion"
	},
	{
		"id": 589,
		"hanzi": "许",
		"pinyin": "xǔ",
		"english": "to permit"
	},
	{
		"id": 590,
		"hanzi": "需",
		"pinyin": "xū",
		"english": "need"
	},
	{
		"id": 591,
		"hanzi": "须",
		"pinyin": "xū",
		"english": "have to"
	},
	{
		"id": 592,
		"hanzi": "续",
		"pinyin": "xù",
		"english": "carry on"
	},
	{
		"id": "593a",
		"hanzi": "令",
		"pinyin": "lìng",
		"english": "command"
	},
	{
		"id": 593,
		"hanzi": "冷",
		"pinyin": "lěng",
		"english": "cold"
	},
	{
		"id": 594,
		"hanzi": "零",
		"pinyin": "líng",
		"english": "zero"
	},
	{
		"id": 595,
		"hanzi": "领",
		"pinyin": "lǐng",
		"english": "to lead"
	},
	{
		"id": "596a",
		"hanzi": "召",
		"pinyin": "zhào",
		"english": "summon"
	},
	{
		"id": 596,
		"hanzi": "绍",
		"pinyin": "shào",
		"english": "continue"
	},
	{
		"id": "597a",
		"hanzi": "昭",
		"pinyin": "zhāo",
		"english": "obvious"
	},
	{
		"id": 597,
		"hanzi": "照",
		"pinyin": "zhào",
		"english": "shine"
	},
	{
		"id": 598,
		"hanzi": "查",
		"pinyin": "chá",
		"english": "check up"
	},
	{
		"id": 599,
		"hanzi": "检",
		"pinyin": "jiǎn",
		"english": "inspect"
	},
	{
		"id": 600,
		"hanzi": "脸",
		"pinyin": "lǐan",
		"english": "face"
	},
	{
		"id": 601,
		"hanzi": "险",
		"pinyin": "xiǎn",
		"english": "risky"
	},
	{
		"id": 602,
		"hanzi": "验",
		"pinyin": "yàn",
		"english": "examine"
	},
	{
		"id": "603a",
		"hanzi": "式",
		"pinyin": "shì",
		"english": "style"
	},
	{
		"id": 603,
		"hanzi": "试",
		"pinyin": "shì",
		"english": "to try"
	},
	{
		"id": 604,
		"hanzi": "考",
		"pinyin": "kǎo",
		"english": "to test"
	},
	{
		"id": "605a",
		"hanzi": "斗",
		"pinyin": "dòu; dǒu",
		"english": "fight"
	},
	{
		"id": 605,
		"hanzi": "科",
		"pinyin": "kē",
		"english": "classification"
	},
	{
		"id": 606,
		"hanzi": "研",
		"pinyin": "yán",
		"english": "research"
	},
	{
		"id": "607a",
		"hanzi": "幺",
		"pinyin": "yāo",
		"english": "smallest"
	},
	{
		"id": "607b",
		"hanzi": "糸",
		"pinyin": null,
		"english": "thread"
	},
	{
		"id": 607,
		"hanzi": "系",
		"pinyin": "xì",
		"english": "cluster"
	},
	{
		"id": 608,
		"hanzi": "累",
		"pinyin": "lèi (lěi)",
		"english": "exhausted"
	},
	{
		"id": "609a",
		"hanzi": "戋",
		"pinyin": null,
		"english": "tiny"
	},
	{
		"id": 609,
		"hanzi": "践",
		"pinyin": "jiàn",
		"english": "carry out"
	},
	{
		"id": 610,
		"hanzi": "钱",
		"pinyin": "qián",
		"english": "money"
	},
	{
		"id": 611,
		"hanzi": "浅",
		"pinyin": "qiǎn",
		"english": "shallow"
	},
	{
		"id": 612,
		"hanzi": "礼",
		"pinyin": "lǐ",
		"english": "gift"
	},
	{
		"id": 613,
		"hanzi": "乱",
		"pinyin": "luàn",
		"english": "chaotic"
	},
	{
		"id": 614,
		"hanzi": "育",
		"pinyin": "yù",
		"english": "nurture"
	},
	{
		"id": 615,
		"hanzi": "流",
		"pinyin": "liú",
		"english": "to flow"
	},
	{
		"id": "616a",
		"hanzi": "穴",
		"pinyin": "xué",
		"english": "hole"
	},
	{
		"id": 616,
		"hanzi": "究",
		"pinyin": "jiū",
		"english": "investigate"
	},
	{
		"id": 617,
		"hanzi": "空",
		"pinyin": "kōng (kòng)",
		"english": "empty"
	},
	{
		"id": 618,
		"hanzi": "突",
		"pinyin": "tū",
		"english": "prominent"
	},
	{
		"id": 619,
		"hanzi": "深",
		"pinyin": "shēn",
		"english": "deep"
	},
	{
		"id": "620a",
		"hanzi": "由",
		"pinyin": "yóu",
		"english": "because"
	},
	{
		"id": 620,
		"hanzi": "抽",
		"pinyin": "chōu",
		"english": "to extract"
	},
	{
		"id": 621,
		"hanzi": "邮",
		"pinyin": "yóu",
		"english": "mail"
	},
	{
		"id": "622a",
		"hanzi": "申",
		"pinyin": "shēn",
		"english": "to state"
	},
	{
		"id": 622,
		"hanzi": "神",
		"pinyin": "shén",
		"english": "gods"
	},
	{
		"id": "623b",
		"hanzi": "寅",
		"pinyin": "yín",
		"english": "tiger"
	},
	{
		"id": 623,
		"hanzi": "演",
		"pinyin": "yǎn",
		"english": "perform"
	},
	{
		"id": 624,
		"hanzi": "黄",
		"pinyin": "huáng",
		"english": "yellow"
	},
	{
		"id": 625,
		"hanzi": "共",
		"pinyin": "gòng",
		"english": "collectively"
	},
	{
		"id": "626a",
		"hanzi": "凵",
		"pinyin": null,
		"english": "pit"
	},
	{
		"id": 626,
		"hanzi": "画",
		"pinyin": "huà",
		"english": "drawing"
	},
	{
		"id": 627,
		"hanzi": "怕",
		"pinyin": "pà",
		"english": "fear"
	},
	{
		"id": 628,
		"hanzi": "拍",
		"pinyin": "pāi",
		"english": "clap"
	},
	{
		"id": 629,
		"hanzi": "哭",
		"pinyin": "kū",
		"english": "weep"
	},
	{
		"id": 630,
		"hanzi": "器",
		"pinyin": "qì",
		"english": "utensil"
	},
	{
		"id": "631a",
		"hanzi": "品",
		"pinyin": "pǐn",
		"english": "goods"
	},
	{
		"id": 631,
		"hanzi": "操",
		"pinyin": "cāo",
		"english": "exercise"
	},
	{
		"id": 632,
		"hanzi": "澡",
		"pinyin": "zǎo",
		"english": "bathe"
	},
	{
		"id": 633,
		"hanzi": "早",
		"pinyin": "zǎo",
		"english": "early"
	},
	{
		"id": 634,
		"hanzi": "章",
		"pinyin": "zhāng",
		"english": "badge"
	},
	{
		"id": 635,
		"hanzi": "草",
		"pinyin": "cǎo",
		"english": "straw"
	},
	{
		"id": 636,
		"hanzi": "包",
		"pinyin": "bāo",
		"english": "parcel"
	},
	{
		"id": 637,
		"hanzi": "饱",
		"pinyin": "bǎo",
		"english": "replete"
	},
	{
		"id": 638,
		"hanzi": "抱",
		"pinyin": "bào",
		"english": "embrace"
	},
	{
		"id": 639,
		"hanzi": "跑",
		"pinyin": "pǎo",
		"english": "run"
	},
	{
		"id": 640,
		"hanzi": "商",
		"pinyin": "shāng",
		"english": "trade"
	},
	{
		"id": "641a",
		"hanzi": "佰",
		"pinyin": "bǎi",
		"english": "“$100 check”"
	},
	{
		"id": 641,
		"hanzi": "宿",
		"pinyin": "sù",
		"english": "stay overnight"
	},
	{
		"id": "642a",
		"hanzi": "予",
		"pinyin": "yǔ",
		"english": "bestow"
	},
	{
		"id": 642,
		"hanzi": "预",
		"pinyin": "yù",
		"english": "in advance"
	},
	{
		"id": 643,
		"hanzi": "舍",
		"pinyin": "shè",
		"english": "shed"
	},
	{
		"id": 644,
		"hanzi": "舒",
		"pinyin": "shū",
		"english": "spread out"
	},
	{
		"id": 645,
		"hanzi": "兴",
		"pinyin": "xìng (xīng)",
		"english": "excited"
	},
	{
		"id": "646a",
		"hanzi": "矛",
		"pinyin": "máo",
		"english": "spear"
	},
	{
		"id": 646,
		"hanzi": "橘",
		"pinyin": "jú",
		"english": "tangerine"
	},
	{
		"id": 647,
		"hanzi": "桔",
		"pinyin": "jú",
		"english": "tangerine"
	},
	{
		"id": 648,
		"hanzi": "举",
		"pinyin": "jǔ",
		"english": "to raise"
	},
	{
		"id": 649,
		"hanzi": "句",
		"pinyin": "jù",
		"english": "sentence"
	},
	{
		"id": 650,
		"hanzi": "局",
		"pinyin": "jú",
		"english": "office"
	},
	{
		"id": 651,
		"hanzi": "够",
		"pinyin": "gòu",
		"english": "enough"
	},
	{
		"id": "652a",
		"hanzi": "付",
		"pinyin": "fù",
		"english": "pay"
	},
	{
		"id": 652,
		"hanzi": "附",
		"pinyin": "fù",
		"english": "near to"
	},
	{
		"id": 653,
		"hanzi": "府",
		"pinyin": "fǔ",
		"english": "government"
	},
	{
		"id": "654a",
		"hanzi": "凶",
		"pinyin": "xiōng",
		"english": "terrible"
	},
	{
		"id": 654,
		"hanzi": "离",
		"pinyin": "lí",
		"english": "distant from"
	},
	{
		"id": "655a",
		"hanzi": "禺",
		"pinyin": null,
		"english": "monkey"
	},
	{
		"id": 655,
		"hanzi": "遇",
		"pinyin": "yù",
		"english": "encounter"
	},
	{
		"id": 656,
		"hanzi": "脱",
		"pinyin": "tuō",
		"english": "undress"
	},
	{
		"id": "657a",
		"hanzi": "聿",
		"pinyin": null,
		"english": "“write with brush”"
	},
	{
		"id": "657b",
		"hanzi": "廴",
		"pinyin": null,
		"english": "stride"
	},
	{
		"id": 657,
		"hanzi": "建",
		"pinyin": "jiàn",
		"english": "build"
	},
	{
		"id": 658,
		"hanzi": "健",
		"pinyin": "jiàn",
		"english": "strong"
	},
	{
		"id": "659a",
		"hanzi": "廷",
		"pinyin": "tíng",
		"english": "court"
	},
	{
		"id": 659,
		"hanzi": "庭",
		"pinyin": "tíng",
		"english": "courtyard"
	},
	{
		"id": 660,
		"hanzi": "挺",
		"pinyin": "tǐng",
		"english": "exceptionally"
	},
	{
		"id": "661a",
		"hanzi": "肖",
		"pinyin": "xiào",
		"english": "resemble"
	},
	{
		"id": 661,
		"hanzi": "消",
		"pinyin": "xiāo",
		"english": "vanish"
	},
	{
		"id": 662,
		"hanzi": "息",
		"pinyin": "xī",
		"english": "stop"
	},
	{
		"id": 663,
		"hanzi": "留",
		"pinyin": "liú",
		"english": "remain"
	},
	{
		"id": 664,
		"hanzi": "派",
		"pinyin": "pài",
		"english": "group"
	},
	{
		"id": 665,
		"hanzi": "展",
		"pinyin": "zhǎn",
		"english": "display"
	},
	{
		"id": "666a",
		"hanzi": "畏",
		"pinyin": "wèi",
		"english": "respect"
	},
	{
		"id": 666,
		"hanzi": "喂",
		"pinyin": "wèi",
		"english": "hey!"
	},
	{
		"id": 667,
		"hanzi": "候",
		"pinyin": "hòu wait",
		"english": "for"
	},
	{
		"id": 668,
		"hanzi": "齐",
		"pinyin": "qí",
		"english": "tidy"
	},
	{
		"id": 669,
		"hanzi": "挤",
		"pinyin": "jǐ",
		"english": "squeeze"
	},
	{
		"id": 670,
		"hanzi": "济",
		"pinyin": "jì bring",
		"english": "relief"
	},
	{
		"id": 671,
		"hanzi": "黑",
		"pinyin": "hēi",
		"english": "black"
	},
	{
		"id": "672a",
		"hanzi": "曾",
		"pinyin": "céng; zēng",
		"english": "used to be"
	},
	{
		"id": 672,
		"hanzi": "增",
		"pinyin": "zēng",
		"english": "to increase"
	},
	{
		"id": "673a",
		"hanzi": "免",
		"pinyin": "miǎn",
		"english": "avoid"
	},
	{
		"id": 673,
		"hanzi": "晚",
		"pinyin": "wǎn",
		"english": "evening"
	},
	{
		"id": "674a",
		"hanzi": "象",
		"pinyin": "xiàng",
		"english": "elephant"
	},
	{
		"id": 674,
		"hanzi": "像",
		"pinyin": "xiàng",
		"english": "likeness"
	},
	{
		"id": 675,
		"hanzi": "换",
		"pinyin": "huàn",
		"english": "exchange"
	},
	{
		"id": "676a",
		"hanzi": "冈",
		"pinyin": "gāng",
		"english": "ridge"
	},
	{
		"id": 676,
		"hanzi": "刚",
		"pinyin": "gāng",
		"english": "barely"
	},
	{
		"id": 677,
		"hanzi": "钢",
		"pinyin": "gāng",
		"english": "steel"
	},
	{
		"id": "678a",
		"hanzi": "鸟",
		"pinyin": "niǎo",
		"english": "bird"
	},
	{
		"id": 678,
		"hanzi": "鸡",
		"pinyin": "jī",
		"english": "chicken"
	},
	{
		"id": "679a",
		"hanzi": "虫",
		"pinyin": "chóng",
		"english": "insect"
	},
	{
		"id": 679,
		"hanzi": "虽",
		"pinyin": "suī",
		"english": "although"
	},
	{
		"id": "680a",
		"hanzi": "舟",
		"pinyin": "zhōu",
		"english": "boat"
	},
	{
		"id": 680,
		"hanzi": "般",
		"pinyin": "bān",
		"english": "a sort"
	},
	{
		"id": 681,
		"hanzi": "搬",
		"pinyin": "bān",
		"english": "move"
	},
	{
		"id": 682,
		"hanzi": "迎",
		"pinyin": "yíng",
		"english": "greet"
	},
	{
		"id": "683a",
		"hanzi": "氏",
		"pinyin": "shì",
		"english": "surname"
	},
	{
		"id": 683,
		"hanzi": "纸",
		"pinyin": "zhǐ",
		"english": "paper"
	},
	{
		"id": "684a",
		"hanzi": "氐",
		"pinyin": null,
		"english": "“settle down”"
	},
	{
		"id": 684,
		"hanzi": "低",
		"pinyin": "dī",
		"english": "low"
	},
	{
		"id": 685,
		"hanzi": "永",
		"pinyin": "yǒng",
		"english": "forever"
	},
	{
		"id": 686,
		"hanzi": "泳",
		"pinyin": "yǒng",
		"english": "swim"
	},
	{
		"id": 687,
		"hanzi": "族",
		"pinyin": "zú",
		"english": "clan"
	},
	{
		"id": 688,
		"hanzi": "游",
		"pinyin": "yóu",
		"english": "to tour"
	},
	{
		"id": 689,
		"hanzi": "冬",
		"pinyin": "dōng",
		"english": "winter"
	},
	{
		"id": 690,
		"hanzi": "疼",
		"pinyin": "téng",
		"english": "ache"
	},
	{
		"id": 691,
		"hanzi": "图",
		"pinyin": "tú",
		"english": "diagram"
	},
	{
		"id": 692,
		"hanzi": "春",
		"pinyin": "chūn",
		"english": "springtime"
	},
	{
		"id": 693,
		"hanzi": "秋",
		"pinyin": "qiū",
		"english": "autumn"
	},
	{
		"id": 694,
		"hanzi": "夏",
		"pinyin": "xià",
		"english": "summer"
	},
	{
		"id": "695b",
		"hanzi": "丸",
		"pinyin": "wán",
		"english": "pellet"
	},
	{
		"id": "695c",
		"hanzi": "执",
		"pinyin": "zhí",
		"english": "hold on to"
	},
	{
		"id": 695,
		"hanzi": "热",
		"pinyin": "rè",
		"english": "hot"
	},
	{
		"id": "696a",
		"hanzi": "享",
		"pinyin": "xiǎng",
		"english": "enjoy"
	},
	{
		"id": 696,
		"hanzi": "熟",
		"pinyin": "shú",
		"english": "familiar"
	},
	{
		"id": 697,
		"hanzi": "坚",
		"pinyin": "jiān",
		"english": "resolute"
	},
	{
		"id": 698,
		"hanzi": "紧",
		"pinyin": "jǐn",
		"english": "tight"
	},
	{
		"id": 699,
		"hanzi": "览",
		"pinyin": "lǎn",
		"english": "to view"
	},
	{
		"id": "700a",
		"hanzi": "皿",
		"pinyin": null,
		"english": "dish"
	},
	{
		"id": "700b",
		"hanzi": "监",
		"pinyin": "jiān",
		"english": "supervise"
	},
	{
		"id": 700,
		"hanzi": "蓝",
		"pinyin": "lán",
		"english": "blue"
	},
	{
		"id": 701,
		"hanzi": "篮",
		"pinyin": "lán",
		"english": "basket"
	},
	{
		"id": 702,
		"hanzi": "福",
		"pinyin": "fú",
		"english": "blessing"
	},
	{
		"id": 703,
		"hanzi": "富",
		"pinyin": "fù",
		"english": "wealthy"
	},
	{
		"id": 704,
		"hanzi": "丰",
		"pinyin": "fēng",
		"english": "abundant"
	},
	{
		"id": "705a",
		"hanzi": "邦",
		"pinyin": "bāng",
		"english": "nation"
	},
	{
		"id": 705,
		"hanzi": "帮",
		"pinyin": "bāng",
		"english": "help"
	},
	{
		"id": "706a",
		"hanzi": "韦",
		"pinyin": "wéi",
		"english": "leather"
	},
	{
		"id": 706,
		"hanzi": "围",
		"pinyin": "wéi",
		"english": "surround"
	},
	{
		"id": 707,
		"hanzi": "伟",
		"pinyin": "wěi",
		"english": "great"
	},
	{
		"id": "708a",
		"hanzi": "圭",
		"pinyin": null,
		"english": "jade block"
	},
	{
		"id": 708,
		"hanzi": "挂",
		"pinyin": "guà",
		"english": "hang"
	},
	{
		"id": 709,
		"hanzi": "封",
		"pinyin": "fēng",
		"english": "seal up"
	},
	{
		"id": 710,
		"hanzi": "街",
		"pinyin": "jiē",
		"english": "street"
	},
	{
		"id": "711a",
		"hanzi": "革",
		"pinyin": "gé",
		"english": "leather"
	},
	{
		"id": 711,
		"hanzi": "鞋",
		"pinyin": "xié",
		"english": "shoe"
	},
	{
		"id": 712,
		"hanzi": "双",
		"pinyin": "shuāng",
		"english": "pair"
	},
	{
		"id": 713,
		"hanzi": "炼",
		"pinyin": "liàn",
		"english": "smelt"
	},
	{
		"id": 714,
		"hanzi": "练",
		"pinyin": "liàn",
		"english": "to train"
	},
	{
		"id": 715,
		"hanzi": "段",
		"pinyin": "duàn",
		"english": "piece"
	},
	{
		"id": 716,
		"hanzi": "锻",
		"pinyin": "duàn",
		"english": "forge"
	},
	{
		"id": "717a",
		"hanzi": "屯",
		"pinyin": "tún",
		"english": "to store"
	},
	{
		"id": 717,
		"hanzi": "顿",
		"pinyin": "dùn",
		"english": "session"
	},
	{
		"id": 718,
		"hanzi": "烦",
		"pinyin": "fán",
		"english": "bother"
	},
	{
		"id": "719a",
		"hanzi": "斥",
		"pinyin": "chì",
		"english": "drive out"
	},
	{
		"id": 719,
		"hanzi": "诉",
		"pinyin": "sù",
		"english": "tell"
	},
	{
		"id": "720a",
		"hanzi": "约",
		"pinyin": "yuē",
		"english": "approximate"
	},
	{
		"id": 720,
		"hanzi": "药",
		"pinyin": "yào",
		"english": "medicine"
	},
	{
		"id": "721a",
		"hanzi": "争",
		"pinyin": "zhēng",
		"english": "contend"
	},
	{
		"id": 721,
		"hanzi": "净",
		"pinyin": "jìng",
		"english": "clean"
	},
	{
		"id": 722,
		"hanzi": "静",
		"pinyin": "jìng",
		"english": "calm"
	},
	{
		"id": 723,
		"hanzi": "朝",
		"pinyin": "cháo",
		"english": "facing"
	},
	{
		"id": "724a",
		"hanzi": "卓",
		"pinyin": "zhuō",
		"english": "eminent"
	},
	{
		"id": 724,
		"hanzi": "掉",
		"pinyin": "diào",
		"english": "to drop"
	},
	{
		"id": 725,
		"hanzi": "桌",
		"pinyin": "zhuō",
		"english": "table"
	},
	{
		"id": 726,
		"hanzi": "敢",
		"pinyin": "gǎn",
		"english": "dare"
	},
	{
		"id": 727,
		"hanzi": "休",
		"pinyin": "xīu",
		"english": "leisure"
	},
	{
		"id": 728,
		"hanzi": "退",
		"pinyin": "tuì",
		"english": "retreat"
	},
	{
		"id": 729,
		"hanzi": "腿",
		"pinyin": "tuǐ",
		"english": "leg"
	},
	{
		"id": "730a",
		"hanzi": "豆",
		"pinyin": "dòu",
		"english": "bean"
	},
	{
		"id": 730,
		"hanzi": "短",
		"pinyin": "duǎn",
		"english": "brief"
	},
	{
		"id": "731a",
		"hanzi": "吴",
		"pinyin": null,
		"english": "shout out"
	},
	{
		"id": 731,
		"hanzi": "误",
		"pinyin": "wù",
		"english": "mistake"
	},
	{
		"id": "732a",
		"hanzi": "采",
		"pinyin": "cǎi; cài",
		"english": "pick"
	},
	{
		"id": 732,
		"hanzi": "彩",
		"pinyin": "cǎi",
		"english": "colorful"
	},
	{
		"id": 733,
		"hanzi": "菜",
		"pinyin": "cài",
		"english": "vegetable"
	},
	{
		"id": "734a",
		"hanzi": "釆",
		"pinyin": "“claw",
		"english": "marks”"
	},
	{
		"id": "734b",
		"hanzi": "番",
		"pinyin": "fān",
		"english": "a time"
	},
	{
		"id": 734,
		"hanzi": "播",
		"pinyin": "bō",
		"english": "to sow"
	},
	{
		"id": 735,
		"hanzi": "习",
		"pinyin": "xí",
		"english": "to practice"
	},
	{
		"id": "736a",
		"hanzi": "羽",
		"pinyin": "yǔ",
		"english": "feather"
	},
	{
		"id": 736,
		"hanzi": "翻",
		"pinyin": "fān",
		"english": "turn over"
	},
	{
		"id": 737,
		"hanzi": "译",
		"pinyin": "yì",
		"english": "translate"
	},
	{
		"id": "738a",
		"hanzi": "余",
		"pinyin": "yú",
		"english": "surplus"
	},
	{
		"id": 738,
		"hanzi": "除",
		"pinyin": "chú",
		"english": "to remove"
	},
	{
		"id": 739,
		"hanzi": "茶",
		"pinyin": "chá",
		"english": "tea"
	},
	{
		"id": "740a",
		"hanzi": "奇",
		"pinyin": "qí; jī",
		"english": "strange"
	},
	{
		"id": 740,
		"hanzi": "骑",
		"pinyin": "qí",
		"english": "ride"
	},
	{
		"id": 741,
		"hanzi": "椅",
		"pinyin": "yǐ",
		"english": "chair"
	},
	{
		"id": 742,
		"hanzi": "寄",
		"pinyin": "jì",
		"english": "send"
	},
	{
		"id": "743a",
		"hanzi": "昔",
		"pinyin": "xī",
		"english": "the old days"
	},
	{
		"id": 743,
		"hanzi": "错",
		"pinyin": "cuò",
		"english": "mistake"
	},
	{
		"id": 744,
		"hanzi": "借",
		"pinyin": "jiè",
		"english": "borrow"
	},
	{
		"id": 745,
		"hanzi": "散",
		"pinyin": "sàn",
		"english": "disperse"
	},
	{
		"id": 746,
		"hanzi": "船",
		"pinyin": "chuán",
		"english": "ship"
	},
	{
		"id": 747,
		"hanzi": "铅",
		"pinyin": "qiān",
		"english": "lead"
	},
	{
		"id": "748a",
		"hanzi": "疋",
		"pinyin": null,
		"english": "bolt of cloth"
	},
	{
		"id": 748,
		"hanzi": "蛋",
		"pinyin": "dàn",
		"english": "egg"
	},
	{
		"id": "749a",
		"hanzi": "林",
		"pinyin": "lín",
		"english": "a wood"
	},
	{
		"id": 749,
		"hanzi": "楚",
		"pinyin": "chǔ",
		"english": "clear"
	},
	{
		"id": 750,
		"hanzi": "麻",
		"pinyin": "má",
		"english": "hemp"
	},
	{
		"id": 751,
		"hanzi": "嘛",
		"pinyin": "ma",
		"english": "surely"
	},
	{
		"id": "752a",
		"hanzi": "隶",
		"pinyin": "lì",
		"english": "subordinate"
	},
	{
		"id": 752,
		"hanzi": "康",
		"pinyin": "kāng",
		"english": "good health"
	},
	{
		"id": 753,
		"hanzi": "录",
		"pinyin": "lù",
		"english": "to record"
	},
	{
		"id": 754,
		"hanzi": "绿",
		"pinyin": "lǚ",
		"english": "green"
	},
	{
		"id": 755,
		"hanzi": "旅",
		"pinyin": "lǚ",
		"english": "travel"
	},
	{
		"id": "756a",
		"hanzi": "俞",
		"pinyin": "yú",
		"english": "“catamaran”"
	},
	{
		"id": 756,
		"hanzi": "愉",
		"pinyin": "yú",
		"english": "happy"
	},
	{
		"id": 757,
		"hanzi": "输",
		"pinyin": "shū",
		"english": "lose"
	},
	{
		"id": 758,
		"hanzi": "凉",
		"pinyin": "liáng",
		"english": "cool"
	},
	{
		"id": 759,
		"hanzi": "谅",
		"pinyin": "liàng",
		"english": "forgive"
	},
	{
		"id": "760b",
		"hanzi": "宛",
		"pinyin": "wǎn",
		"english": "winding"
	},
	{
		"id": 760,
		"hanzi": "碗",
		"pinyin": "wǎn",
		"english": "bowl"
	},
	{
		"id": 761,
		"hanzi": "香",
		"pinyin": "xiāng",
		"english": "fragrant"
	},
	{
		"id": "762a",
		"hanzi": "奴",
		"pinyin": "nú",
		"english": "slave"
	},
	{
		"id": 762,
		"hanzi": "努",
		"pinyin": "nǔ",
		"english": "exert oneself"
	},
	{
		"id": "763a",
		"hanzi": "焦",
		"pinyin": "jiāo",
		"english": "scorched"
	},
	{
		"id": 763,
		"hanzi": "蕉",
		"pinyin": "jiāo",
		"english": ["banana"]
	},
	{
		"id": "764b",
		"hanzi": "唐",
		"pinyin": "táng",
		"english": "Tang"
	},
	{
		"id": 764,
		"hanzi": "糖",
		"pinyin": "táng",
		"english": "sugar"
	},
	{
		"id": 765,
		"hanzi": "酸",
		"pinyin": "suān",
		"english": "sour"
	},
	{
		"id": "766a",
		"hanzi": "委",
		"pinyin": "wěi",
		"english": "entrust"
	},
	{
		"id": 766,
		"hanzi": "矮",
		"pinyin": "ǎi",
		"english": "short"
	},
	{
		"id": "767a",
		"hanzi": "囱",
		"pinyin": "cōng",
		"english": ["chimney"]
	},
	{
		"id": 767,
		"hanzi": "窗",
		"pinyin": "chuāng",
		"english": "window"
	},
	{
		"id": 768,
		"hanzi": "寒",
		"pinyin": "hán",
		"english": "freezing"
	},
	{
		"id": 769,
		"hanzi": "赛",
		"pinyin": "sài",
		"english": "compete"
	},
	{
		"id": "770b",
		"hanzi": "扁",
		"pinyin": "biǎn; piān",
		"english": "flat"
	},
	{
		"id": 770,
		"hanzi": "遍",
		"pinyin": "biàn",
		"english": "everywhere"
	},
	{
		"id": 771,
		"hanzi": "篇",
		"pinyin": "piān",
		"english": "piece of paper"
	},
	{
		"id": "772a",
		"hanzi": "昌",
		"pinyin": "chāng",
		"english": "prosperous"
	},
	{
		"id": 772,
		"hanzi": "唱",
		"pinyin": "chàng",
		"english": "sing"
	},
	{
		"id": 773,
		"hanzi": "冒",
		"pinyin": "mào",
		"english": "risk"
	},
	{
		"id": 774,
		"hanzi": "帽",
		"pinyin": "mào",
		"english": "hat"
	},
	{
		"id": "775a",
		"hanzi": "辰",
		"pinyin": "chén",
		"english": "heavenly body"
	},
	{
		"id": 775,
		"hanzi": "晨",
		"pinyin": "chén",
		"english": "morning"
	},
	{
		"id": "776a",
		"hanzi": "毌",
		"pinyin": null,
		"english": "pierced"
	},
	{
		"id": "776b",
		"hanzi": "贯",
		"pinyin": "guàn",
		"english": "pierce"
	},
	{
		"id": 776,
		"hanzi": "惯",
		"pinyin": "guàn",
		"english": "habitual"
	},
	{
		"id": "777a",
		"hanzi": "尺",
		"pinyin": "chǐ",
		"english": "ruler"
	},
	{
		"id": 777,
		"hanzi": "迟",
		"pinyin": "chí",
		"english": "late"
	},
	{
		"id": "778b",
		"hanzi": "尧",
		"pinyin": "yáo",
		"english": "Chieftain Yao"
	},
	{
		"id": 778,
		"hanzi": "烧",
		"pinyin": "shāo",
		"english": "burn"
	},
	{
		"id": "779b",
		"hanzi": "既",
		"pinyin": "jì",
		"english": "since"
	},
	{
		"id": 779,
		"hanzi": "概",
		"pinyin": "gài",
		"english": "summary"
	},
	{
		"id": "780a",
		"hanzi": "牙",
		"pinyin": "yá",
		"english": "tooth"
	},
	{
		"id": 780,
		"hanzi": "呀",
		"pinyin": "yā (ya)",
		"english": "oh!"
	},
	{
		"id": 781,
		"hanzi": "穿",
		"pinyin": "chuān",
		"english": "penetrate"
	},
	{
		"id": "782a",
		"hanzi": "異",
		"pinyin": null,
		"english": "different"
	},
	{
		"id": 782,
		"hanzi": "戴",
		"pinyin": "dài",
		"english": "to wear"
	},
	{
		"id": "783a",
		"hanzi": "乘",
		"pinyin": "chéng",
		"english": "ride"
	},
	{
		"id": 783,
		"hanzi": "剩",
		"pinyin": "shèng",
		"english": "residue"
	},
	{
		"id": "784b",
		"hanzi": "官",
		"pinyin": "guān",
		"english": "an official"
	},
	{
		"id": 784,
		"hanzi": "馆",
		"pinyin": "guǎn public",
		"english": "building"
	},
	{
		"id": "785a",
		"hanzi": "罒",
		"pinyin": null,
		"english": "net"
	},
	{
		"id": "785b",
		"hanzi": "曼",
		"pinyin": "màn",
		"english": "graceful"
	},
	{
		"id": 785,
		"hanzi": "慢",
		"pinyin": "màn",
		"english": "slow"
	},
	{
		"id": "786a",
		"hanzi": "罢",
		"pinyin": "bà",
		"english": "stop"
	},
	{
		"id": 786,
		"hanzi": "摆",
		"pinyin": "bǎi",
		"english": "arrange"
	},
	{
		"id": "787a",
		"hanzi": "舛",
		"pinyin": null,
		"english": "opposing"
	},
	{
		"id": 787,
		"hanzi": "舞",
		"pinyin": "wǔ",
		"english": "dance"
	},
	{
		"id": "788a",
		"hanzi": "兆",
		"pinyin": "zhào",
		"english": "omen"
	},
	{
		"id": 788,
		"hanzi": "跳",
		"pinyin": "tiào",
		"english": "jump"
	},
	{
		"id": "789a",
		"hanzi": "甫",
		"pinyin": "fǔ",
		"english": "just now"
	},
	{
		"id": 789,
		"hanzi": "辅",
		"pinyin": "fǔ",
		"english": "assist"
	},
	{
		"id": 790,
		"hanzi": "傅",
		"pinyin": "fù",
		"english": "teacher"
	},
	{
		"id": "791a",
		"hanzi": "并",
		"pinyin": "bìng",
		"english": "actually"
	},
	{
		"id": "791b",
		"hanzi": "瓦",
		"pinyin": "wǎ; wà",
		"english": "tile"
	},
	{
		"id": 791,
		"hanzi": "瓶",
		"pinyin": "píng",
		"english": "bottle"
	},
	{
		"id": "792b",
		"hanzi": "祭",
		"pinyin": "jì",
		"english": "worship"
	},
	{
		"id": "792c",
		"hanzi": "察",
		"pinyin": "chá",
		"english": "inspect"
	},
	{
		"id": 792,
		"hanzi": "擦",
		"pinyin": "cā",
		"english": "wipe"
	},
	{
		"id": "793a",
		"hanzi": "末",
		"pinyin": "mò",
		"english": "tip"
	},
	{
		"id": 793,
		"hanzi": "袜",
		"pinyin": "wà",
		"english": "socks"
	},
	{
		"id": "794b",
		"hanzi": "兹",
		"pinyin": "zī",
		"english": "“jet black”"
	},
	{
		"id": 794,
		"hanzi": "磁",
		"pinyin": "cí",
		"english": "magnet"
	},
	{
		"id": 795,
		"hanzi": "丢",
		"pinyin": "dīu",
		"english": "mislay"
	},
	{
		"id": 796,
		"hanzi": "宴",
		"pinyin": "yàn",
		"english": "banquet"
	},
	{
		"id": 797,
		"hanzi": "夜",
		"pinyin": "yè",
		"english": "night"
	},
	{
		"id": 798,
		"hanzi": "假",
		"pinyin": "jià (jiǎ)",
		"english": "vacation"
	},
	{
		"id": 799,
		"hanzi": "墙",
		"pinyin": "qiáng",
		"english": "wall"
	},
	{
		"id": 800,
		"hanzi": "赢",
		"pinyin": "yíng",
		"english": "win"
	}
]

const radicals = [
	{ "id": 1, "hanzi": "一", "radicalId": 1, "radical": "一" },
	{ "id": 2, "hanzi": "二", "radicalId": 7, "radical": "二" },
	{ "id": 3, "hanzi": "三", "radicalId": 1, "radical": "一" },
	{ "id": 4, "hanzi": "十", "radicalId": 24, "radical": "十" },
	{ "id": 5, "hanzi": "口", "radicalId": 30, "radical": "口" },
	{ "id": 6, "hanzi": "日", "radicalId": 72, "radical": "日" },
	{ "id": 7, "hanzi": "几", "radicalId": 16, "radical": "几" },
	{ "id": 8, "hanzi": "也", "radicalId": 5, "radical": "乙" },
	{ "id": 9, "hanzi": "不", "radicalId": 1, "radical": "一" },
	{ "id": 10, "hanzi": "机", "radicalId": 75, "radical": "木" },
	{ "id": "10a", "hanzi": "木", "radicalId": 75, "radical": "木" },
	{ "id": 11, "hanzi": "杯", "radicalId": 75, "radical": "木" },
	{ "id": 12, "hanzi": "人", "radicalId": 9, "radical": "人" },
	{ "id": "13a", "hanzi": "亻", "radicalId": 9, "radical": "人" },
	{ "id": 13, "hanzi": "他", "radicalId": 9, "radical": "人" },
	{ "id": 14, "hanzi": "力", "radicalId": 19, "radical": "力" },
	{ "id": 15, "hanzi": "女", "radicalId": 38, "radical": "女" },
	{ "id": 16, "hanzi": "她", "radicalId": 38, "radical": "女" },
	{ "id": 17, "hanzi": "子", "radicalId": 39, "radical": "子" },
	{ "id": 18, "hanzi": "好", "radicalId": 38, "radical": "女" },
	{ "id": "19b", "hanzi": "人", "radicalId": 9, "radical": "人" },
	{ "id": 19, "hanzi": "个", "radicalId": 2, "radical": "丨" },
	{ "id": "19a", "hanzi": "丨", "radicalId": 2, "radical": "丨" },
	{ "id": 20, "hanzi": "八", "radicalId": 12, "radical": "八" },
	{ "id": 21, "hanzi": "儿", "radicalId": 10, "radical": "儿" },
	{ "id": 22, "hanzi": "白", "radicalId": 106, "radical": "白" },
	{ "id": "22a", "hanzi": "丶", "radicalId": 3, "radical": "丶" },
	{ "id": "23a", "hanzi": "勹", "radicalId": 20, "radical": "勹" },
	{ "id": 23, "hanzi": "的", "radicalId": 106, "radical": "白" },
	{ "id": "23b", "hanzi": "勺", "radicalId": 20, "radical": "勹" },
	{ "id": 24, "hanzi": "四", "radicalId": 31, "radical": "囗" },
	{ "id": "24a", "hanzi": "囗", "radicalId": 31, "radical": "囗" },
	{ "id": 25, "hanzi": "文", "radicalId": 67, "radical": "文" },
	{ "id": "25a", "hanzi": "乂", "radicalId": 4, "radical": "丿" },
	{ "id": "25b", "hanzi": "亠", "radicalId": 8, "radical": "亠" },
	{ "id": 26, "hanzi": "这", "radicalId": 162, "radical": "辵" },
	{ "id": "26a", "hanzi": "辶", "radicalId": 162, "radical": "辵" },
	{ "id": 27, "hanzi": "门", "radicalId": 169, "radical": "门" },
	{ "id": 28, "hanzi": "们", "radicalId": 9, "radical": "人" },
	{ "id": 29, "hanzi": "正", "radicalId": 77, "radical": "止" },
	{ "id": "30b", "hanzi": "疋", "radicalId": 103, "radical": "疋" },
	{ "id": 30, "hanzi": "是", "radicalId": 72, "radical": "日" },
	{ "id": 31, "hanzi": "手", "radicalId": 64, "radical": "手" },
	{ "id": "32a", "hanzi": "戈", "radicalId": 62, "radical": "戈" },
	{ "id": 32, "hanzi": "我", "radicalId": 62, "radical": "戈" },
	{ "id": 33, "hanzi": "中", "radicalId": 2, "radical": "丨" },
	{ "id": 34, "hanzi": "么", "radicalId": 4, "radical": "丿" },
	{ "id": "34a", "hanzi": "厶", "radicalId": 28, "radical": "厶" },
	{ "id": 35, "hanzi": "什", "radicalId": 9, "radical": "人" },
	{ "id": 36, "hanzi": "五", "radicalId": 7, "radical": "二" },
	{ "id": 37, "hanzi": "七", "radicalId": 1, "radical": "一" },
	{ "id": 38, "hanzi": "九", "radicalId": 5, "radical": "乙" },
	{ "id": 39, "hanzi": "六", "radicalId": 12, "radical": "八" },
	{ "id": 40, "hanzi": "百", "radicalId": 106, "radical": "白" },
	{ "id": 41, "hanzi": "边", "radicalId": 162, "radical": "辵" },
	{ "id": 42, "hanzi": "上", "radicalId": 1, "radical": "一" },
	{ "id": "42a", "hanzi": "卜", "radicalId": 25, "radical": "卜" },
	{ "id": 43, "hanzi": "下", "radicalId": 1, "radical": "一" },
	{ "id": 44, "hanzi": "马", "radicalId": 187, "radical": "马" },
	{ "id": 45, "hanzi": "吗", "radicalId": 30, "radical": "口" },
	{ "id": 46, "hanzi": "妈", "radicalId": 38, "radical": "女" },
	{ "id": 47, "hanzi": "大", "radicalId": 37, "radical": "大" },
	{ "id": 48, "hanzi": "太", "radicalId": 37, "radical": "大" },
	{ "id": 49, "hanzi": "夫", "radicalId": 37, "radical": "大" },
	{ "id": 50, "hanzi": "小", "radicalId": 42, "radical": "小" },
	{ "id": "51b", "hanzi": "尔", "radicalId": 42, "radical": "小" },
	{ "id": 51, "hanzi": "你", "radicalId": 9, "radical": "人" },
	{ "id": 52, "hanzi": "又", "radicalId": 29, "radical": "又" },
	{ "id": 53, "hanzi": "友", "radicalId": 29, "radical": "又" },
	{ "id": "54a", "hanzi": "土", "radicalId": 32, "radical": "土" },
	{ "id": 54, "hanzi": "地", "radicalId": 32, "radical": "土" },
	{ "id": 55, "hanzi": "在", "radicalId": 32, "radical": "土" },
	{ "id": 56, "hanzi": "云", "radicalId": 7, "radical": "二" },
	{ "id": 57, "hanzi": "运", "radicalId": 162, "radical": "辵" },
	{ "id": 58, "hanzi": "动", "radicalId": 19, "radical": "力" },
	{ "id": 59, "hanzi": "会", "radicalId": 9, "radical": "人" },
	{ "id": "60a", "hanzi": "王", "radicalId": 96, "radical": "玉" },
	{ "id": 60, "hanzi": "国", "radicalId": 31, "radical": "囗" },
	{ "id": "60b", "hanzi": "玉", "radicalId": 96, "radical": "玉" },
	{ "id": 61, "hanzi": "月", "radicalId": 74, "radical": "月" },
	{ "id": 62, "hanzi": "朋", "radicalId": 74, "radical": "月" },
	{ "id": 63, "hanzi": "有", "radicalId": 74, "radical": "月" },
	{ "id": 64, "hanzi": "妹", "radicalId": 38, "radical": "女" },
	{ "id": "64a", "hanzi": "未", "radicalId": 75, "radical": "木" },
	{ "id": "65a", "hanzi": "丷", "radicalId": 3, "radical": "丶" },
	{ "id": 65, "hanzi": "来", "radicalId": 75, "radical": "木" },
	{ "id": 66, "hanzi": "了", "radicalId": 6, "radical": "亅" },
	{ "id": "67c", "hanzi": "讠", "radicalId": 149, "radical": "讠" },
	{ "id": "67a", "hanzi": "兄", "radicalId": 10, "radical": "儿" },
	{ "id": "67b", "hanzi": "兌", "radicalId": 10, "radical": "儿" },
	{ "id": 67, "hanzi": "说", "radicalId": 149, "radical": "讠" },
	{ "id": 68, "hanzi": "语", "radicalId": 149, "radical": "讠" },
	{ "id": "68a", "hanzi": "吾", "radicalId": 30, "radical": "口" },
	{ "id": "69a", "hanzi": "夕", "radicalId": 36, "radical": "夕" },
	{ "id": 69, "hanzi": "多", "radicalId": 36, "radical": "夕" },
	{ "id": 70, "hanzi": "名", "radicalId": 30, "radical": "口" },
	{ "id": 71, "hanzi": "外", "radicalId": 36, "radical": "夕" },
	{ "id": 72, "hanzi": "刀", "radicalId": 18, "radical": "刀" },
	{ "id": 73, "hanzi": "分", "radicalId": 18, "radical": "刀" },
	{ "id": "74b", "hanzi": "至", "radicalId": 133, "radical": "至" },
	{ "id": 74, "hanzi": "到", "radicalId": 18, "radical": "刀" },
	{ "id": "74a", "hanzi": "刂", "radicalId": 18, "radical": "刀" },
	{ "id": 75, "hanzi": "倒", "radicalId": 9, "radical": "人" },
	{ "id": 76, "hanzi": "天", "radicalId": 37, "radical": "大" },
	{ "id": 77, "hanzi": "明", "radicalId": 72, "radical": "日" },
	{ "id": "78a", "hanzi": "氵", "radicalId": 85, "radical": "水" },
	{ "id": 78, "hanzi": "汉", "radicalId": 85, "radical": "水" },
	{ "id": "79a", "hanzi": "另", "radicalId": 30, "radical": "口" },
	{ "id": 79, "hanzi": "别", "radicalId": 18, "radical": "刀" },
	{ "id": 80, "hanzi": "如", "radicalId": 38, "radical": "女" },
	{ "id": "81a", "hanzi": "彳", "radicalId": 60, "radical": "彳" },
	{ "id": "81b", "hanzi": "丁", "radicalId": 1, "radical": "一" },
	{ "id": 81, "hanzi": "行", "radicalId": 144, "radical": "行" },
	{ "id": "81c", "hanzi": "亍", "radicalId": 7, "radical": "二" },
	{ "id": "82a", "hanzi": "冖", "radicalId": 14, "radical": "冖" },
	{ "id": 82, "hanzi": "学", "radicalId": 39, "radical": "子" },
	{ "id": 83, "hanzi": "车", "radicalId": 159, "radical": "車" },
	{ "id": 84, "hanzi": "连", "radicalId": 162, "radical": "辵" },
	{ "id": 85, "hanzi": "开", "radicalId": 55, "radical": "廾" },
	{ "id": 86, "hanzi": "去", "radicalId": 28, "radical": "厶" },
	{ "id": 87, "hanzi": "法", "radicalId": 85, "radical": "水" },
	{ "id": "88a", "hanzi": "耳", "radicalId": 128, "radical": "耳" },
	{ "id": 88, "hanzi": "取", "radicalId": 29, "radical": "又" },
	{ "id": 89, "hanzi": "千", "radicalId": 24, "radical": "十" },
	{ "id": 90, "hanzi": "前", "radicalId": 18, "radical": "刀" },
	{ "id": "91a", "hanzi": "宀", "radicalId": 40, "radical": "宀" },
	{ "id": 91, "hanzi": "安", "radicalId": 40, "radical": "宀" },
	{ "id": 92, "hanzi": "字", "radicalId": 39, "radical": "子" },
	{ "id": 93, "hanzi": "目", "radicalId": 109, "radical": "目" },
	{ "id": 94, "hanzi": "自", "radicalId": 132, "radical": "自" },
	{ "id": 95, "hanzi": "咱", "radicalId": 30, "radical": "口" },
	{ "id": 96, "hanzi": "阳", "radicalId": 170, "radical": "阜" },
	{ "id": "96a", "hanzi": "阝", "radicalId": 170, "radical": "阜" },
	{ "id": 97, "hanzi": "阴", "radicalId": 170, "radical": "阜" },
	{ "id": 98, "hanzi": "那", "radicalId": 163, "radical": "邑" },
	{ "id": 99, "hanzi": "哪", "radicalId": 30, "radical": "口" },
	{ "id": 100, "hanzi": "西", "radicalId": 146, "radical": "襾" },
	{ "id": 101, "hanzi": "要", "radicalId": 146, "radical": "襾" },
	{ "id": 102, "hanzi": "酒", "radicalId": 164, "radical": "酉" },
	{ "id": "102a", "hanzi": "酉", "radicalId": 164, "radical": "酉" },
	{ "id": 103, "hanzi": "从", "radicalId": 9, "radical": "人" },
	{ "id": 104, "hanzi": "村", "radicalId": 75, "radical": "木" },
	{ "id": "104a", "hanzi": "寸", "radicalId": 41, "radical": "寸" },
	{ "id": 105, "hanzi": "时", "radicalId": 72, "radical": "日" },
	{ "id": 106, "hanzi": "过", "radicalId": 162, "radical": "辵" },
	{ "id": 107, "hanzi": "身", "radicalId": 158, "radical": "身" },
	{ "id": "108a", "hanzi": "射", "radicalId": 41, "radical": "寸" },
	{ "id": 108, "hanzi": "谢", "radicalId": 149, "radical": "讠" },
	{ "id": "109a", "hanzi": "豕", "radicalId": 152, "radical": "豕" },
	{ "id": 109, "hanzi": "家", "radicalId": 40, "radical": "宀" },
	{ "id": 110, "hanzi": "山", "radicalId": 46, "radical": "山" },
	{ "id": 111, "hanzi": "羊", "radicalId": 123, "radical": "羊" },
	{ "id": 112, "hanzi": "样", "radicalId": 75, "radical": "木" },
	{ "id": 113, "hanzi": "班", "radicalId": 96, "radical": "玉" },
	{ "id": 114, "hanzi": "出", "radicalId": 17, "radical": "凵" },
	{ "id": 115, "hanzi": "础", "radicalId": 112, "radical": "石" },
	{ "id": "115a", "hanzi": "石", "radicalId": 112, "radical": "石" },
	{ "id": 116, "hanzi": "岁", "radicalId": 46, "radical": "山" },
	{ "id": 117, "hanzi": "但", "radicalId": 9, "radical": "人" },
	{ "id": 118, "hanzi": "得", "radicalId": 60, "radical": "彳" },
	{ "id": 119, "hanzi": "公", "radicalId": 12, "radical": "八" },
	{ "id": 120, "hanzi": "以", "radicalId": 9, "radical": "人" },
	{ "id": 121, "hanzi": "之", "radicalId": 4, "radical": "丿" },
	{ "id": 122, "hanzi": "为", "radicalId": 3, "radical": "丶" },
	{ "id": 123, "hanzi": "办", "radicalId": 19, "radical": "力" },
	{ "id": 124, "hanzi": "干", "radicalId": 51, "radical": "干" },
	{ "id": 125, "hanzi": "午", "radicalId": 24, "radical": "十" },
	{ "id": "126a", "hanzi": "禾", "radicalId": 115, "radical": "禾" },
	{ "id": 126, "hanzi": "和", "radicalId": 30, "radical": "口" },
	{ "id": 127, "hanzi": "母", "radicalId": 80, "radical": "毋" },
	{ "id": 128, "hanzi": "每", "radicalId": 80, "radical": "毋" },
	{ "id": 129, "hanzi": "海", "radicalId": 85, "radical": "水" },
	{ "id": 130, "hanzi": "用", "radicalId": 101, "radical": "用" },
	{ "id": 131, "hanzi": "半", "radicalId": 24, "radical": "十" },
	{ "id": 132, "hanzi": "利", "radicalId": 18, "radical": "刀" },
	{ "id": 133, "hanzi": "生", "radicalId": 100, "radical": "生" },
	{ "id": 134, "hanzi": "胜", "radicalId": 130, "radical": "肉" },
	{ "id": 135, "hanzi": "姓", "radicalId": 38, "radical": "女" },
	{ "id": 136, "hanzi": "星", "radicalId": 72, "radical": "日" },
	{ "id": 137, "hanzi": "先", "radicalId": 10, "radical": "儿" },
	{ "id": 138, "hanzi": "告", "radicalId": 30, "radical": "口" },
	{ "id": 139, "hanzi": "洗", "radicalId": 85, "radical": "水" },
	{ "id": 140, "hanzi": "可", "radicalId": 30, "radical": "口" },
	{ "id": 141, "hanzi": "河", "radicalId": 85, "radical": "水" },
	{ "id": 142, "hanzi": "何", "radicalId": 9, "radical": "人" },
	{ "id": 143, "hanzi": "啊", "radicalId": 30, "radical": "口" },
	{ "id": "143a", "hanzi": "阿", "radicalId": 170, "radical": "阜" },
	{ "id": 144, "hanzi": "首", "radicalId": 185, "radical": "首" },
	{ "id": 145, "hanzi": "道", "radicalId": 162, "radical": "辵" },
	{ "id": 146, "hanzi": "发", "radicalId": 29, "radical": "又" },
	{ "id": 147, "hanzi": "工", "radicalId": 48, "radical": "工" },
	{ "id": 148, "hanzi": "江", "radicalId": 85, "radical": "水" },
	{ "id": 149, "hanzi": "厂", "radicalId": 27, "radical": "厂" },
	{ "id": 150, "hanzi": "后", "radicalId": 30, "radical": "口" },
	{ "id": 151, "hanzi": "而", "radicalId": 126, "radical": "而" },
	{ "id": "152a", "hanzi": "扌", "radicalId": 64, "radical": "手" },
	{ "id": 152, "hanzi": "找", "radicalId": 64, "radical": "手" },
	{ "id": 153, "hanzi": "打", "radicalId": 64, "radical": "手" },
	{ "id": 154, "hanzi": "对", "radicalId": 41, "radical": "寸" },
	{ "id": 155, "hanzi": "树", "radicalId": 75, "radical": "木" },
	{ "id": "156a", "hanzi": "田", "radicalId": 102, "radical": "田" },
	{ "id": 156, "hanzi": "男", "radicalId": 102, "radical": "田" },
	{ "id": 157, "hanzi": "里", "radicalId": 166, "radical": "里" },
	{ "id": 158, "hanzi": "理", "radicalId": 96, "radical": "玉" },
	{ "id": 159, "hanzi": "电", "radicalId": 102, "radical": "田" },
	{ "id": "160a", "hanzi": "冂", "radicalId": 13, "radical": "冂" },
	{ "id": 160, "hanzi": "同", "radicalId": 30, "radical": "口" },
	{ "id": 161, "hanzi": "心", "radicalId": 61, "radical": "心" },
	{ "id": 162, "hanzi": "必", "radicalId": 61, "radical": "心" },
	{ "id": 163, "hanzi": "相", "radicalId": 109, "radical": "目" },
	{ "id": 164, "hanzi": "想", "radicalId": 61, "radical": "心" },
	{ "id": 165, "hanzi": "思", "radicalId": 61, "radical": "心" },
	{ "id": 166, "hanzi": "今", "radicalId": 9, "radical": "人" },
	{ "id": 167, "hanzi": "念", "radicalId": 61, "radical": "心" },
	{ "id": 168, "hanzi": "年", "radicalId": 51, "radical": "干" },
	{ "id": 169, "hanzi": "没", "radicalId": 85, "radical": "水" },
	{ "id": "169a", "hanzi": "殳", "radicalId": 79, "radical": "殳" },
	{ "id": 170, "hanzi": "广", "radicalId": 53, "radical": "广" },
	{ "id": 171, "hanzi": "床", "radicalId": 53, "radical": "广" },
	{ "id": 172, "hanzi": "长", "radicalId": 168, "radical": "长" },
	{ "id": 173, "hanzi": "张", "radicalId": 57, "radical": "弓" },
	{ "id": "173a", "hanzi": "弓", "radicalId": 57, "radical": "弓" },
	{ "id": 174, "hanzi": "本", "radicalId": 75, "radical": "木" },
	{ "id": 175, "hanzi": "体", "radicalId": 9, "radical": "人" },
	{ "id": 176, "hanzi": "书", "radicalId": 5, "radical": "乙" },
	{ "id": 177, "hanzi": "立", "radicalId": 117, "radical": "立" },
	{ "id": 178, "hanzi": "位", "radicalId": 9, "radical": "人" },
	{ "id": 179, "hanzi": "拉", "radicalId": 64, "radical": "手" },
	{ "id": 180, "hanzi": "啦", "radicalId": 30, "radical": "口" },
	{ "id": 181, "hanzi": "火", "radicalId": 86, "radical": "火" },
	{ "id": 182, "hanzi": "灯", "radicalId": 86, "radical": "火" },
	{ "id": 183, "hanzi": "占", "radicalId": 25, "radical": "卜" },
	{ "id": 184, "hanzi": "站", "radicalId": 117, "radical": "立" },
	{ "id": "185a", "hanzi": "灬", "radicalId": 86, "radical": "火" },
	{ "id": 185, "hanzi": "点", "radicalId": 86, "radical": "火" },
	{ "id": 186, "hanzi": "店", "radicalId": 53, "radical": "广" },
	{ "id": 187, "hanzi": "果", "radicalId": 75, "radical": "木" },
	{ "id": 188, "hanzi": "棵", "radicalId": 75, "radical": "木" },
	{ "id": 189, "hanzi": "课", "radicalId": 149, "radical": "讠" },
	{ "id": 190, "hanzi": "政", "radicalId": 66, "radical": "攴" },
	{ "id": "190a", "hanzi": "攵", "radicalId": 66, "radical": "攴" },
	{ "id": 191, "hanzi": "故", "radicalId": 66, "radical": "攴" },
	{ "id": "191a", "hanzi": "古", "radicalId": 30, "radical": "口" },
	{ "id": 192, "hanzi": "姑", "radicalId": 38, "radical": "女" },
	{ "id": "193a", "hanzi": "胡", "radicalId": 130, "radical": "肉" },
	{ "id": 193, "hanzi": "湖", "radicalId": 85, "radical": "水" },
	{ "id": 194, "hanzi": "克", "radicalId": 10, "radical": "儿" },
	{ "id": 195, "hanzi": "辛", "radicalId": 160, "radical": "辛" },
	{ "id": 196, "hanzi": "亲", "radicalId": 8, "radical": "亠" },
	{ "id": 197, "hanzi": "产", "radicalId": 117, "radical": "立" },
	{ "id": 198, "hanzi": "卡", "radicalId": 25, "radical": "卜" },
	{ "id": 199, "hanzi": "还", "radicalId": 162, "radical": "辵" },
	{ "id": 200, "hanzi": "看", "radicalId": 109, "radical": "目" },
	{ "id": 201, "hanzi": "讨", "radicalId": 149, "radical": "讠" },
	{ "id": 202, "hanzi": "回", "radicalId": 31, "radical": "囗" },
	{ "id": 203, "hanzi": "接", "radicalId": 64, "radical": "手" },
	{ "id": "203a", "hanzi": "妾", "radicalId": 38, "radical": "女" },
	{ "id": 204, "hanzi": "差", "radicalId": 48, "radical": "工" },
	{ "id": 205, "hanzi": "着", "radicalId": 109, "radical": "目" },
	{ "id": 206, "hanzi": "能", "radicalId": 130, "radical": "肉" },
	{ "id": "206a", "hanzi": "匕", "radicalId": 21, "radical": "匕" },
	{ "id": 207, "hanzi": "作", "radicalId": 9, "radical": "人" },
	{ "id": "207a", "hanzi": "乍", "radicalId": 4, "radical": "丿" },
	{ "id": 208, "hanzi": "昨", "radicalId": 72, "radical": "日" },
	{ "id": 209, "hanzi": "左", "radicalId": 48, "radical": "工" },
	{ "id": 210, "hanzi": "做", "radicalId": 9, "radical": "人" },
	{ "id": 211, "hanzi": "坐", "radicalId": 32, "radical": "土" },
	{ "id": 212, "hanzi": "座", "radicalId": 53, "radical": "广" },
	{ "id": 213, "hanzi": "右", "radicalId": 30, "radical": "口" },
	{ "id": 214, "hanzi": "见", "radicalId": 147, "radical": "见" },
	{ "id": 215, "hanzi": "现", "radicalId": 96, "radical": "玉" },
	{ "id": 216, "hanzi": "观", "radicalId": 147, "radical": "见" },
	{ "id": 217, "hanzi": "再", "radicalId": 13, "radical": "冂" },
	{ "id": 218, "hanzi": "苦", "radicalId": 140, "radical": "艸" },
	{ "id": "218a", "hanzi": "艹", "radicalId": 140, "radical": "艸" },
	{ "id": 219, "hanzi": "内", "radicalId": 13, "radical": "冂" },
	{ "id": 220, "hanzi": "呐", "radicalId": 30, "radical": "口" },
	{ "id": 221, "hanzi": "肉", "radicalId": 130, "radical": "肉" },
	{ "id": 222, "hanzi": "两", "radicalId": 1, "radical": "一" },
	{ "id": 223, "hanzi": "辆", "radicalId": 159, "radical": "車" },
	{ "id": 224, "hanzi": "俩", "radicalId": 9, "radical": "人" },
	{ "id": 225, "hanzi": "满", "radicalId": 85, "radical": "水" },
	{ "id": 226, "hanzi": "互", "radicalId": 7, "radical": "二" },
	{ "id": 227, "hanzi": "它", "radicalId": 40, "radical": "宀" },
	{ "id": 228, "hanzi": "比", "radicalId": 81, "radical": "比" },
	{ "id": 229, "hanzi": "批", "radicalId": 64, "radical": "手" },
	{ "id": 230, "hanzi": "切", "radicalId": 18, "radical": "刀" },
	{ "id": 231, "hanzi": "词", "radicalId": 149, "radical": "讠" },
	{ "id": "231b", "hanzi": "司", "radicalId": 30, "radical": "口" },
	{ "id": 232, "hanzi": "典", "radicalId": 12, "radical": "八" },
	{ "id": "232a", "hanzi": "曲", "radicalId": 73, "radical": "曰" },
	{ "id": 233, "hanzi": "红", "radicalId": 120, "radical": "纟" },
	{ "id": "233a", "hanzi": "纟", "radicalId": 120, "radical": "纟" },
	{ "id": 234, "hanzi": "细", "radicalId": 120, "radical": "纟" },
	{ "id": 235, "hanzi": "其", "radicalId": 12, "radical": "八" },
	{ "id": 236, "hanzi": "期", "radicalId": 74, "radical": "月" },
	{ "id": 237, "hanzi": "基", "radicalId": 32, "radical": "土" },
	{ "id": "238a", "hanzi": "犬", "radicalId": 94, "radical": "犬" },
	{ "id": 239, "hanzi": "就", "radicalId": 43, "radical": "尢" },
	{ "id": "239b", "hanzi": "京", "radicalId": 8, "radical": "亠" },
	{ "id": 240, "hanzi": "斤", "radicalId": 69, "radical": "斤" },
	{ "id": 241, "hanzi": "近", "radicalId": 162, "radical": "辵" },
	{ "id": 242, "hanzi": "听", "radicalId": 30, "radical": "口" },
	{ "id": 243, "hanzi": "新", "radicalId": 69, "radical": "斤" },
	{ "id": 244, "hanzi": "经", "radicalId": 120, "radical": "纟" },
	{ "id": 245, "hanzi": "轻", "radicalId": 159, "radical": "车" },
	{ "id": 246, "hanzi": "头", "radicalId": 37, "radical": "大" },
	{ "id": "247a", "hanzi": "乛", "radicalId": 5, "radical": "乙" },
	{ "id": 247, "hanzi": "买", "radicalId": 5, "radical": "乙" },
	{ "id": 248, "hanzi": "卖", "radicalId": 24, "radical": "十" },
	{ "id": 249, "hanzi": "读", "radicalId": 149, "radical": "讠" },
	{ "id": 250, "hanzi": "实", "radicalId": 40, "radical": "宀" },
	{ "id": "251a", "hanzi": "旨", "radicalId": 72, "radical": "日" },
	{ "id": 251, "hanzi": "指", "radicalId": 64, "radical": "手" },
	{ "id": 252, "hanzi": "论", "radicalId": 149, "radical": "讠" },
	{ "id": "252a", "hanzi": "仑", "radicalId": 9, "radical": "人" },
	{ "id": 253, "hanzi": "认", "radicalId": 149, "radical": "讠" },
	{ "id": 254, "hanzi": "只", "radicalId": 30, "radical": "口" },
	{ "id": 255, "hanzi": "织", "radicalId": 120, "radical": "纟" },
	{ "id": 256, "hanzi": "识", "radicalId": 149, "radical": "讠" },
	{ "id": 257, "hanzi": "音", "radicalId": 180, "radical": "音" },
	{ "id": 258, "hanzi": "意", "radicalId": 61, "radical": "心" },
	{ "id": 259, "hanzi": "成", "radicalId": 62, "radical": "戈" },
	{ "id": "259a", "hanzi": "戊", "radicalId": 62, "radical": "戈" },
	{ "id": 260, "hanzi": "城", "radicalId": 32, "radical": "土" },
	{ "id": 261, "hanzi": "者", "radicalId": 125, "radical": "老" },
	{ "id": 262, "hanzi": "都", "radicalId": 163, "radical": "邑" },
	{ "id": "263a", "hanzi": "犭", "radicalId": 94, "radical": "犬" },
	{ "id": 263, "hanzi": "猪", "radicalId": 94, "radical": "犬" },
	{ "id": 264, "hanzi": "老", "radicalId": 125, "radical": "老" },
	{ "id": "265a", "hanzi": "孝", "radicalId": 39, "radical": "子" },
	{ "id": 265, "hanzi": "教", "radicalId": 66, "radical": "攴" },
	{ "id": 266, "hanzi": "然", "radicalId": 86, "radical": "火" },
	{ "id": 267, "hanzi": "当", "radicalId": 42, "radical": "小" },
	{ "id": "268b", "hanzi": "尼", "radicalId": 44, "radical": "尸" },
	{ "id": "268a", "hanzi": "尸", "radicalId": 44, "radical": "尸" },
	{ "id": 268, "hanzi": "呢", "radicalId": 30, "radical": "口" },
	{ "id": 269, "hanzi": "户", "radicalId": 63, "radical": "戶" },
	{ "id": 270, "hanzi": "所", "radicalId": 63, "radical": "戶" },
	{ "id": 271, "hanzi": "己", "radicalId": 49, "radical": "己" },
	{ "id": 272, "hanzi": "记", "radicalId": 149, "radical": "讠" },
	{ "id": 273, "hanzi": "纪", "radicalId": 120, "radical": "纟" },
	{ "id": 274, "hanzi": "已", "radicalId": 49, "radical": "己" },
	{ "id": 275, "hanzi": "走", "radicalId": 156, "radical": "走" },
	{ "id": "275a", "hanzi": "巳", "radicalId": 49, "radical": "己" },
	{ "id": 276, "hanzi": "起", "radicalId": 156, "radical": "走" },
	{ "id": 277, "hanzi": "导", "radicalId": 41, "radical": "寸" },
	{ "id": 278, "hanzi": "钟", "radicalId": 167, "radical": "钅" },
	{ "id": "278a", "hanzi": "钅", "radicalId": 167, "radical": "钅" },
	{ "id": 279, "hanzi": "种", "radicalId": 115, "radical": "禾" },
	{ "id": 280, "hanzi": "足", "radicalId": 157, "radical": "足" },
	{ "id": "281a", "hanzi": "艮", "radicalId": 138, "radical": "艮" },
	{ "id": 281, "hanzi": "很", "radicalId": 60, "radical": "彳" },
	{ "id": 282, "hanzi": "根", "radicalId": 75, "radical": "木" },
	{ "id": 283, "hanzi": "跟", "radicalId": 157, "radical": "足" },
	{ "id": 284, "hanzi": "眼", "radicalId": 109, "radical": "目" },
	{ "id": 285, "hanzi": "银", "radicalId": 167, "radical": "钅" },
	{ "id": 286, "hanzi": "娘", "radicalId": 38, "radical": "女" },
	{ "id": "286a", "hanzi": "良", "radicalId": 138, "radical": "艮" },
	{ "id": 287, "hanzi": "食", "radicalId": 184, "radical": "食" },
	{ "id": "288a", "hanzi": "饣", "radicalId": 184, "radical": "饣" },
	{ "id": 288, "hanzi": "饿", "radicalId": 184, "radical": "饣" },
	{ "id": 289, "hanzi": "问", "radicalId": 169, "radical": "门" },
	{ "id": 290, "hanzi": "闻", "radicalId": 169, "radical": "门" },
	{ "id": 291, "hanzi": "方", "radicalId": 70, "radical": "方" },
	{ "id": 292, "hanzi": "访", "radicalId": 149, "radical": "讠" },
	{ "id": 293, "hanzi": "房", "radicalId": 63, "radical": "戶" },
	{ "id": 294, "hanzi": "放", "radicalId": 66, "radical": "攴" },
	{ "id": 295, "hanzi": "旁", "radicalId": 70, "radical": "方" },
	{ "id": 296, "hanzi": "万", "radicalId": 1, "radical": "一" },
	{ "id": 297, "hanzi": "主", "radicalId": 3, "radical": "丶" },
	{ "id": 299, "hanzi": "注", "radicalId": 85, "radical": "水" },
	{ "id": 300, "hanzi": "往", "radicalId": 60, "radical": "彳" },
	{ "id": 301, "hanzi": "元", "radicalId": 10, "radical": "儿" },
	{ "id": "301a", "hanzi": "兀", "radicalId": 10, "radical": "儿" },
	{ "id": 302, "hanzi": "园", "radicalId": 31, "radical": "囗" },
	{ "id": 303, "hanzi": "远", "radicalId": 162, "radical": "辵" },
	{ "id": 304, "hanzi": "玩", "radicalId": 96, "radical": "玉" },
	{ "id": 305, "hanzi": "完", "radicalId": 40, "radical": "宀" },
	{ "id": 306, "hanzi": "院", "radicalId": 170, "radical": "阜" },
	{ "id": 307, "hanzi": "南", "radicalId": 24, "radical": "十" },
	{ "id": 308, "hanzi": "幸", "radicalId": 51, "radical": "干" },
	{ "id": 309, "hanzi": "平", "radicalId": 51, "radical": "干" },
	{ "id": 310, "hanzi": "苹", "radicalId": 140, "radical": "艸" },
	{ "id": 311, "hanzi": "评", "radicalId": 149, "radical": "讠" },
	{ "id": 312, "hanzi": "事", "radicalId": 6, "radical": "亅" },
	{ "id": 313, "hanzi": "面", "radicalId": 176, "radical": "面" },
	{ "id": 314, "hanzi": "些", "radicalId": 7, "radical": "二" },
	{ "id": "314a", "hanzi": "此", "radicalId": 77, "radical": "止" },
	{ "id": 315, "hanzi": "倍", "radicalId": 9, "radical": "人" },
	{ "id": 316, "hanzi": "部", "radicalId": 163, "radical": "邑" },
	{ "id": "317a", "hanzi": "丬", "radicalId": 90, "radical": "爿" },
	{ "id": 317, "hanzi": "北", "radicalId": 21, "radical": "匕" },
	{ "id": 318, "hanzi": "将", "radicalId": 41, "radical": "寸" },
	{ "id": 319, "hanzi": "东", "radicalId": 1, "radical": "一" },
	{ "id": 320, "hanzi": "乐", "radicalId": 4, "radical": "丿" },
	{ "id": 321, "hanzi": "算", "radicalId": 118, "radical": "竹" },
	{ "id": 322, "hanzi": "第", "radicalId": 118, "radical": "竹" },
	{ "id": 323, "hanzi": "弟", "radicalId": 57, "radical": "弓" },
	{ "id": 324, "hanzi": "劳", "radicalId": 19, "radical": "力" },
	{ "id": 325, "hanzi": "加", "radicalId": 19, "radical": "力" },
	{ "id": 326, "hanzi": "驾", "radicalId": 187, "radical": "马" },
	{ "id": 327, "hanzi": "咖", "radicalId": 30, "radical": "口" },
	{ "id": 328, "hanzi": "非", "radicalId": 175, "radical": "非" },
	{ "id": 329, "hanzi": "啡", "radicalId": 30, "radical": "口" },
	{ "id": 330, "hanzi": "排", "radicalId": 64, "radical": "手" },
	{ "id": 331, "hanzi": "反", "radicalId": 29, "radical": "又" },
	{ "id": 332, "hanzi": "饭", "radicalId": 184, "radical": "饣" },
	{ "id": 333, "hanzi": "板", "radicalId": 75, "radical": "木" },
	{ "id": 334, "hanzi": "米", "radicalId": 119, "radical": "米" },
	{ "id": 335, "hanzi": "青", "radicalId": 174, "radical": "靑" },
	{ "id": 336, "hanzi": "请", "radicalId": 149, "radical": "讠" },
	{ "id": 337, "hanzi": "清", "radicalId": 85, "radical": "水" },
	{ "id": 338, "hanzi": "晴", "radicalId": 72, "radical": "日" },
	{ "id": "339a", "hanzi": "忄", "radicalId": 61, "radical": "心" },
	{ "id": 339, "hanzi": "情", "radicalId": 61, "radical": "心" },
	{ "id": 340, "hanzi": "睛", "radicalId": 109, "radical": "目" },
	{ "id": 341, "hanzi": "精", "radicalId": 119, "radical": "米" },
	{ "id": 342, "hanzi": "亮", "radicalId": 8, "radical": "亠" },
	{ "id": 343, "hanzi": "停", "radicalId": 9, "radical": "人" },
	{ "id": "343a", "hanzi": "亭", "radicalId": 8, "radical": "亠" },
	{ "id": 344, "hanzi": "单", "radicalId": 24, "radical": "十" },
	{ "id": 345, "hanzi": "间", "radicalId": 169, "radical": "门" },
	{ "id": 346, "hanzi": "简", "radicalId": 118, "radical": "竹" },
	{ "id": 347, "hanzi": "合", "radicalId": 30, "radical": "口" },
	{ "id": 348, "hanzi": "拿", "radicalId": 64, "radical": "手" },
	{ "id": 349, "hanzi": "拾", "radicalId": 64, "radical": "手" },
	{ "id": 350, "hanzi": "哈", "radicalId": 30, "radical": "口" },
	{ "id": 351, "hanzi": "给", "radicalId": 120, "radical": "纟" },
	{ "id": 352, "hanzi": "答", "radicalId": 118, "radical": "竹" },
	{ "id": 353, "hanzi": "片", "radicalId": 91, "radical": "片" },
	{ "id": 354, "hanzi": "叫", "radicalId": 30, "radical": "口" },
	{ "id": 355, "hanzi": "收", "radicalId": 66, "radical": "攴" },
	{ "id": "356a", "hanzi": "卑", "radicalId": 24, "radical": "十" },
	{ "id": 356, "hanzi": "啤", "radicalId": 30, "radical": "口" },
	{ "id": 357, "hanzi": "讲", "radicalId": 149, "radical": "讠" },
	{ "id": "357a", "hanzi": "井", "radicalId": 7, "radical": "二" },
	{ "id": 358, "hanzi": "进", "radicalId": 162, "radical": "辵" },
	{ "id": 359, "hanzi": "改", "radicalId": 66, "radical": "攴" },
	{ "id": 360, "hanzi": "况", "radicalId": 15, "radical": "冫" },
	{ "id": "360a", "hanzi": "冫", "radicalId": 15, "radical": "冫" },
	{ "id": "361a", "hanzi": "欠", "radicalId": 76, "radical": "欠" },
	{ "id": 361, "hanzi": "次", "radicalId": 76, "radical": "欠" },
	{ "id": 362, "hanzi": "吹", "radicalId": 30, "radical": "口" },
	{ "id": 363, "hanzi": "欢", "radicalId": 76, "radical": "欠" },
	{ "id": 364, "hanzi": "久", "radicalId": 4, "radical": "丿" },
	{ "id": 365, "hanzi": "爱", "radicalId": 87, "radical": "爪" },
	{ "id": "365a", "hanzi": "爪", "radicalId": 87, "radical": "爪" },
	{ "id": 366, "hanzi": "暖", "radicalId": 72, "radical": "日" },
	{ "id": 367, "hanzi": "父", "radicalId": 88, "radical": "父" },
	{ "id": "368a", "hanzi": "巴", "radicalId": 49, "radical": "己" },
	{ "id": 368, "hanzi": "吧", "radicalId": 30, "radical": "口" },
	{ "id": 369, "hanzi": "把", "radicalId": 64, "radical": "手" },
	{ "id": 370, "hanzi": "爸", "radicalId": 88, "radical": "父" },
	{ "id": 371, "hanzi": "爬", "radicalId": 87, "radical": "爪" },
	{ "id": 372, "hanzi": "关", "radicalId": 12, "radical": "八" },
	{ "id": 373, "hanzi": "送", "radicalId": 162, "radical": "辵" },
	{ "id": 374, "hanzi": "联", "radicalId": 128, "radical": "耳" },
	{ "id": 375, "hanzi": "言", "radicalId": 149, "radical": "言" },
	{ "id": 376, "hanzi": "信", "radicalId": 9, "radical": "人" },
	{ "id": 377, "hanzi": "少", "radicalId": 42, "radical": "小" },
	{ "id": 378, "hanzi": "步", "radicalId": 77, "radical": "止" },
	{ "id": 379, "hanzi": "省", "radicalId": 109, "radical": "目" },
	{ "id": 380, "hanzi": "交", "radicalId": 8, "radical": "亠" },
	{ "id": 381, "hanzi": "饺", "radicalId": 184, "radical": "饣" },
	{ "id": 382, "hanzi": "较", "radicalId": 159, "radical": "车" },
	{ "id": 383, "hanzi": "校", "radicalId": 75, "radical": "木" },
	{ "id": 384, "hanzi": "牛", "radicalId": 93, "radical": "牛" },
	{ "id": 385, "hanzi": "件", "radicalId": 9, "radical": "人" },
	{ "id": 386, "hanzi": "哥", "radicalId": 30, "radical": "口" },
	{ "id": 387, "hanzi": "歌", "radicalId": 76, "radical": "欠" },
	{ "id": 388, "hanzi": "应", "radicalId": 53, "radical": "广" },
	{ "id": 389, "hanzi": "向", "radicalId": 30, "radical": "口" },
	{ "id": 390, "hanzi": "响", "radicalId": 30, "radical": "口" },
	{ "id": 391, "hanzi": "化", "radicalId": 21, "radical": "匕" },
	{ "id": 392, "hanzi": "花", "radicalId": 140, "radical": "艸" },
	{ "id": 393, "hanzi": "历", "radicalId": 27, "radical": "厂" },
	{ "id": 394, "hanzi": "旧", "radicalId": 72, "radical": "日" },
	{ "id": 395, "hanzi": "业", "radicalId": 1, "radical": "一" },
	{ "id": "396b", "hanzi": "並", "radicalId": 1, "radical": "一" },
	{ "id": 396, "hanzi": "碰", "radicalId": 112, "radical": "石" },
	{ "id": "396a", "hanzi": "亚", "radicalId": 7, "radical": "二" },
	{ "id": 397, "hanzi": "史", "radicalId": 30, "radical": "口" },
	{ "id": 398, "hanzi": "使", "radicalId": 9, "radical": "人" },
	{ "id": "398a", "hanzi": "吏", "radicalId": 30, "radical": "口" },
	{ "id": 399, "hanzi": "更", "radicalId": 73, "radical": "曰" },
	{ "id": 400, "hanzi": "便", "radicalId": 9, "radical": "人" },
	{ "id": "401a", "hanzi": "央", "radicalId": 37, "radical": "大" },
	{ "id": 401, "hanzi": "英", "radicalId": 140, "radical": "艸" },
	{ "id": 402, "hanzi": "块", "radicalId": 32, "radical": "土" },
	{ "id": 403, "hanzi": "快", "radicalId": 61, "radical": "心" },
	{ "id": 404, "hanzi": "决", "radicalId": 15, "radical": "冫" },
	{ "id": 405, "hanzi": "觉", "radicalId": 147, "radical": "见" },
	{ "id": 406, "hanzi": "定", "radicalId": 40, "radical": "宀" },
	{ "id": 407, "hanzi": "重", "radicalId": 166, "radical": "里" },
	{ "id": "408a", "hanzi": "董", "radicalId": 140, "radical": "艸" },
	{ "id": 408, "hanzi": "懂", "radicalId": 61, "radical": "心" },
	{ "id": 409, "hanzi": "睡", "radicalId": 109, "radical": "目" },
	{ "id": "409a", "hanzi": "垂", "radicalId": 32, "radical": "土" },
	{ "id": 410, "hanzi": "飞", "radicalId": 183, "radical": "飞" },
	{ "id": 411, "hanzi": "气", "radicalId": 84, "radical": "气" },
	{ "id": 412, "hanzi": "汽", "radicalId": 85, "radical": "水" },
	{ "id": "413a", "hanzi": "乙", "radicalId": 5, "radical": "乙" },
	{ "id": 413, "hanzi": "亿", "radicalId": 9, "radical": "人" },
	{ "id": 414, "hanzi": "艺", "radicalId": 140, "radical": "艸" },
	{ "id": 415, "hanzi": "吃", "radicalId": 30, "radical": "口" },
	{ "id": "415a", "hanzi": "乞", "radicalId": 5, "radical": "乙" },
	{ "id": 416, "hanzi": "全", "radicalId": 11, "radical": "入" },
	{ "id": 417, "hanzi": "色", "radicalId": 139, "radical": "色" },
	{ "id": 418, "hanzi": "角", "radicalId": 148, "radical": "角" },
	{ "id": 419, "hanzi": "确", "radicalId": 112, "radical": "石" },
	{ "id": 420, "hanzi": "嘴", "radicalId": 30, "radical": "口" },
	{ "id": 421, "hanzi": "最", "radicalId": 72, "radical": "日" },
	{ "id": 422, "hanzi": "谈", "radicalId": 149, "radical": "讠" },
	{ "id": "422a", "hanzi": "炎", "radicalId": 86, "radical": "火" },
	{ "id": "423a", "hanzi": "与", "radicalId": 1, "radical": "一" },
	{ "id": 423, "hanzi": "写", "radicalId": 14, "radical": "冖" },
	{ "id": 424, "hanzi": "号", "radicalId": 30, "radical": "口" },
	{ "id": "424a", "hanzi": "丂", "radicalId": 1, "radical": "一" },
	{ "id": "425a", "hanzi": "廿", "radicalId": 55, "radical": "廾" },
	{ "id": 425, "hanzi": "度", "radicalId": 53, "radical": "广" },
	{ "id": 426, "hanzi": "态", "radicalId": 61, "radical": "心" },
	{ "id": 427, "hanzi": "市", "radicalId": 50, "radical": "巾" },
	{ "id": "427a", "hanzi": "巾", "radicalId": 50, "radical": "巾" },
	{ "id": "428a", "hanzi": "帀", "radicalId": 50, "radical": "巾" },
	{ "id": 428, "hanzi": "师", "radicalId": 50, "radical": "巾" },
	{ "id": 429, "hanzi": "带", "radicalId": 50, "radical": "巾" },
	{ "id": 430, "hanzi": "示", "radicalId": 113, "radical": "示" },
	{ "id": 431, "hanzi": "票", "radicalId": 113, "radical": "示" },
	{ "id": 432, "hanzi": "漂", "radicalId": 85, "radical": "水" },
	{ "id": 433, "hanzi": "社", "radicalId": 113, "radical": "示" },
	{ "id": "433a", "hanzi": "礻", "radicalId": 113, "radical": "示" },
	{ "id": 434, "hanzi": "祝", "radicalId": 113, "radical": "示" },
	{ "id": 435, "hanzi": "视", "radicalId": 113, "radical": "示" },
	{ "id": 436, "hanzi": "表", "radicalId": 145, "radical": "衣" },
	{ "id": 437, "hanzi": "衣", "radicalId": 145, "radical": "衣" },
	{ "id": 438, "hanzi": "农", "radicalId": 14, "radical": "冖" },
	{ "id": 439, "hanzi": "初", "radicalId": 18, "radical": "刀" },
	{ "id": "439a", "hanzi": "衤", "radicalId": 145, "radical": "衣" },
	{ "id": "440a", "hanzi": "皮", "radicalId": 107, "radical": "皮" },
	{ "id": 440, "hanzi": "被", "radicalId": 145, "radical": "衣" },
	{ "id": 441, "hanzi": "破", "radicalId": 112, "radical": "石" },
	{ "id": 442, "hanzi": "坏", "radicalId": 32, "radical": "土" },
	{ "id": 443, "hanzi": "且", "radicalId": 1, "radical": "一" },
	{ "id": 444, "hanzi": "姐", "radicalId": 38, "radical": "女" },
	{ "id": 445, "hanzi": "助", "radicalId": 19, "radical": "力" },
	{ "id": 446, "hanzi": "租", "radicalId": 115, "radical": "禾" },
	{ "id": 447, "hanzi": "祖", "radicalId": 113, "radical": "示" },
	{ "id": 448, "hanzi": "组", "radicalId": 120, "radical": "纟" },
	{ "id": 449, "hanzi": "宜", "radicalId": 40, "radical": "宀" },
	{ "id": 450, "hanzi": "谊", "radicalId": 149, "radical": "讠" },
	{ "id": 451, "hanzi": "直", "radicalId": 109, "radical": "目" },
	{ "id": 452, "hanzi": "真", "radicalId": 109, "radical": "目" },
	{ "id": 453, "hanzi": "毛", "radicalId": 82, "radical": "毛" },
	{ "id": 454, "hanzi": "笔", "radicalId": 118, "radical": "竹" },
	{ "id": 455, "hanzi": "民", "radicalId": 83, "radical": "氏" },
	{ "id": "456a", "hanzi": "弋", "radicalId": 56, "radical": "弋" },
	{ "id": 456, "hanzi": "代", "radicalId": 9, "radical": "人" },
	{ "id": 457, "hanzi": "刮", "radicalId": 18, "radical": "刀" },
	{ "id": "457a", "hanzi": "舌", "radicalId": 135, "radical": "舌" },
	{ "id": 458, "hanzi": "话", "radicalId": 149, "radical": "讠" },
	{ "id": 459, "hanzi": "适", "radicalId": 162, "radical": "辵" },
	{ "id": 460, "hanzi": "活", "radicalId": 85, "radical": "水" },
	{ "id": 461, "hanzi": "术", "radicalId": 75, "radical": "木" },
	{ "id": 462, "hanzi": "支", "radicalId": 65, "radical": "支" },
	{ "id": 463, "hanzi": "技", "radicalId": 64, "radical": "手" },
	{ "id": "464a", "hanzi": "寺", "radicalId": 41, "radical": "寸" },
	{ "id": 464, "hanzi": "等", "radicalId": 118, "radical": "竹" },
	{ "id": 465, "hanzi": "持", "radicalId": 64, "radical": "手" },
	{ "id": 466, "hanzi": "特", "radicalId": 93, "radical": "牛" },
	{ "id": 467, "hanzi": "义", "radicalId": 3, "radical": "丶" },
	{ "id": 468, "hanzi": "风", "radicalId": 182, "radical": "风" },
	{ "id": 469, "hanzi": "数", "radicalId": 66, "radical": "攴" },
	{ "id": 470, "hanzi": "楼", "radicalId": 75, "radical": "木" },
	{ "id": 471, "hanzi": "层", "radicalId": 44, "radical": "尸" },
	{ "id": 472, "hanzi": "室", "radicalId": 40, "radical": "宀" },
	{ "id": 473, "hanzi": "屋", "radicalId": 44, "radical": "尸" },
	{ "id": 474, "hanzi": "握", "radicalId": 64, "radical": "手" },
	{ "id": 475, "hanzi": "提", "radicalId": 64, "radical": "手" },
	{ "id": 476, "hanzi": "让", "radicalId": 149, "radical": "讠" },
	{ "id": 477, "hanzi": "页", "radicalId": 181, "radical": "页" },
	{ "id": "477a", "hanzi": "贝", "radicalId": 154, "radical": "贝" },
	{ "id": 478, "hanzi": "题", "radicalId": 181, "radical": "页" },
	{ "id": 479, "hanzi": "员", "radicalId": 30, "radical": "口" },
	{ "id": 480, "hanzi": "圆", "radicalId": 31, "radical": "囗" },
	{ "id": 481, "hanzi": "高", "radicalId": 189, "radical": "高" },
	{ "id": 482, "hanzi": "搞", "radicalId": 64, "radical": "手" },
	{ "id": 483, "hanzi": "治", "radicalId": 85, "radical": "水" },
	{ "id": "483a", "hanzi": "台", "radicalId": 30, "radical": "口" },
	{ "id": 484, "hanzi": "抬", "radicalId": 64, "radical": "手" },
	{ "id": 485, "hanzi": "始", "radicalId": 38, "radical": "女" },
	{ "id": 486, "hanzi": "容", "radicalId": 40, "radical": "宀" },
	{ "id": "486a", "hanzi": "谷", "radicalId": 150, "radical": "谷" },
	{ "id": "487a", "hanzi": "士", "radicalId": 33, "radical": "士" },
	{ "id": 487, "hanzi": "志", "radicalId": 61, "radical": "心" },
	{ "id": 488, "hanzi": "声", "radicalId": 33, "radical": "士" },
	{ "id": 489, "hanzi": "装", "radicalId": 145, "radical": "衣" },
	{ "id": "489a", "hanzi": "壮", "radicalId": 33, "radical": "士" },
	{ "id": "490a", "hanzi": "矢", "radicalId": 111, "radical": "矢" },
	{ "id": 490, "hanzi": "知", "radicalId": 111, "radical": "矢" },
	{ "id": "491a", "hanzi": "匚", "radicalId": 22, "radical": "匚" },
	{ "id": 491, "hanzi": "医", "radicalId": 23, "radical": "匸" },
	{ "id": 492, "hanzi": "贵", "radicalId": 154, "radical": "贝" },
	{ "id": 493, "hanzi": "您", "radicalId": 61, "radical": "心" },
	{ "id": 494, "hanzi": "束", "radicalId": 75, "radical": "木" },
	{ "id": 495, "hanzi": "整", "radicalId": 66, "radical": "攴" },
	{ "id": 496, "hanzi": "嗽", "radicalId": 30, "radical": "口" },
	{ "id": "497a", "hanzi": "亥", "radicalId": 8, "radical": "亠" },
	{ "id": 497, "hanzi": "该", "radicalId": 149, "radical": "讠" },
	{ "id": 498, "hanzi": "孩", "radicalId": 39, "radical": "子" },
	{ "id": 499, "hanzi": "咳", "radicalId": 30, "radical": "口" },
	{ "id": 500, "hanzi": "刻", "radicalId": 18, "radical": "刀" },
	{ "id": "501a", "hanzi": "隹", "radicalId": 172, "radical": "隹" },
	{ "id": 501, "hanzi": "谁", "radicalId": 149, "radical": "讠" },
	{ "id": 502, "hanzi": "推", "radicalId": 64, "radical": "手" },
	{ "id": 503, "hanzi": "难", "radicalId": 172, "radical": "隹" },
	{ "id": 504, "hanzi": "准", "radicalId": 15, "radical": "冫" },
	{ "id": 505, "hanzi": "集", "radicalId": 172, "radical": "隹" },
	{ "id": 506, "hanzi": "处", "radicalId": 34, "radical": "夂" },
	{ "id": "506a", "hanzi": "夂", "radicalId": 34, "radical": "夂" },
	{ "id": 507, "hanzi": "各", "radicalId": 30, "radical": "口" },
	{ "id": 508, "hanzi": "路", "radicalId": 157, "radical": "足" },
	{ "id": 509, "hanzi": "客", "radicalId": 40, "radical": "宀" },
	{ "id": "510b", "hanzi": "疒", "radicalId": 104, "radical": "疒" },
	{ "id": "510a", "hanzi": "丙", "radicalId": 1, "radical": "一" },
	{ "id": 510, "hanzi": "病", "radicalId": 104, "radical": "疒" },
	{ "id": 511, "hanzi": "杂", "radicalId": 75, "radical": "木" },
	{ "id": 512, "hanzi": "怎", "radicalId": 61, "radical": "心" },
	{ "id": 513, "hanzi": "脏", "radicalId": 130, "radical": "肉" },
	{ "id": "513a", "hanzi": "庄", "radicalId": 53, "radical": "广" },
	{ "id": 514, "hanzi": "总", "radicalId": 61, "radical": "心" },
	{ "id": 515, "hanzi": "责", "radicalId": 154, "radical": "贝" },
	{ "id": 516, "hanzi": "绩", "radicalId": 120, "radical": "纟" },
	{ "id": 517, "hanzi": "负", "radicalId": 154, "radical": "贝" },
	{ "id": 518, "hanzi": "才", "radicalId": 64, "radical": "手" },
	{ "id": 519, "hanzi": "团", "radicalId": 31, "radical": "囗" },
	{ "id": 520, "hanzi": "因", "radicalId": 31, "radical": "囗" },
	{ "id": 521, "hanzi": "嗯", "radicalId": 30, "radical": "口" },
	{ "id": "521a", "hanzi": "恩", "radicalId": 61, "radical": "心" },
	{ "id": 522, "hanzi": "困", "radicalId": 31, "radical": "囗" },
	{ "id": 523, "hanzi": "水", "radicalId": 85, "radical": "水" },
	{ "id": 524, "hanzi": "求", "radicalId": 85, "radical": "水" },
	{ "id": 525, "hanzi": "球", "radicalId": 96, "radical": "玉" },
	{ "id": 526, "hanzi": "忽", "radicalId": 61, "radical": "心" },
	{ "id": "526a", "hanzi": "勿", "radicalId": 20, "radical": "勹" },
	{ "id": 527, "hanzi": "物", "radicalId": 93, "radical": "牛" },
	{ "id": 528, "hanzi": "易", "radicalId": 72, "radical": "日" },
	{ "id": 529, "hanzi": "踢", "radicalId": 157, "radical": "足" },
	{ "id": 530, "hanzi": "场", "radicalId": 32, "radical": "土" },
	{ "id": 531, "hanzi": "汤", "radicalId": 85, "radical": "水" },
	{ "id": 532, "hanzi": "扬", "radicalId": 64, "radical": "手" },
	{ "id": "533a", "hanzi": "乃", "radicalId": 4, "radical": "丿" },
	{ "id": 533, "hanzi": "奶", "radicalId": 38, "radical": "女" },
	{ "id": "534a", "hanzi": "及", "radicalId": 29, "radical": "又" },
	{ "id": 534, "hanzi": "极", "radicalId": 75, "radical": "木" },
	{ "id": 535, "hanzi": "级", "radicalId": 120, "radical": "纟" },
	{ "id": 536, "hanzi": "原", "radicalId": 27, "radical": "厂" },
	{ "id": 537, "hanzi": "愿", "radicalId": 61, "radical": "心" },
	{ "id": "538a", "hanzi": "吉", "radicalId": 30, "radical": "口" },
	{ "id": 538, "hanzi": "结", "radicalId": 120, "radical": "纟" },
	{ "id": 539, "hanzi": "喜", "radicalId": 30, "radical": "口" },
	{ "id": 540, "hanzi": "周", "radicalId": 30, "radical": "口" },
	{ "id": 541, "hanzi": "调", "radicalId": 149, "radical": "讠" },
	{ "id": "542a", "hanzi": "尚", "radicalId": 42, "radical": "小" },
	{ "id": 542, "hanzi": "躺", "radicalId": 158, "radical": "身" },
	{ "id": 543, "hanzi": "堂", "radicalId": 32, "radical": "土" },
	{ "id": 544, "hanzi": "常", "radicalId": 50, "radical": "巾" },
	{ "id": 545, "hanzi": "掌", "radicalId": 64, "radical": "手" },
	{ "id": 546, "hanzi": "条", "radicalId": 75, "radical": "木" },
	{ "id": 547, "hanzi": "务", "radicalId": 19, "radical": "力" },
	{ "id": 548, "hanzi": "备", "radicalId": 34, "radical": "夂" },
	{ "id": 549, "hanzi": "鱼", "radicalId": 195, "radical": "鱼" },
	{ "id": 550, "hanzi": "复", "radicalId": 35, "radical": "夊" },
	{ "id": 551, "hanzi": "任", "radicalId": 9, "radical": "人" },
	{ "id": "551a", "hanzi": "壬", "radicalId": 33, "radical": "士" },
	{ "id": 552, "hanzi": "计", "radicalId": 149, "radical": "讠" },
	{ "id": 553, "hanzi": "设", "radicalId": 149, "radical": "讠" },
	{ "id": 554, "hanzi": "划", "radicalId": 18, "radical": "刀" },
	{ "id": 555, "hanzi": "或", "radicalId": 62, "radical": "戈" },
	{ "id": 556, "hanzi": "感", "radicalId": 61, "radical": "心" },
	{ "id": "556a", "hanzi": "咸", "radicalId": 30, "radical": "口" },
	{ "id": 557, "hanzi": "喊", "radicalId": 30, "radical": "口" },
	{ "id": 558, "hanzi": "布", "radicalId": 50, "radical": "巾" },
	{ "id": 559, "hanzi": "希", "radicalId": 50, "radical": "巾" },
	{ "id": "560a", "hanzi": "卩", "radicalId": 26, "radical": "卩" },
	{ "id": 560, "hanzi": "节", "radicalId": 140, "radical": "艸" },
	{ "id": "561a", "hanzi": "却", "radicalId": 26, "radical": "卩" },
	{ "id": 561, "hanzi": "脚", "radicalId": 130, "radical": "肉" },
	{ "id": 562, "hanzi": "报", "radicalId": 64, "radical": "手" },
	{ "id": 563, "hanzi": "服", "radicalId": 74, "radical": "月" },
	{ "id": "564a", "hanzi": "甬", "radicalId": 101, "radical": "用" },
	{ "id": 564, "hanzi": "通", "radicalId": 162, "radical": "辵" },
	{ "id": 565, "hanzi": "痛", "radicalId": 104, "radical": "疒" },
	{ "id": "566b", "hanzi": "厄", "radicalId": 27, "radical": "厂" },
	{ "id": 566, "hanzi": "危", "radicalId": 26, "radical": "卩" },
	{ "id": 567, "hanzi": "顾", "radicalId": 181, "radical": "页" },
	{ "id": 568, "hanzi": "忙", "radicalId": 61, "radical": "心" },
	{ "id": "568b", "hanzi": "亡", "radicalId": 8, "radical": "亠" },
	{ "id": 569, "hanzi": "忘", "radicalId": 61, "radical": "心" },
	{ "id": 570, "hanzi": "望", "radicalId": 74, "radical": "月" },
	{ "id": 571, "hanzi": "雨", "radicalId": 173, "radical": "雨" },
	{ "id": 572, "hanzi": "雪", "radicalId": 173, "radical": "雨" },
	{ "id": "573a", "hanzi": "彡", "radicalId": 59, "radical": "彡" },
	{ "id": 573, "hanzi": "参", "radicalId": 28, "radical": "厶" },
	{ "id": 574, "hanzi": "影", "radicalId": 59, "radical": "彡" },
	{ "id": "574a", "hanzi": "景", "radicalId": 72, "radical": "日" },
	{ "id": 575, "hanzi": "喝", "radicalId": 30, "radical": "口" },
	{ "id": "575a", "hanzi": "匃", "radicalId": 20, "radical": "勹" },
	{ "id": "575b", "hanzi": "曷", "radicalId": 73, "radical": "曰" },
	{ "id": 576, "hanzi": "渴", "radicalId": 85, "radical": "水" },
	{ "id": 577, "hanzi": "继", "radicalId": 120, "radical": "纟" },
	{ "id": 578, "hanzi": "世", "radicalId": 1, "radical": "一" },
	{ "id": 579, "hanzi": "介", "radicalId": 9, "radical": "人" },
	{ "id": 580, "hanzi": "界", "radicalId": 102, "radical": "田" },
	{ "id": "581a", "hanzi": "亦", "radicalId": 8, "radical": "亠" },
	{ "id": 581, "hanzi": "变", "radicalId": 29, "radical": "又" },
	{ "id": "582a", "hanzi": "夭", "radicalId": 37, "radical": "大" },
	{ "id": 582, "hanzi": "笑", "radicalId": 118, "radical": "竹" },
	{ "id": 583, "hanzi": "桥", "radicalId": 75, "radical": "木" },
	{ "id": "583a", "hanzi": "乔", "radicalId": 4, "radical": "丿" },
	{ "id": "584b", "hanzi": "列", "radicalId": 18, "radical": "刀" },
	{ "id": 584, "hanzi": "例", "radicalId": 9, "radical": "人" },
	{ "id": "584a", "hanzi": "歹", "radicalId": 78, "radical": "歹" },
	{ "id": 585, "hanzi": "死", "radicalId": 78, "radical": "歹" },
	{ "id": 587, "hanzi": "急", "radicalId": 61, "radical": "心" },
	{ "id": 588, "hanzi": "颜", "radicalId": 181, "radical": "页" },
	{ "id": "588a", "hanzi": "彦", "radicalId": 59, "radical": "彡" },
	{ "id": 589, "hanzi": "许", "radicalId": 149, "radical": "讠" },
	{ "id": 590, "hanzi": "需", "radicalId": 173, "radical": "雨" },
	{ "id": 591, "hanzi": "须", "radicalId": 181, "radical": "页" },
	{ "id": 592, "hanzi": "续", "radicalId": 120, "radical": "纟" },
	{ "id": 593, "hanzi": "冷", "radicalId": 15, "radical": "冫" },
	{ "id": "593a", "hanzi": "令", "radicalId": 9, "radical": "人" },
	{ "id": 594, "hanzi": "零", "radicalId": 173, "radical": "雨" },
	{ "id": 595, "hanzi": "领", "radicalId": 181, "radical": "页" },
	{ "id": "596a", "hanzi": "召", "radicalId": 30, "radical": "口" },
	{ "id": 596, "hanzi": "绍", "radicalId": 120, "radical": "纟" },
	{ "id": "597a", "hanzi": "昭", "radicalId": 72, "radical": "日" },
	{ "id": 597, "hanzi": "照", "radicalId": 86, "radical": "火" },
	{ "id": 598, "hanzi": "查", "radicalId": 75, "radical": "木" },
	{ "id": 599, "hanzi": "检", "radicalId": 75, "radical": "木" },
	{ "id": 600, "hanzi": "脸", "radicalId": 130, "radical": "肉" },
	{ "id": 601, "hanzi": "险", "radicalId": 170, "radical": "阜" },
	{ "id": 602, "hanzi": "验", "radicalId": 187, "radical": "马" },
	{ "id": 603, "hanzi": "试", "radicalId": 149, "radical": "讠" },
	{ "id": "603a", "hanzi": "式", "radicalId": 56, "radical": "弋" },
	{ "id": 604, "hanzi": "考", "radicalId": 125, "radical": "老" },
	{ "id": 605, "hanzi": "科", "radicalId": 115, "radical": "禾" },
	{ "id": "605a", "hanzi": "斗", "radicalId": 68, "radical": "斗" },
	{ "id": 606, "hanzi": "研", "radicalId": 112, "radical": "石" },
	{ "id": "607b", "hanzi": "糸", "radicalId": 120, "radical": "糸" },
	{ "id": 607, "hanzi": "系", "radicalId": 120, "radical": "糸" },
	{ "id": "607a", "hanzi": "幺", "radicalId": 52, "radical": "幺" },
	{ "id": 608, "hanzi": "累", "radicalId": 120, "radical": "糸" },
	{ "id": "609a", "hanzi": "戋", "radicalId": 62, "radical": "戈" },
	{ "id": 609, "hanzi": "践", "radicalId": 157, "radical": "足" },
	{ "id": 610, "hanzi": "钱", "radicalId": 167, "radical": "钅" },
	{ "id": 611, "hanzi": "浅", "radicalId": 85, "radical": "水" },
	{ "id": 612, "hanzi": "礼", "radicalId": 113, "radical": "示" },
	{ "id": 613, "hanzi": "乱", "radicalId": 5, "radical": "乙" },
	{ "id": 614, "hanzi": "育", "radicalId": 130, "radical": "肉" },
	{ "id": 615, "hanzi": "流", "radicalId": 85, "radical": "水" },
	{ "id": "616a", "hanzi": "穴", "radicalId": 116, "radical": "穴" },
	{ "id": 616, "hanzi": "究", "radicalId": 116, "radical": "穴" },
	{ "id": 617, "hanzi": "空", "radicalId": 116, "radical": "穴" },
	{ "id": 618, "hanzi": "突", "radicalId": 116, "radical": "穴" },
	{ "id": 619, "hanzi": "深", "radicalId": 85, "radical": "水" },
	{ "id": 620, "hanzi": "抽", "radicalId": 64, "radical": "手" },
	{ "id": "620a", "hanzi": "由", "radicalId": 102, "radical": "田" },
	{ "id": 621, "hanzi": "邮", "radicalId": 163, "radical": "邑" },
	{ "id": "622a", "hanzi": "申", "radicalId": 102, "radical": "田" },
	{ "id": 622, "hanzi": "神", "radicalId": 113, "radical": "示" },
	{ "id": "623b", "hanzi": "寅", "radicalId": 40, "radical": "宀" },
	{ "id": 623, "hanzi": "演", "radicalId": 85, "radical": "水" },
	{ "id": 624, "hanzi": "黄", "radicalId": 201, "radical": "黃" },
	{ "id": 625, "hanzi": "共", "radicalId": 12, "radical": "八" },
	{ "id": "626a", "hanzi": "凵", "radicalId": 17, "radical": "凵" },
	{ "id": 626, "hanzi": "画", "radicalId": 102, "radical": "田" },
	{ "id": 627, "hanzi": "怕", "radicalId": 61, "radical": "心" },
	{ "id": 628, "hanzi": "拍", "radicalId": 64, "radical": "手" },
	{ "id": 629, "hanzi": "哭", "radicalId": 30, "radical": "口" },
	{ "id": 630, "hanzi": "器", "radicalId": 30, "radical": "口" },
	{ "id": "631a", "hanzi": "品", "radicalId": 30, "radical": "口" },
	{ "id": 631, "hanzi": "操", "radicalId": 64, "radical": "手" },
	{ "id": 632, "hanzi": "澡", "radicalId": 85, "radical": "水" },
	{ "id": 633, "hanzi": "早", "radicalId": 72, "radical": "日" },
	{ "id": 634, "hanzi": "章", "radicalId": 117, "radical": "立" },
	{ "id": 635, "hanzi": "草", "radicalId": 140, "radical": "艸" },
	{ "id": 636, "hanzi": "包", "radicalId": 20, "radical": "勹" },
	{ "id": 637, "hanzi": "饱", "radicalId": 184, "radical": "饣" },
	{ "id": 638, "hanzi": "抱", "radicalId": 64, "radical": "手" },
	{ "id": 639, "hanzi": "跑", "radicalId": 157, "radical": "足" },
	{ "id": 640, "hanzi": "商", "radicalId": 30, "radical": "口" },
	{ "id": 641, "hanzi": "宿", "radicalId": 40, "radical": "宀" },
	{ "id": "641a", "hanzi": "佰", "radicalId": 9, "radical": "人" },
	{ "id": "642a", "hanzi": "予", "radicalId": 6, "radical": "亅" },
	{ "id": 642, "hanzi": "预", "radicalId": 181, "radical": "页" },
	{ "id": 643, "hanzi": "舍", "radicalId": 135, "radical": "舌" },
	{ "id": 644, "hanzi": "舒", "radicalId": 135, "radical": "舌" },
	{ "id": 645, "hanzi": "兴", "radicalId": 12, "radical": "八" },
	{ "id": 646, "hanzi": "橘", "radicalId": 75, "radical": "木" },
	{ "id": "646a", "hanzi": "矛", "radicalId": 110, "radical": "矛" },
	{ "id": 647, "hanzi": "桔", "radicalId": 75, "radical": "木" },
	{ "id": 648, "hanzi": "举", "radicalId": 3, "radical": "丶" },
	{ "id": 649, "hanzi": "句", "radicalId": 30, "radical": "口" },
	{ "id": 650, "hanzi": "局", "radicalId": 44, "radical": "尸" },
	{ "id": 651, "hanzi": "够", "radicalId": 36, "radical": "夕" },
	{ "id": 652, "hanzi": "附", "radicalId": 170, "radical": "阜" },
	{ "id": "652a", "hanzi": "付", "radicalId": 9, "radical": "人" },
	{ "id": 653, "hanzi": "府", "radicalId": 53, "radical": "广" },
	{ "id": 654, "hanzi": "离", "radicalId": 114, "radical": "禸" },
	{ "id": "654a", "hanzi": "凶", "radicalId": 17, "radical": "凵" },
	{ "id": 655, "hanzi": "遇", "radicalId": 162, "radical": "辵" },
	{ "id": "655a", "hanzi": "禺", "radicalId": 114, "radical": "禸" },
	{ "id": 656, "hanzi": "脱", "radicalId": 130, "radical": "肉" },
	{ "id": "657b", "hanzi": "廴", "radicalId": 54, "radical": "廴" },
	{ "id": 657, "hanzi": "建", "radicalId": 54, "radical": "廴" },
	{ "id": "657a", "hanzi": "聿", "radicalId": 129, "radical": "聿" },
	{ "id": 658, "hanzi": "健", "radicalId": 9, "radical": "人" },
	{ "id": 659, "hanzi": "庭", "radicalId": 53, "radical": "广" },
	{ "id": "659a", "hanzi": "廷", "radicalId": 54, "radical": "廴" },
	{ "id": 660, "hanzi": "挺", "radicalId": 64, "radical": "手" },
	{ "id": 661, "hanzi": "消", "radicalId": 85, "radical": "水" },
	{ "id": "661a", "hanzi": "肖", "radicalId": 130, "radical": "肉" },
	{ "id": 662, "hanzi": "息", "radicalId": 61, "radical": "心" },
	{ "id": 663, "hanzi": "留", "radicalId": 102, "radical": "田" },
	{ "id": 664, "hanzi": "派", "radicalId": 85, "radical": "水" },
	{ "id": 665, "hanzi": "展", "radicalId": 44, "radical": "尸" },
	{ "id": 666, "hanzi": "喂", "radicalId": 30, "radical": "口" },
	{ "id": "666a", "hanzi": "畏", "radicalId": 102, "radical": "田" },
	{ "id": 667, "hanzi": "候", "radicalId": 9, "radical": "人" },
	{ "id": 668, "hanzi": "齐", "radicalId": 210, "radical": "齐" },
	{ "id": 669, "hanzi": "挤", "radicalId": 64, "radical": "手" },
	{ "id": 670, "hanzi": "济", "radicalId": 85, "radical": "水" },
	{ "id": 671, "hanzi": "黑", "radicalId": 203, "radical": "黑" },
	{ "id": 672, "hanzi": "增", "radicalId": 32, "radical": "土" },
	{ "id": "672a", "hanzi": "曾", "radicalId": 73, "radical": "曰" },
	{ "id": 673, "hanzi": "晚", "radicalId": 72, "radical": "日" },
	{ "id": "673a", "hanzi": "免", "radicalId": 10, "radical": "儿" },
	{ "id": 674, "hanzi": "像", "radicalId": 9, "radical": "人" },
	{ "id": "674a", "hanzi": "象", "radicalId": 152, "radical": "豕" },
	{ "id": 675, "hanzi": "换", "radicalId": 64, "radical": "手" },
	{ "id": 676, "hanzi": "刚", "radicalId": 18, "radical": "刀" },
	{ "id": "676a", "hanzi": "冈", "radicalId": 13, "radical": "冂" },
	{ "id": 677, "hanzi": "钢", "radicalId": 167, "radical": "钅" },
	{ "id": 678, "hanzi": "鸡", "radicalId": 196, "radical": "鸟" },
	{ "id": "678a", "hanzi": "鸟", "radicalId": 196, "radical": "鸟" },
	{ "id": "679a", "hanzi": "虫", "radicalId": 142, "radical": "虫" },
	{ "id": "680a", "hanzi": "舟", "radicalId": 137, "radical": "舟" },
	{ "id": 680, "hanzi": "般", "radicalId": 137, "radical": "舟" },
	{ "id": 681, "hanzi": "搬", "radicalId": 64, "radical": "手" },
	{ "id": 682, "hanzi": "迎", "radicalId": 162, "radical": "辵" },
	{ "id": 683, "hanzi": "纸", "radicalId": 120, "radical": "纟" },
	{ "id": "683a", "hanzi": "氏", "radicalId": 83, "radical": "氏" },
	{ "id": 684, "hanzi": "低", "radicalId": 9, "radical": "人" },
	{ "id": "684a", "hanzi": "氐", "radicalId": 83, "radical": "氏" },
	{ "id": 685, "hanzi": "永", "radicalId": 85, "radical": ")" },
	{ "id": 686, "hanzi": "泳", "radicalId": 85, "radical": "水" },
	{ "id": 687, "hanzi": "族", "radicalId": 70, "radical": "方" },
	{ "id": 688, "hanzi": "游", "radicalId": 85, "radical": "水" },
	{ "id": 689, "hanzi": "冬", "radicalId": 15, "radical": "冫" },
	{ "id": 690, "hanzi": "疼", "radicalId": 104, "radical": "疒" },
	{ "id": 691, "hanzi": "图", "radicalId": 31, "radical": "囗" },
	{ "id": 692, "hanzi": "春", "radicalId": 72, "radical": "日" },
	{ "id": 693, "hanzi": "秋", "radicalId": 115, "radical": "禾" },
	{ "id": 694, "hanzi": "夏", "radicalId": 35, "radical": "夊" },
	{ "id": "695c", "hanzi": "执", "radicalId": 64, "radical": "手" },
	{ "id": 695, "hanzi": "热", "radicalId": 86, "radical": "火" },
	{ "id": "695b", "hanzi": "丸", "radicalId": 3, "radical": "丶" },
	{ "id": 696, "hanzi": "熟", "radicalId": 86, "radical": "火" },
	{ "id": "696a", "hanzi": "享", "radicalId": 8, "radical": "亠" },
	{ "id": 698, "hanzi": "紧", "radicalId": 120, "radical": "糸" },
	{ "id": 699, "hanzi": "览", "radicalId": 147, "radical": "见" },
	{ "id": "700a", "hanzi": "皿", "radicalId": 108, "radical": "皿" },
	{ "id": 700, "hanzi": "蓝", "radicalId": 140, "radical": "艸" },
	{ "id": "700b", "hanzi": "监", "radicalId": 108, "radical": "皿" },
	{ "id": 701, "hanzi": "篮", "radicalId": 118, "radical": "竹" },
	{ "id": 702, "hanzi": "福", "radicalId": 113, "radical": "示" },
	{ "id": 703, "hanzi": "富", "radicalId": 40, "radical": "宀" },
	{ "id": 704, "hanzi": "丰", "radicalId": 2, "radical": "丨" },
	{ "id": 705, "hanzi": "帮", "radicalId": 50, "radical": "巾" },
	{ "id": "705a", "hanzi": "邦", "radicalId": 163, "radical": "邑" },
	{ "id": 707, "hanzi": "伟", "radicalId": 9, "radical": "人" },
	{ "id": 708, "hanzi": "挂", "radicalId": 64, "radical": "手" },
	{ "id": "708a", "hanzi": "圭", "radicalId": 32, "radical": "土" },
	{ "id": 709, "hanzi": "封", "radicalId": 41, "radical": "寸" },
	{ "id": 710, "hanzi": "街", "radicalId": 144, "radical": "行" },
	{ "id": 711, "hanzi": "鞋", "radicalId": 177, "radical": "革" },
	{ "id": "711a", "hanzi": "革", "radicalId": 177, "radical": "革" },
	{ "id": 712, "hanzi": "双", "radicalId": 29, "radical": "又" },
	{ "id": 713, "hanzi": "炼", "radicalId": 86, "radical": "火" },
	{ "id": 714, "hanzi": "练", "radicalId": 120, "radical": "纟" },
	{ "id": 715, "hanzi": "段", "radicalId": 79, "radical": "殳" },
	{ "id": 716, "hanzi": "锻", "radicalId": 167, "radical": "钅" },
	{ "id": 717, "hanzi": "顿", "radicalId": 181, "radical": "页" },
	{ "id": "717a", "hanzi": "屯", "radicalId": 45, "radical": "屮" },
	{ "id": 718, "hanzi": "烦", "radicalId": 86, "radical": "火" },
	{ "id": "719a", "hanzi": "斥", "radicalId": 69, "radical": "斤" },
	{ "id": 719, "hanzi": "诉", "radicalId": 149, "radical": "讠" },
	{ "id": "720a", "hanzi": "约", "radicalId": 120, "radical": "纟" },
	{ "id": 720, "hanzi": "药", "radicalId": 140, "radical": "艸" },
	{ "id": 721, "hanzi": "净", "radicalId": 15, "radical": "冫" },
	{ "id": "721a", "hanzi": "争", "radicalId": 6, "radical": "亅" },
	{ "id": 722, "hanzi": "静", "radicalId": 174, "radical": "靑" },
	{ "id": 723, "hanzi": "朝", "radicalId": 74, "radical": "月" },
	{ "id": "724a", "hanzi": "卓", "radicalId": 24, "radical": "十" },
	{ "id": 724, "hanzi": "掉", "radicalId": 64, "radical": "手" },
	{ "id": 725, "hanzi": "桌", "radicalId": 75, "radical": "木" },
	{ "id": 726, "hanzi": "敢", "radicalId": 66, "radical": "攴" },
	{ "id": 727, "hanzi": "休", "radicalId": 9, "radical": "人" },
	{ "id": 728, "hanzi": "退", "radicalId": 162, "radical": "辵" },
	{ "id": 729, "hanzi": "腿", "radicalId": 130, "radical": "肉" },
	{ "id": "730a", "hanzi": "豆", "radicalId": 151, "radical": "豆" },
	{ "id": 730, "hanzi": "短", "radicalId": 111, "radical": "矢" },
	{ "id": 731, "hanzi": "误", "radicalId": 149, "radical": "讠" },
	{ "id": "731a", "hanzi": "吴", "radicalId": 30, "radical": "口" },
	{ "id": 732, "hanzi": "彩", "radicalId": 59, "radical": "彡" },
	{ "id": "732a", "hanzi": "采", "radicalId": 165, "radical": "釆" },
	{ "id": 733, "hanzi": "菜", "radicalId": 140, "radical": "艸" },
	{ "id": "734b", "hanzi": "番", "radicalId": 102, "radical": "田" },
	{ "id": "734a", "hanzi": "釆", "radicalId": 165, "radical": "釆" },
	{ "id": 734, "hanzi": "播", "radicalId": 64, "radical": "手" },
	{ "id": 735, "hanzi": "习", "radicalId": 5, "radical": "乙" },
	{ "id": "736a", "hanzi": "羽", "radicalId": 124, "radical": "羽" },
	{ "id": 736, "hanzi": "翻", "radicalId": 124, "radical": "羽" },
	{ "id": 737, "hanzi": "译", "radicalId": 149, "radical": "讠" },
	{ "id": "738a", "hanzi": "余", "radicalId": 9, "radical": "人" },
	{ "id": 738, "hanzi": "除", "radicalId": 170, "radical": "阜" },
	{ "id": 739, "hanzi": "茶", "radicalId": 140, "radical": "艸" },
	{ "id": 740, "hanzi": "骑", "radicalId": 187, "radical": "马" },
	{ "id": "740a", "hanzi": "奇", "radicalId": 37, "radical": "大" },
	{ "id": 741, "hanzi": "椅", "radicalId": 75, "radical": "木" },
	{ "id": 742, "hanzi": "寄", "radicalId": 40, "radical": "宀" },
	{ "id": "743a", "hanzi": "昔", "radicalId": 72, "radical": "日" },
	{ "id": 743, "hanzi": "错", "radicalId": 167, "radical": "钅" },
	{ "id": 744, "hanzi": "借", "radicalId": 9, "radical": "人" },
	{ "id": 745, "hanzi": "散", "radicalId": 66, "radical": "攴" },
	{ "id": 746, "hanzi": "船", "radicalId": 137, "radical": "舟" },
	{ "id": 747, "hanzi": "铅", "radicalId": 167, "radical": "钅" },
	{ "id": 748, "hanzi": "蛋", "radicalId": 142, "radical": "虫" },
	{ "id": "748a", "hanzi": "疋", "radicalId": 103, "radical": "疋" },
	{ "id": "749a", "hanzi": "林", "radicalId": 75, "radical": "木" },
	{ "id": 750, "hanzi": "麻", "radicalId": 200, "radical": "麻" },
	{ "id": 751, "hanzi": "嘛", "radicalId": 30, "radical": "口" },
	{ "id": "752a", "hanzi": "隶", "radicalId": 171, "radical": "隶" },
	{ "id": 752, "hanzi": "康", "radicalId": 53, "radical": "广" },
	{ "id": 753, "hanzi": "录", "radicalId": 58, "radical": "彐" },
	{ "id": 754, "hanzi": "绿", "radicalId": 120, "radical": "纟" },
	{ "id": 755, "hanzi": "旅", "radicalId": 70, "radical": "方" },
	{ "id": 756, "hanzi": "愉", "radicalId": 61, "radical": "心" },
	{ "id": "756a", "hanzi": "俞", "radicalId": 9, "radical": "人" },
	{ "id": 757, "hanzi": "输", "radicalId": 159, "radical": "车" },
	{ "id": 758, "hanzi": "凉", "radicalId": 15, "radical": "冫" },
	{ "id": 759, "hanzi": "谅", "radicalId": 149, "radical": "讠" },
	{ "id": "760b", "hanzi": "宛", "radicalId": 40, "radical": "宀" },
	{ "id": 760, "hanzi": "碗", "radicalId": 112, "radical": "石" },
	{ "id": 761, "hanzi": "香", "radicalId": 186, "radical": "香" },
	{ "id": 762, "hanzi": "努", "radicalId": 19, "radical": "力" },
	{ "id": "762a", "hanzi": "奴", "radicalId": 38, "radical": "女" },
	{ "id": "763a", "hanzi": "焦", "radicalId": 86, "radical": "火" },
	{ "id": 763, "hanzi": "蕉", "radicalId": 140, "radical": "艸" },
	{ "id": 764, "hanzi": "糖", "radicalId": 119, "radical": "米" },
	{ "id": "764b", "hanzi": "唐", "radicalId": 30, "radical": "口" },
	{ "id": 765, "hanzi": "酸", "radicalId": 164, "radical": "酉" },
	{ "id": "766a", "hanzi": "委", "radicalId": 38, "radical": "女" },
	{ "id": 766, "hanzi": "矮", "radicalId": 111, "radical": "矢" },
	{ "id": 767, "hanzi": "窗", "radicalId": 116, "radical": "穴" },
	{ "id": "767a", "hanzi": "囱", "radicalId": 31, "radical": "囗" },
	{ "id": 768, "hanzi": "寒", "radicalId": 40, "radical": "宀" },
	{ "id": 769, "hanzi": "赛", "radicalId": 154, "radical": "贝" },
	{ "id": "770b", "hanzi": "扁", "radicalId": 63, "radical": "戶" },
	{ "id": 770, "hanzi": "遍", "radicalId": 162, "radical": "辵" },
	{ "id": 771, "hanzi": "篇", "radicalId": 118, "radical": "竹" },
	{ "id": "772a", "hanzi": "昌", "radicalId": 72, "radical": "日" },
	{ "id": 772, "hanzi": "唱", "radicalId": 30, "radical": "口" },
	{ "id": 773, "hanzi": "冒", "radicalId": 13, "radical": "冂" },
	{ "id": 774, "hanzi": "帽", "radicalId": 50, "radical": "巾" },
	{ "id": 775, "hanzi": "晨", "radicalId": 72, "radical": "日" },
	{ "id": "775a", "hanzi": "辰", "radicalId": 161, "radical": "辰" },
	{ "id": "776a", "hanzi": "毌", "radicalId": 80, "radical": "毋" },
	{ "id": 776, "hanzi": "惯", "radicalId": 61, "radical": "心" },
	{ "id": "776b", "hanzi": "贯", "radicalId": 154, "radical": "贝" },
	{ "id": 777, "hanzi": "迟", "radicalId": 162, "radical": "辵" },
	{ "id": "777a", "hanzi": "尺", "radicalId": 44, "radical": "尸" },
	{ "id": "778b", "hanzi": "尧", "radicalId": 43, "radical": "尢" },
	{ "id": 778, "hanzi": "烧", "radicalId": 86, "radical": "火" },
	{ "id": 779, "hanzi": "概", "radicalId": 75, "radical": "木" },
	{ "id": "779b", "hanzi": "既", "radicalId": 71, "radical": "无" },
	{ "id": "780a", "hanzi": "牙", "radicalId": 92, "radical": "牙" },
	{ "id": 780, "hanzi": "呀", "radicalId": 30, "radical": "口" },
	{ "id": 781, "hanzi": "穿", "radicalId": 116, "radical": "穴" },
	{ "id": 782, "hanzi": "戴", "radicalId": 62, "radical": "戈" },
	{ "id": "782a", "hanzi": "異", "radicalId": 102, "radical": "田" },
	{ "id": "783a", "hanzi": "乘", "radicalId": 4, "radical": "丿" },
	{ "id": 783, "hanzi": "剩", "radicalId": 18, "radical": "刀" },
	{ "id": "784b", "hanzi": "官", "radicalId": 40, "radical": "宀" },
	{ "id": 784, "hanzi": "馆", "radicalId": 184, "radical": "饣" },
	{ "id": "785b", "hanzi": "曼", "radicalId": 73, "radical": "曰" },
	{ "id": "785a", "hanzi": "罒", "radicalId": 122, "radical": "网" },
	{ "id": 785, "hanzi": "慢", "radicalId": 61, "radical": "心" },
	{ "id": "786a", "hanzi": "罢", "radicalId": 122, "radical": "网" },
	{ "id": 786, "hanzi": "摆", "radicalId": 64, "radical": "手" },
	{ "id": 787, "hanzi": "舞", "radicalId": 136, "radical": "舛" },
	{ "id": "787a", "hanzi": "舛", "radicalId": 136, "radical": "舛" },
	{ "id": "788a", "hanzi": "兆", "radicalId": 10, "radical": "儿" },
	{ "id": 788, "hanzi": "跳", "radicalId": 157, "radical": "足" },
	{ "id": 789, "hanzi": "辅", "radicalId": 159, "radical": "车" },
	{ "id": "789a", "hanzi": "甫", "radicalId": 101, "radical": "用" },
	{ "id": 790, "hanzi": "傅", "radicalId": 9, "radical": "人" },
	{ "id": 791, "hanzi": "瓶", "radicalId": 98, "radical": "瓦" },
	{ "id": "791a", "hanzi": "并", "radicalId": 51, "radical": "干" },
	{ "id": "791b", "hanzi": "瓦", "radicalId": 98, "radical": "瓦" },
	{ "id": "792c", "hanzi": "察", "radicalId": 40, "radical": "宀" },
	{ "id": 792, "hanzi": "擦", "radicalId": 64, "radical": "手" },
	{ "id": "792b", "hanzi": "祭", "radicalId": 113, "radical": "示" },
	{ "id": 793, "hanzi": "袜", "radicalId": 145, "radical": "衣" },
	{ "id": "793a", "hanzi": "末", "radicalId": 75, "radical": "木" },
	{ "id": "794b", "hanzi": "兹", "radicalId": 12, "radical": "八" },
	{ "id": 794, "hanzi": "磁", "radicalId": 112, "radical": "石" },
	{ "id": 795, "hanzi": "丢", "radicalId": 4, "radical": "丿" },
	{ "id": 796, "hanzi": "宴", "radicalId": 40, "radical": "宀" },
	{ "id": 797, "hanzi": "夜", "radicalId": 36, "radical": "夕" },
	{ "id": 798, "hanzi": "假", "radicalId": 9, "radical": "人" },
	{ "id": 799, "hanzi": "墙", "radicalId": 32, "radical": "土" },
	{ "id": 800, "hanzi": "赢", "radicalId": 154, "radical": "贝" }
]

const compositions = [
	{ "id": "1", "hanzi": "一", "composition": null, "components": [] },
	{ "id": "2", "hanzi": "二", "composition": "⿱", "components": ["一"] },
	{
		"id": "3",
		"hanzi": "三",
		"composition": "⿱",
		"components": ["一", "二"]
	},
	{
		"id": "5",
		"hanzi": "口",
		"composition": "⿱",
		"components": ["冂", "一"]
	},
	{
		"id": "6",
		"hanzi": "日",
		"composition": "⿴",
		"components": ["囗", "一"]
	},
	{
		"id": "7",
		"hanzi": "几",
		"composition": "⿰",
		"components": ["丿", "㇈"]
	},
	{
		"id": "8",
		"hanzi": "也",
		"composition": "⿻",
		"components": ["乜", "丨"]
	},
	{
		"id": "9",
		"hanzi": "不",
		"composition": "⿸",
		"components": ["丆", "卜"]
	},
	{
		"id": "10a",
		"hanzi": "木",
		"composition": "⿻",
		"components": ["十", "𠆢"]
	},
	{
		"id": "10",
		"hanzi": "机",
		"composition": "⿰",
		"components": ["木", "几"]
	},
	{
		"id": "11",
		"hanzi": "杯",
		"composition": "⿰",
		"components": ["木", "不"]
	},
	{
		"id": "12",
		"hanzi": "人",
		"composition": "⿸",
		"components": ["丿", "㇏"]
	},
	{
		"id": "13a",
		"hanzi": "亻",
		"composition": "⿱",
		"components": ["丿", "丨"]
	},
	{
		"id": "13",
		"hanzi": "他",
		"composition": "⿰",
		"components": ["亻", "也"]
	},
	{
		"id": "14",
		"hanzi": "力",
		"composition": "⿻",
		"components": ["𠃌", "丿"]
	},
	{
		"id": "15",
		"hanzi": "女",
		"composition": "⿻",
		"components": ["𡿨", "丆"]
	},
	{
		"id": "16",
		"hanzi": "她",
		"composition": "⿰",
		"components": ["女", "也"]
	},
	{
		"id": "17",
		"hanzi": "子",
		"composition": "⿻",
		"components": ["了", "一"]
	},
	{
		"id": "18",
		"hanzi": "好",
		"composition": "⿰",
		"components": ["女", "子"]
	},
	{
		"id": "19",
		"hanzi": "个",
		"composition": "⿱",
		"components": ["人", "丨"]
	},
	{ "id": "19a", "hanzi": "丨", "composition": null, "components": [] },
	{
		"id": "19b",
		"hanzi": "人",
		"composition": "⿸",
		"components": ["丿", "㇏"]
	},
	{
		"id": "20",
		"hanzi": "八",
		"composition": "⿰",
		"components": ["丿", "乀"]
	},
	{
		"id": "21",
		"hanzi": "儿",
		"composition": "⿰",
		"components": ["丿", "乚"]
	},
	{ "id": "22a", "hanzi": "丶", "composition": null, "components": [] },
	{
		"id": "22",
		"hanzi": "白",
		"composition": "⿱",
		"components": ["丿", "日"]
	},
	{
		"id": "23a",
		"hanzi": "勹",
		"composition": "⿰",
		"components": ["丿", "𠃌"]
	},
	{
		"id": "23",
		"hanzi": "的",
		"composition": "⿰",
		"components": ["白", "勺"]
	},
	{
		"id": "23b",
		"hanzi": "勺",
		"composition": "⿹",
		"components": ["勹", "丶"]
	},
	{ "id": "24", "hanzi": "四", "composition": "⿴", "components": ["囗", "儿"] },
	{
		"id": "24a",
		"hanzi": "囗",
		"composition": "⿱",
		"components": ["冂", "一"]
	},
	{
		"id": "25a",
		"hanzi": "乂",
		"composition": "⿻",
		"components": ["丿", "㇏"]
	},
	{
		"id": "25b",
		"hanzi": "亠",
		"composition": "⿱",
		"components": ["丶", "一"]
	},
	{
		"id": "25",
		"hanzi": "文",
		"composition": "⿱",
		"components": ["亠", "乂"]
	},
	{
		"id": "26",
		"hanzi": "这",
		"composition": "⿺",
		"components": ["辶", "文"]
	},
	{
		"id": "26a",
		"hanzi": "辶",
		"composition": "⿳",
		"components": ["丶", "𠃍", "乀"]
	},
	{
		"id": "27",
		"hanzi": "门",
		"composition": "⿲",
		"components": ["丨", "丶", "𠃌"]
	},
	{
		"id": "28",
		"hanzi": "们",
		"composition": "⿰",
		"components": ["亻", "门"]
	},
	{
		"id": "29",
		"hanzi": "正",
		"composition": "⿱",
		"components": ["一", "止"]
	},
	{ "id": "29a", "hanzi": "止", "composition": "⿻", "components": ["⺊", "丄"] },
	{
		"id": "30",
		"hanzi": "是",
		"composition": "⿱",
		"components": ["日", "𤴓"]
	},
	{
		"id": "30b",
		"hanzi": "疋",
		"composition": "⿱",
		"components": ["乛", "龰"]
	},
	{ "id": "31", "hanzi": "手", "composition": null, "components": [] },
	{
		"id": "32",
		"hanzi": "我",
		"composition": "⿻",
		"components": ["𠂌", "戈"]
	},
	{
		"id": "32a",
		"hanzi": "戈",
		"composition": "⿻",
		"components": ["弋", "丿"]
	},
	{
		"id": "33",
		"hanzi": "中",
		"composition": "⿻",
		"components": ["口", "丨"]
	},
	{
		"id": "34a",
		"hanzi": "厶",
		"composition": "⿰",
		"components": ["𠃋", "丶"]
	},
	{
		"id": "34",
		"hanzi": "么",
		"composition": "⿱",
		"components": ["丿", "厶"]
	},
	{
		"id": "35",
		"hanzi": "什",
		"composition": "⿰",
		"components": ["亻", "十"]
	},
	{
		"id": "36",
		"hanzi": "五",
		"composition": "⿱",
		"components": ["一", "𫝀"]
	},
	{
		"id": "37",
		"hanzi": "七",
		"composition": "⿻",
		"components": ["㇀", "乚"]
	},
	{
		"id": "38",
		"hanzi": "九",
		"composition": "⿻",
		"components": ["丿", "⺄"]
	},
	{
		"id": "39",
		"hanzi": "六",
		"composition": "⿱",
		"components": ["亠", "八"]
	},
	{
		"id": "40",
		"hanzi": "百",
		"composition": "⿱",
		"components": ["一", "白"]
	},
	{
		"id": "41",
		"hanzi": "边",
		"composition": "⿺",
		"components": ["辶", "力"]
	},
	{
		"id": "42a",
		"hanzi": "卜",
		"composition": "⿰",
		"components": ["丨", "丶"]
	},
	{
		"id": "42",
		"hanzi": "上",
		"composition": "⿱",
		"components": ["⺊", "一"]
	},
	{
		"id": "43",
		"hanzi": "下",
		"composition": "⿱",
		"components": ["一", "卜"]
	},
	{
		"id": "44",
		"hanzi": "马",
		"composition": "⿹",
		"components": ["𢎘", "一"]
	},
	{
		"id": "45",
		"hanzi": "吗",
		"composition": "⿰",
		"components": ["口", "马"]
	},
	{
		"id": "46",
		"hanzi": "妈",
		"composition": "⿰",
		"components": ["女", "马"]
	},
	{
		"id": "47",
		"hanzi": "大",
		"composition": "⿻",
		"components": ["一", "人"]
	},
	{
		"id": "48",
		"hanzi": "太",
		"composition": "⿵",
		"components": ["大", "丶"]
	},
	{
		"id": "49",
		"hanzi": "夫",
		"composition": "⿻",
		"components": ["二", "人"]
	},
	{
		"id": "50",
		"hanzi": "小",
		"composition": "⿻",
		"components": ["亅", "八"]
	},
	{
		"id": "51",
		"hanzi": "你",
		"composition": "⿰",
		"components": ["亻", "尔"]
	},
	{
		"id": "51b",
		"hanzi": "尔",
		"composition": "⿱",
		"components": ["⺈", "小"]
	},
	{
		"id": "52",
		"hanzi": "又",
		"composition": "⿻",
		"components": ["㇇", "㇏"]
	},
	{
		"id": "53",
		"hanzi": "友",
		"composition": "⿸",
		"components": ["𠂇", "又"]
	},
	{
		"id": "54",
		"hanzi": "地",
		"composition": "⿰",
		"components": ["土", "也"]
	},
	{
		"id": "54a",
		"hanzi": "土",
		"composition": "⿱",
		"components": ["十", "一"]
	},
	{ "id": "55", "hanzi": "在", "composition": "⿸⿰", "components": ["𠂇", "丨", "土"] },
	{
		"id": "56",
		"hanzi": "云",
		"composition": "⿱",
		"components": ["二", "厶"]
	},
	{
		"id": "57",
		"hanzi": "运",
		"composition": "⿺",
		"components": ["辶", "云"]
	},
	{
		"id": "58",
		"hanzi": "动",
		"composition": "⿰",
		"components": ["云", "力"]
	},
	{
		"id": "59",
		"hanzi": "会",
		"composition": "⿱",
		"components": ["人", "云"]
	},
	{
		"id": "60a",
		"hanzi": "王",
		"composition": "⿱",
		"components": ["一", "土"]
	},
	{
		"id": "60b",
		"hanzi": "玉",
		"composition": "⿱",
		"components": ["一", "圡"]
	},
	{
		"id": "60",
		"hanzi": "国",
		"composition": "⿴",
		"components": ["囗", "玉"]
	},
	{
		"id": "61",
		"hanzi": "月",
		"composition": "⿵",
		"components": ["⺆", "𠄠"]
	},
	{ "id": "62", "hanzi": "朋", "composition": "⿰", "components": ["月"] },
	{
		"id": "63",
		"hanzi": "有",
		"composition": "⿸",
		"components": ["𠂇", "月"]
	},
	{
		"id": "64a",
		"hanzi": "未",
		"composition": "⿻",
		"components": ["一", "木"]
	},
	{
		"id": "64",
		"hanzi": "妹",
		"composition": "⿰",
		"components": ["女", "未"]
	},
	{
		"id": "65a",
		"hanzi": "丷",
		"composition": "⿰",
		"components": ["丶", "丿"]
	},
	{
		"id": "65",
		"hanzi": "来",
		"composition": "⿻",
		"components": ["未", "丷"]
	},
	{
		"id": "66",
		"hanzi": "了",
		"composition": "⿱",
		"components": ["乛", "亅"]
	},
	{
		"id": "67c",
		"hanzi": "讠",
		"composition": "⿱",
		"components": ["丶", "㇊"]
	},
	{
		"id": "67",
		"hanzi": "说",
		"composition": "⿰",
		"components": ["讠", "兑"]
	},
	{
		"id": "67b",
		"hanzi": "兌",
		"composition": "⿱",
		"components": ["八", "兄"]
	},
	{
		"id": "67a",
		"hanzi": "兄",
		"composition": "⿱",
		"components": ["口", "儿"]
	},
	{
		"id": "68",
		"hanzi": "语",
		"composition": "⿰",
		"components": ["讠", "吾"]
	},
	{
		"id": "68a",
		"hanzi": "吾",
		"composition": "⿱",
		"components": ["五", "口"]
	},
	{
		"id": "69a",
		"hanzi": "夕",
		"composition": "⿴",
		"components": ["𠂊", "丶"]
	},
	{ "id": "69", "hanzi": "多", "composition": "⿱", "components": ["夕"] },
	{
		"id": "70",
		"hanzi": "名",
		"composition": "⿱",
		"components": ["夕", "口"]
	},
	{
		"id": "71",
		"hanzi": "外",
		"composition": "⿰",
		"components": ["夕", "卜"]
	},
	{
		"id": "72",
		"hanzi": "刀",
		"composition": "⿹",
		"components": ["𠃌", "丿"]
	},
	{
		"id": "73",
		"hanzi": "分",
		"composition": "⿱",
		"components": ["八", "刀"]
	},
	{
		"id": "74a",
		"hanzi": "刂",
		"composition": "⿰",
		"components": ["丨", "亅"]
	},
	{
		"id": "74b",
		"hanzi": "至",
		"composition": "⿱",
		"components": ["𠫔", "土"]
	},
	{
		"id": "74",
		"hanzi": "到",
		"composition": "⿰",
		"components": ["至", "刂"]
	},
	{
		"id": "75",
		"hanzi": "倒",
		"composition": "⿰",
		"components": ["亻", "到"]
	},
	{
		"id": "76",
		"hanzi": "天",
		"composition": "⿱",
		"components": ["一", "大"]
	},
	{
		"id": "77",
		"hanzi": "明",
		"composition": "⿰",
		"components": ["日", "月"]
	},
	{
		"id": "78",
		"hanzi": "汉",
		"composition": "⿰",
		"components": ["氵", "又"]
	},
	{
		"id": "78a",
		"hanzi": "氵",
		"composition": "⿱",
		"components": ["⺀", "㇀"]
	},
	{
		"id": "79a",
		"hanzi": "另",
		"composition": "⿱",
		"components": ["口", "力"]
	},
	{
		"id": "79",
		"hanzi": "别",
		"composition": "⿰",
		"components": ["另", "刂"]
	},
	{
		"id": "80",
		"hanzi": "如",
		"composition": "⿰",
		"components": ["女", "口"]
	},
	{
		"id": "81",
		"hanzi": "行",
		"composition": "⿰",
		"components": ["彳", "亍"]
	},
	{
		"id": "81a",
		"hanzi": "彳",
		"composition": "⿱",
		"components": ["丿", "亻"]
	},
	{
		"id": "81c",
		"hanzi": "亍",
		"composition": "⿱",
		"components": ["一", "丁"]
	},
	{
		"id": "81b",
		"hanzi": "丁",
		"composition": "⿱",
		"components": ["一", "亅"]
	},
	{
		"id": "82a",
		"hanzi": "冖",
		"composition": "⿰",
		"components": ["丿", "乛"]
	},
	{
		"id": "82",
		"hanzi": "学",
		"composition": "⿱",
		"components": ["𰃮", "子"]
	},
	{ "id": "83", "hanzi": "车", "composition": "⿻⿻", "components": ["一", "𠃋", "十"] },
	{
		"id": "84",
		"hanzi": "连",
		"composition": "⿺",
		"components": ["辶", "车"]
	},
	{
		"id": "85",
		"hanzi": "开",
		"composition": "⿱",
		"components": ["一", "廾"]
	},
	{
		"id": "86",
		"hanzi": "去",
		"composition": "⿱",
		"components": ["土", "厶"]
	},
	{
		"id": "87",
		"hanzi": "法",
		"composition": "⿰",
		"components": ["氵", "去"]
	},
	{
		"id": "88",
		"hanzi": "取",
		"composition": "⿰",
		"components": ["耳", "又"]
	},
	{ "id": "88a", "hanzi": "耳", "composition": null, "components": [] },
	{
		"id": "89",
		"hanzi": "千",
		"composition": "⿱",
		"components": ["丿", "十"]
	},
	{
		"id": "90",
		"hanzi": "前",
		"composition": "⿱",
		"components": ["䒑", "刖"]
	},
	{
		"id": "91a",
		"hanzi": "宀",
		"composition": "⿱",
		"components": ["丶", "冖"]
	},
	{
		"id": "91",
		"hanzi": "安",
		"composition": "⿱",
		"components": ["宀", "女"]
	},
	{
		"id": "92",
		"hanzi": "字",
		"composition": "⿱",
		"components": ["宀", "子"]
	},
	{
		"id": "93",
		"hanzi": "目",
		"composition": "⿴",
		"components": ["囗", "𠄠"]
	},
	{
		"id": "94",
		"hanzi": "自",
		"composition": "⿱",
		"components": ["丿", "目"]
	},
	{
		"id": "95",
		"hanzi": "咱",
		"composition": "⿰",
		"components": ["口", "自"]
	},
	{
		"id": "96a",
		"hanzi": "阝",
		"composition": "⿰",
		"components": ["丨", "㇌"]
	},
	{
		"id": "96",
		"hanzi": "阳",
		"composition": "⿰",
		"components": ["⻖", "日"]
	},
	{
		"id": "97",
		"hanzi": "阴",
		"composition": "⿰",
		"components": ["⻖", "月"]
	},
	{
		"id": "98",
		"hanzi": "那",
		"composition": "⿰",
		"components": ["𭃂", "阝"]
	},
	{
		"id": "99",
		"hanzi": "哪",
		"composition": "⿰",
		"components": ["口", "那"]
	},
	{
		"id": "100",
		"hanzi": "西",
		"composition": "⿱",
		"components": ["一", "𠁤"]
	},
	{
		"id": "101",
		"hanzi": "要",
		"composition": "⿱",
		"components": ["覀", "女"]
	},
	{
		"id": "102a",
		"hanzi": "酉",
		"composition": "⿴",
		"components": ["西", "一"]
	},
	{
		"id": "102",
		"hanzi": "酒",
		"composition": "⿰",
		"components": ["氵", "酉"]
	},
	{ "id": "103", "hanzi": "从", "composition": "⿰", "components": ["人"] },
	{
		"id": "104",
		"hanzi": "村",
		"composition": "⿰",
		"components": ["木", "寸"]
	},
	{
		"id": "104a",
		"hanzi": "寸",
		"composition": "⿹",
		"components": ["𬺰", "丶"]
	},
	{
		"id": "105",
		"hanzi": "时",
		"composition": "⿰",
		"components": ["日", "寸"]
	},
	{
		"id": "106",
		"hanzi": "过",
		"composition": "⿺",
		"components": ["辶", "寸"]
	},
	{ "id": "107", "hanzi": "身", "composition": null, "components": [] },
	{
		"id": "108a",
		"hanzi": "射",
		"composition": "⿰",
		"components": ["身", "寸"]
	},
	{
		"id": "108",
		"hanzi": "谢",
		"composition": "⿰",
		"components": ["讠", "射"]
	},
	{
		"id": "109",
		"hanzi": "家",
		"composition": "⿱",
		"components": ["宀", "豕"]
	},
	{
		"id": "109a",
		"hanzi": "豕",
		"composition": "⿱",
		"components": ["一", "𧰨"]
	},
	{
		"id": "110",
		"hanzi": "山",
		"composition": "⿶",
		"components": ["凵", "丨"]
	},
	{
		"id": "111",
		"hanzi": "羊",
		"composition": "⿱",
		"components": ["䒑", "𰀁"]
	},
	{
		"id": "112",
		"hanzi": "样",
		"composition": "⿰",
		"components": ["木", "羊"]
	},
	{
		"id": "113",
		"hanzi": "班",
		"composition": "⿲",
		"components": ["⺩", "刂", "王"]
	},
	{
		"id": "114",
		"hanzi": "出",
		"composition": "⿱",
		"components": ["屮", "凵"]
	},
	{
		"id": "115",
		"hanzi": "础",
		"composition": "⿰",
		"components": ["石", "出"]
	},
	{
		"id": "115a",
		"hanzi": "石",
		"composition": "⿸",
		"components": ["丆", "口"]
	},
	{
		"id": "116",
		"hanzi": "岁",
		"composition": "⿱",
		"components": ["山", "夕"]
	},
	{
		"id": "117",
		"hanzi": "但",
		"composition": "⿰",
		"components": ["亻", "旦"]
	},
	{
		"id": "118",
		"hanzi": "得",
		"composition": "⿰",
		"components": ["彳", "㝵"]
	},
	{
		"id": "119",
		"hanzi": "公",
		"composition": "⿱",
		"components": ["八", "厶"]
	},
	{
		"id": "120",
		"hanzi": "以",
		"composition": "⿲",
		"components": ["𠄌", "丶", "人"]
	},
	{
		"id": "121",
		"hanzi": "之",
		"composition": "⿳",
		"components": ["丶", "㇇", "乀"]
	},
	{ "id": "122", "hanzi": "为", "composition": "⿻⿵", "components": ["丶", "力", "丶"] },
	{
		"id": "123",
		"hanzi": "办",
		"composition": "⿻",
		"components": ["力", "八"]
	},
	{
		"id": "124",
		"hanzi": "干",
		"composition": "⿱",
		"components": ["一", "十"]
	},
	{
		"id": "125",
		"hanzi": "午",
		"composition": "⿱",
		"components": ["𠂉", "十"]
	},
	{
		"id": "126a",
		"hanzi": "禾",
		"composition": "⿱",
		"components": ["丿", "木"]
	},
	{
		"id": "126",
		"hanzi": "和",
		"composition": "⿰",
		"components": ["禾", "口"]
	},
	{ "id": "127", "hanzi": "母", "composition": "⿻⿻⿻", "components": ["𠃋", "𠃌", "⺀", "一"] },
	{
		"id": "128",
		"hanzi": "每",
		"composition": "⿱",
		"components": ["𠂉", "母"]
	},
	{
		"id": "129",
		"hanzi": "海",
		"composition": "⿰",
		"components": ["氵", "每"]
	},
	{
		"id": "130",
		"hanzi": "用",
		"composition": "⿵",
		"components": ["⺆", "𰀁"]
	},
	{
		"id": "131",
		"hanzi": "半",
		"composition": "⿻",
		"components": ["丷", "𰀁"]
	},
	{
		"id": "132",
		"hanzi": "利",
		"composition": "⿰",
		"components": ["禾", "刂"]
	},
	{
		"id": "133",
		"hanzi": "生",
		"composition": "⿻",
		"components": ["𠂉", "土"]
	},
	{
		"id": "134",
		"hanzi": "胜",
		"composition": "⿰",
		"components": ["月", "生"]
	},
	{
		"id": "135",
		"hanzi": "姓",
		"composition": "⿰",
		"components": ["女", "生"]
	},
	{
		"id": "136",
		"hanzi": "星",
		"composition": "⿱",
		"components": ["日", "生"]
	},
	{
		"id": "137",
		"hanzi": "先",
		"composition": "⿱",
		"components": ["⺧", "儿"]
	},
	{
		"id": "138",
		"hanzi": "告",
		"composition": "⿱",
		"components": ["⺧", "口"]
	},
	{
		"id": "139",
		"hanzi": "洗",
		"composition": "⿰",
		"components": ["氵", "先"]
	},
	{
		"id": "140",
		"hanzi": "可",
		"composition": "⿹",
		"components": ["丁", "口"]
	},
	{
		"id": "141",
		"hanzi": "河",
		"composition": "⿰",
		"components": ["氵", "可"]
	},
	{
		"id": "142",
		"hanzi": "何",
		"composition": "⿰",
		"components": ["亻", "可"]
	},
	{
		"id": "143",
		"hanzi": "啊",
		"composition": "⿰",
		"components": ["口", "阿"]
	},
	{
		"id": "143a",
		"hanzi": "阿",
		"composition": "⿰",
		"components": ["阝", "可"]
	},
	{
		"id": "144",
		"hanzi": "首",
		"composition": "⿱",
		"components": ["丷", "𦣻"]
	},
	{
		"id": "145",
		"hanzi": "道",
		"composition": "⿺",
		"components": ["辶", "首"]
	},
	{ "id": "146", "hanzi": "发", "composition": "⿺⿸⿻", "components": ["𠃋", "丿", "又", "丶"] },
	{
		"id": "147",
		"hanzi": "工",
		"composition": "⿱",
		"components": ["一", "丄"]
	},
	{
		"id": "148",
		"hanzi": "江",
		"composition": "⿰",
		"components": ["氵", "工"]
	},
	{
		"id": "149",
		"hanzi": "厂",
		"composition": "⿱",
		"components": ["一", "丿"]
	},
	{
		"id": "150",
		"hanzi": "后",
		"composition": "⿸",
		"components": ["𠂋", "口"]
	},
	{
		"id": "151",
		"hanzi": "而",
		"composition": "⿱",
		"components": ["一", "𦓐"]
	},
	{
		"id": "152",
		"hanzi": "找",
		"composition": "⿰",
		"components": ["扌", "戈"]
	},
	{
		"id": "152a",
		"hanzi": "扌",
		"composition": "⿻",
		"components": ["𬺰", "㇀"]
	},
	{
		"id": "153",
		"hanzi": "打",
		"composition": "⿰",
		"components": ["扌", "丁"]
	},
	{
		"id": "154",
		"hanzi": "对",
		"composition": "⿰",
		"components": ["又", "寸"]
	},
	{
		"id": "155",
		"hanzi": "树",
		"composition": "⿰",
		"components": ["木", "对"]
	},
	{
		"id": "156",
		"hanzi": "男",
		"composition": "⿱",
		"components": ["田", "力"]
	},
	{
		"id": "156a",
		"hanzi": "田",
		"composition": "⿴",
		"components": ["囗", "十"]
	},
	{
		"id": "157",
		"hanzi": "里",
		"composition": "⿱",
		"components": ["田", "土"]
	},
	{
		"id": "158",
		"hanzi": "理",
		"composition": "⿰",
		"components": ["王", "里"]
	},
	{
		"id": "159",
		"hanzi": "电",
		"composition": "⿻",
		"components": ["日", "乚"]
	},
	{
		"id": "160a",
		"hanzi": "冂",
		"composition": "⿰",
		"components": ["丨", "𠃌"]
	},
	{
		"id": "160",
		"hanzi": "同",
		"composition": "⿵",
		"components": ["冂", "𠮛"]
	},
	{ "id": "161", "hanzi": "心", "composition": "⿲⿺", "components": ["丿", "㇃", "丶"] },
	{
		"id": "162",
		"hanzi": "必",
		"composition": "⿻",
		"components": ["心", "丿"]
	},
	{
		"id": "163",
		"hanzi": "相",
		"composition": "⿰",
		"components": ["木", "目"]
	},
	{
		"id": "164",
		"hanzi": "想",
		"composition": "⿱",
		"components": ["相", "心"]
	},
	{
		"id": "165",
		"hanzi": "思",
		"composition": "⿱",
		"components": ["田", "心"]
	},
	{
		"id": "166",
		"hanzi": "今",
		"composition": "⿱",
		"components": ["亽", "㇇"]
	},
	{
		"id": "167",
		"hanzi": "念",
		"composition": "⿱",
		"components": ["今", "心"]
	},
	{
		"id": "168",
		"hanzi": "年",
		"composition": "⿱",
		"components": ["𠂉", "㐄"]
	},
	{
		"id": "169a",
		"hanzi": "殳",
		"composition": "⿱",
		"components": ["𠘧", "又"]
	},
	{
		"id": "169",
		"hanzi": "没",
		"composition": "⿰",
		"components": ["氵", "殳"]
	},
	{
		"id": "170",
		"hanzi": "广",
		"composition": "⿱",
		"components": ["丶", "厂"]
	},
	{
		"id": "171",
		"hanzi": "床",
		"composition": "⿸",
		"components": ["广", "木"]
	},
	{ "id": "172", "hanzi": "长", "composition": "⿺⿸⿻", "components": ["𠄌", "一", "㇏", "丿"] },
	{
		"id": "173",
		"hanzi": "张",
		"composition": "⿰",
		"components": ["弓", "长"]
	},
	{
		"id": "173a",
		"hanzi": "弓",
		"composition": "⿱",
		"components": ["コ", "㇉"]
	},
	{
		"id": "174",
		"hanzi": "本",
		"composition": "⿻",
		"components": ["木", "一"]
	},
	{
		"id": "175",
		"hanzi": "体",
		"composition": "⿰",
		"components": ["亻", "本"]
	},
	{ "id": "176", "hanzi": "书", "composition": null, "components": [] },
	{
		"id": "177",
		"hanzi": "立",
		"composition": "⿱",
		"components": ["亠", "䒑"]
	},
	{
		"id": "178",
		"hanzi": "位",
		"composition": "⿰",
		"components": ["亻", "立"]
	},
	{
		"id": "179",
		"hanzi": "拉",
		"composition": "⿰",
		"components": ["扌", "立"]
	},
	{
		"id": "180",
		"hanzi": "啦",
		"composition": "⿰",
		"components": ["口", "拉"]
	},
	{ "id": "181", "hanzi": "火", "composition": "⿻", "components": ["丷", "人"] },
	{
		"id": "182",
		"hanzi": "灯",
		"composition": "⿰",
		"components": ["火", "丁"]
	},
	{
		"id": "183",
		"hanzi": "占",
		"composition": "⿱",
		"components": ["⺊", "口"]
	},
	{
		"id": "184",
		"hanzi": "站",
		"composition": "⿰",
		"components": ["立", "占"]
	},
	{ "id": "185a", "hanzi": "灬", "composition": "⿰⿲", "components": ["丿", "丶"] },
	{
		"id": "185",
		"hanzi": "点",
		"composition": "⿱",
		"components": ["占", "灬"]
	},
	{
		"id": "186",
		"hanzi": "店",
		"composition": "⿸",
		"components": ["广", "占"]
	},
	{
		"id": "187",
		"hanzi": "果",
		"composition": "⿻",
		"components": ["日", "木"]
	},
	{
		"id": "188",
		"hanzi": "棵",
		"composition": "⿰",
		"components": ["木", "果"]
	},
	{
		"id": "189",
		"hanzi": "课",
		"composition": "⿰",
		"components": ["讠", "果"]
	},
	{
		"id": "190a",
		"hanzi": "攵",
		"composition": "⿱",
		"components": ["𠂉", "乂"]
	},
	{
		"id": "190",
		"hanzi": "政",
		"composition": "⿰",
		"components": ["正", "攵"]
	},
	{
		"id": "191",
		"hanzi": "故",
		"composition": "⿰",
		"components": ["古", "攵"]
	},
	{
		"id": "191a",
		"hanzi": "古",
		"composition": "⿱",
		"components": ["十", "口"]
	},
	{
		"id": "192",
		"hanzi": "姑",
		"composition": "⿰",
		"components": ["女", "古"]
	},
	{
		"id": "193",
		"hanzi": "湖",
		"composition": "⿰",
		"components": ["氵", "胡"]
	},
	{
		"id": "193a",
		"hanzi": "胡",
		"composition": "⿰",
		"components": ["古", "月"]
	},
	{
		"id": "194",
		"hanzi": "克",
		"composition": "⿱",
		"components": ["古", "儿"]
	},
	{
		"id": "195",
		"hanzi": "辛",
		"composition": "⿱",
		"components": ["立", "十"]
	},
	{
		"id": "197",
		"hanzi": "产",
		"composition": "⿳",
		"components": ["亠", "丷", "厂"]
	},
	{
		"id": "198",
		"hanzi": "卡",
		"composition": "⿱",
		"components": ["上", "卜"]
	},
	{
		"id": "199",
		"hanzi": "还",
		"composition": "⿺",
		"components": ["辶", "不"]
	},
	{
		"id": "200",
		"hanzi": "看",
		"composition": "⿸",
		"components": ["龵", "目"]
	},
	{
		"id": "201",
		"hanzi": "讨",
		"composition": "⿰",
		"components": ["讠", "寸"]
	},
	{
		"id": "202",
		"hanzi": "回",
		"composition": "⿴",
		"components": ["囗", "口"]
	},
	{
		"id": "203a",
		"hanzi": "妾",
		"composition": "⿱",
		"components": ["立", "女"]
	},
	{
		"id": "203",
		"hanzi": "接",
		"composition": "⿰",
		"components": ["扌", "妾"]
	},
	{ "id": "204", "hanzi": "差", "composition": "⿸", "components": ["⺶", "工"] },
	{
		"id": "205",
		"hanzi": "着",
		"composition": "⿸",
		"components": ["⺶", "目"]
	},
	{
		"id": "206a",
		"hanzi": "匕",
		"composition": "⿺",
		"components": ["乚", "丿"]
	},
	{ "id": "207a", "hanzi": "乍", "composition": "⿱⿰", "components": ["𠂉", "丨", "二"] },
	{
		"id": "207",
		"hanzi": "作",
		"composition": "⿰",
		"components": ["亻", "乍"]
	},
	{
		"id": "208",
		"hanzi": "昨",
		"composition": "⿰",
		"components": ["日", "乍"]
	},
	{
		"id": "209",
		"hanzi": "左",
		"composition": "⿸",
		"components": ["𠂇", "工"]
	},
	{
		"id": "210",
		"hanzi": "做",
		"composition": "⿰",
		"components": ["亻", "故"]
	},
	{
		"id": "211",
		"hanzi": "坐",
		"composition": "⿻",
		"components": ["土", "从"]
	},
	{
		"id": "212",
		"hanzi": "座",
		"composition": "⿸",
		"components": ["广", "坐"]
	},
	{
		"id": "213",
		"hanzi": "右",
		"composition": "⿸",
		"components": ["𠂇", "口"]
	},
	{
		"id": "214",
		"hanzi": "见",
		"composition": "⿱",
		"components": ["冂", "儿"]
	},
	{
		"id": "215",
		"hanzi": "现",
		"composition": "⿰",
		"components": ["王", "见"]
	},
	{
		"id": "216",
		"hanzi": "观",
		"composition": "⿰",
		"components": ["又", "见"]
	},
	{
		"id": "217",
		"hanzi": "再",
		"composition": "⿱",
		"components": ["一", "冉"]
	},
	{
		"id": "218",
		"hanzi": "苦",
		"composition": "⿱",
		"components": ["艹", "古"]
	},
	{
		"id": "218a",
		"hanzi": "艹",
		"composition": "⿻",
		"components": ["十", "丨"]
	},
	{
		"id": "219",
		"hanzi": "内",
		"composition": "⿻",
		"components": ["冂", "人"]
	},
	{
		"id": "219a",
		"hanzi": "入",
		"composition": "⿹",
		"components": ["乀", "丿"]
	},
	{
		"id": "220",
		"hanzi": "呐",
		"composition": "⿰",
		"components": ["口", "内"]
	},
	{ "id": "221", "hanzi": "肉", "composition": "⿻", "components": ["冂", "仌"] },
	{ "id": "222", "hanzi": "两", "composition": "⿱⿻", "components": ["一", "冂", "从"] },
	{
		"id": "223",
		"hanzi": "辆",
		"composition": "⿰",
		"components": ["车", "两"]
	},
	{
		"id": "224",
		"hanzi": "俩",
		"composition": "⿰",
		"components": ["亻", "两"]
	},
	{
		"id": "225",
		"hanzi": "满",
		"composition": "⿰",
		"components": ["氵", "𬜯"]
	},
	{
		"id": "226",
		"hanzi": "互",
		"composition": "⿱",
		"components": ["一", "彑"]
	},
	{
		"id": "227",
		"hanzi": "它",
		"composition": "⿱",
		"components": ["宀", "匕"]
	},
	{ "id": "228", "hanzi": "比", "composition": "⿰⿺", "components": ["𠄌", "一", "匕"] },
	{
		"id": "229",
		"hanzi": "批",
		"composition": "⿰",
		"components": ["扌", "比"]
	},
	{
		"id": "230",
		"hanzi": "切",
		"composition": "⿰",
		"components": ["七", "刀"]
	},
	{
		"id": "231",
		"hanzi": "词",
		"composition": "⿰",
		"components": ["讠", "司"]
	},
	{
		"id": "231b",
		"hanzi": "司",
		"composition": "⿹",
		"components": ["𠃌", "𠮛"]
	},
	{ "id": "232a", "hanzi": "曲", "composition": "⿻⿰", "components": ["曰", "丨"] },
	{ "id": "232", "hanzi": "典", "composition": null, "components": [] },
	{ "id": "233a", "hanzi": "纟", "composition": "⿳", "components": ["𠃋", "㇀"] },
	{
		"id": "233",
		"hanzi": "红",
		"composition": "⿰",
		"components": ["纟", "工"]
	},
	{
		"id": "234",
		"hanzi": "细",
		"composition": "⿰",
		"components": ["纟", "田"]
	},
	{
		"id": "235",
		"hanzi": "其",
		"composition": "⿴",
		"components": ["共", "𠄠"]
	},
	{
		"id": "236",
		"hanzi": "期",
		"composition": "⿰",
		"components": ["其", "月"]
	},
	{
		"id": "237",
		"hanzi": "基",
		"composition": "⿱",
		"components": ["其", "土"]
	},
	{
		"id": "238",
		"hanzi": "尤",
		"composition": "⿺",
		"components": ["尢", "丶"]
	},
	{
		"id": "238a",
		"hanzi": "犬",
		"composition": "⿺",
		"components": ["大", "丶"]
	},
	{
		"id": "239b",
		"hanzi": "京",
		"composition": "⿳",
		"components": ["亠", "口", "小"]
	},
	{
		"id": "239",
		"hanzi": "就",
		"composition": "⿰",
		"components": ["京", "尤"]
	},
	{
		"id": "240",
		"hanzi": "斤",
		"composition": "⿸",
		"components": ["𠂆", "丅"]
	},
	{
		"id": "241",
		"hanzi": "近",
		"composition": "⿺",
		"components": ["辶", "斤"]
	},
	{
		"id": "242",
		"hanzi": "听",
		"composition": "⿰",
		"components": ["口", "斤"]
	},
	{
		"id": "243",
		"hanzi": "新",
		"composition": "⿰",
		"components": ["亲", "斤"]
	},
	{
		"id": "244",
		"hanzi": "经",
		"composition": "⿰",
		"components": ["纟", "𢀖"]
	},
	{
		"id": "245",
		"hanzi": "轻",
		"composition": "⿰",
		"components": ["车", "𢀖"]
	},
	{
		"id": "246",
		"hanzi": "头",
		"composition": "⿻",
		"components": ["⺀", "大"]
	},
	{ "id": "247a", "hanzi": "乛", "composition": null, "components": [] },
	{
		"id": "247",
		"hanzi": "买",
		"composition": "⿱",
		"components": ["乛", "头"]
	},
	{
		"id": "248",
		"hanzi": "卖",
		"composition": "⿱",
		"components": ["十", "买"]
	},
	{
		"id": "249",
		"hanzi": "读",
		"composition": "⿰",
		"components": ["讠", "卖"]
	},
	{
		"id": "250",
		"hanzi": "实",
		"composition": "⿱",
		"components": ["宀", "头"]
	},
	{
		"id": "251",
		"hanzi": "指",
		"composition": "⿰",
		"components": ["扌", "旨"]
	},
	{
		"id": "252",
		"hanzi": "论",
		"composition": "⿰",
		"components": ["讠", "仑"]
	},
	{
		"id": "252a",
		"hanzi": "仑",
		"composition": "⿱",
		"components": ["人", "匕"]
	},
	{
		"id": "253",
		"hanzi": "认",
		"composition": "⿰",
		"components": ["讠", "人"]
	},
	{
		"id": "254",
		"hanzi": "只",
		"composition": "⿱",
		"components": ["口", "八"]
	},
	{
		"id": "255",
		"hanzi": "织",
		"composition": "⿰",
		"components": ["纟", "只"]
	},
	{
		"id": "256",
		"hanzi": "识",
		"composition": "⿰",
		"components": ["讠", "只"]
	},
	{
		"id": "257",
		"hanzi": "音",
		"composition": "⿱",
		"components": ["立", "日"]
	},
	{
		"id": "258",
		"hanzi": "意",
		"composition": "⿱",
		"components": ["音", "心"]
	},
	{
		"id": "259",
		"hanzi": "成",
		"composition": "⿵",
		"components": ["戊", "𠃌"]
	},
	{
		"id": "259a",
		"hanzi": "戊",
		"composition": "⿰",
		"components": ["丿", "戈"]
	},
	{
		"id": "260",
		"hanzi": "城",
		"composition": "⿰",
		"components": ["土", "成"]
	},
	{
		"id": "261",
		"hanzi": "者",
		"composition": "⿱",
		"components": ["耂", "日"]
	},
	{
		"id": "262",
		"hanzi": "都",
		"composition": "⿰",
		"components": ["者", "⻏"]
	},
	{ "id": "263a", "hanzi": "犭", "composition": "⿹⿻", "components": ["丿", "㇁", "丿"] },
	{
		"id": "263",
		"hanzi": "猪",
		"composition": "⿰",
		"components": ["犭", "者"]
	},
	{
		"id": "264",
		"hanzi": "老",
		"composition": "⿱",
		"components": ["耂", "匕"]
	},
	{
		"id": "265a",
		"hanzi": "孝",
		"composition": "⿱",
		"components": ["耂", "子"]
	},
	{
		"id": "265",
		"hanzi": "教",
		"composition": "⿰",
		"components": ["孝", "攵"]
	},
	{
		"id": "266",
		"hanzi": "然",
		"composition": "⿱",
		"components": ["肰", "灬"]
	},
	{
		"id": "267",
		"hanzi": "当",
		"composition": "⿱",
		"components": ["⺌", "彐"]
	},
	{
		"id": "268",
		"hanzi": "呢",
		"composition": "⿰",
		"components": ["口", "尼"]
	},
	{
		"id": "268b",
		"hanzi": "尼",
		"composition": "⿸",
		"components": ["尸", "匕"]
	},
	{
		"id": "268a",
		"hanzi": "尸",
		"composition": "⿰",
		"components": ["丿", "コ"]
	},
	{
		"id": "269",
		"hanzi": "户",
		"composition": "⿱",
		"components": ["丶", "尸"]
	},
	{ "id": "270", "hanzi": "所", "composition": "⿰", "components": ["戶", "斤"] },
	{
		"id": "271",
		"hanzi": "己",
		"composition": "⿳",
		"components": ["𠃍", "一", "乚"]
	},
	{
		"id": "272",
		"hanzi": "记",
		"composition": "⿰",
		"components": ["讠", "己"]
	},
	{
		"id": "273",
		"hanzi": "纪",
		"composition": "⿰",
		"components": ["纟", "己"]
	},
	{
		"id": "274",
		"hanzi": "已",
		"composition": "⿻",
		"components": ["コ", "乚"]
	},
	{
		"id": "275a",
		"hanzi": "巳",
		"composition": "⿺",
		"components": ["乚", "コ"]
	},
	{
		"id": "275",
		"hanzi": "走",
		"composition": "⿱",
		"components": ["土", "龰"]
	},
	{
		"id": "276",
		"hanzi": "起",
		"composition": "⿺",
		"components": ["走", "巳"]
	},
	{
		"id": "277",
		"hanzi": "导",
		"composition": "⿱",
		"components": ["巳", "寸"]
	},
	{
		"id": "278",
		"hanzi": "钟",
		"composition": "⿰",
		"components": ["钅", "中"]
	},
	{ "id": "278a", "hanzi": "钅", "composition": "⿱⿻", "components": ["𠂉", "二", "𠄌"] },
	{
		"id": "279",
		"hanzi": "种",
		"composition": "⿰",
		"components": ["禾", "中"]
	},
	{
		"id": "280",
		"hanzi": "足",
		"composition": "⿱",
		"components": ["口", "龰"]
	},
	{ "id": "281a", "hanzi": "艮", "composition": "⿸⿰⿺", "components": ["𠄌", "彐", "㇏", "丿"] },
	{
		"id": "281",
		"hanzi": "很",
		"composition": "⿰",
		"components": ["彳", "艮"]
	},
	{
		"id": "282",
		"hanzi": "根",
		"composition": "⿰",
		"components": ["木", "艮"]
	},
	{
		"id": "283",
		"hanzi": "跟",
		"composition": "⿰",
		"components": ["𧾷", "艮"]
	},
	{
		"id": "284",
		"hanzi": "眼",
		"composition": "⿰",
		"components": ["目", "艮"]
	},
	{
		"id": "285",
		"hanzi": "银",
		"composition": "⿰",
		"components": ["钅", "艮"]
	},
	{
		"id": "286",
		"hanzi": "娘",
		"composition": "⿰",
		"components": ["女", "良"]
	},
	{
		"id": "286a",
		"hanzi": "良",
		"composition": "⿱",
		"components": ["丶", "艮"]
	},
	{
		"id": "287",
		"hanzi": "食",
		"composition": "⿱",
		"components": ["人", "良"]
	},
	{
		"id": "288a",
		"hanzi": "饣",
		"composition": "⿱",
		"components": ["⺈", "𠄌"]
	},
	{
		"id": "288",
		"hanzi": "饿",
		"composition": "⿰",
		"components": ["饣", "我"]
	},
	{
		"id": "289",
		"hanzi": "问",
		"composition": "⿵",
		"components": ["门", "口"]
	},
	{
		"id": "290",
		"hanzi": "闻",
		"composition": "⿵",
		"components": ["门", "耳"]
	},
	{
		"id": "291",
		"hanzi": "方",
		"composition": "⿱",
		"components": ["丶", "万"]
	},
	{
		"id": "292",
		"hanzi": "访",
		"composition": "⿰",
		"components": ["讠", "方"]
	},
	{
		"id": "293",
		"hanzi": "房",
		"composition": "⿸",
		"components": ["戶", "方"]
	},
	{
		"id": "294",
		"hanzi": "放",
		"composition": "⿰",
		"components": ["方", "攵"]
	},
	{ "id": "295", "hanzi": "旁", "composition": "⿱⿳", "components": ["亠", "丷", "冖", "方"] },
	{
		"id": "296",
		"hanzi": "万",
		"composition": "⿸",
		"components": ["丆", "𠃌"]
	},
	{
		"id": "297",
		"hanzi": "主",
		"composition": "⿱",
		"components": ["丶", "王"]
	},
	{
		"id": "298",
		"hanzi": "住",
		"composition": "⿰",
		"components": ["亻", "主"]
	},
	{
		"id": "299",
		"hanzi": "注",
		"composition": "⿰",
		"components": ["氵", "主"]
	},
	{
		"id": "300",
		"hanzi": "往",
		"composition": "⿰",
		"components": ["彳", "主"]
	},
	{
		"id": "301a",
		"hanzi": "兀",
		"composition": "⿱",
		"components": ["一", "儿"]
	},
	{
		"id": "301",
		"hanzi": "元",
		"composition": "⿱",
		"components": ["一", "兀"]
	},
	{
		"id": "302",
		"hanzi": "园",
		"composition": "⿴",
		"components": ["囗", "元"]
	},
	{
		"id": "303",
		"hanzi": "远",
		"composition": "⿺",
		"components": ["辶", "元"]
	},
	{
		"id": "304",
		"hanzi": "玩",
		"composition": "⿰",
		"components": ["⺩", "元"]
	},
	{
		"id": "305",
		"hanzi": "完",
		"composition": "⿱",
		"components": ["宀", "元"]
	},
	{
		"id": "306",
		"hanzi": "院",
		"composition": "⿰",
		"components": ["阝", "完"]
	},
	{ "id": "307", "hanzi": "南", "composition": "⿱", "components": ["十", "⿵", "冂", "𢆉"] },
	{
		"id": "308",
		"hanzi": "幸",
		"composition": "⿱",
		"components": ["土", "𢆉"]
	},
	{
		"id": "309",
		"hanzi": "平",
		"composition": "⿻",
		"components": ["干", "丷"]
	},
	{
		"id": "310",
		"hanzi": "苹",
		"composition": "⿱",
		"components": ["艹", "平"]
	},
	{
		"id": "311",
		"hanzi": "评",
		"composition": "⿰",
		"components": ["讠", "平"]
	},
	{ "id": "312", "hanzi": "事", "composition": "⿻⿱", "components": ["𠮛", "⿻", "コ", "一", "亅"] },
	{
		"id": "313",
		"hanzi": "面",
		"composition": "⿱",
		"components": ["丆", "囬"]
	},
	{
		"id": "314a",
		"hanzi": "此",
		"composition": "⿰",
		"components": ["止", "匕"]
	},
	{
		"id": "314",
		"hanzi": "些",
		"composition": "⿱",
		"components": ["此", "二"]
	},
	{
		"id": "315",
		"hanzi": "倍",
		"composition": "⿰",
		"components": ["亻", "咅"]
	},
	{
		"id": "316",
		"hanzi": "部",
		"composition": "⿰",
		"components": ["咅", "⻏"]
	},
	{ "id": "317", "hanzi": "北", "composition": "⿲⿱", "components": ["一", "㇀", "丨", "匕"] },
	{
		"id": "317a",
		"hanzi": "丬",
		"composition": "⿰",
		"components": ["冫", "丨"]
	},
	{
		"id": "318",
		"hanzi": "将",
		"composition": "⿰",
		"components": ["丬", "𪧷"]
	},
	{ "id": "319", "hanzi": "东", "composition": "⿻⿻", "components": ["一", "𠃋", "小"] },
	{ "id": "320", "hanzi": "乐", "composition": "⿻⿱", "components": ["丿", "𠃋", "小"] },
	{
		"id": "321",
		"hanzi": "算",
		"composition": "⿱",
		"components": ["⺮", "𥃲"]
	},
	{
		"id": "322",
		"hanzi": "第",
		"composition": "⿱",
		"components": ["⺮", "𢎨"]
	},
	{
		"id": "323",
		"hanzi": "弟",
		"composition": "⿹",
		"components": ["弚", "丿"]
	},
	{
		"id": "324",
		"hanzi": "劳",
		"composition": "⿱",
		"components": ["𫇦", "力"]
	},
	{
		"id": "325",
		"hanzi": "加",
		"composition": "⿰",
		"components": ["力", "口"]
	},
	{
		"id": "326",
		"hanzi": "驾",
		"composition": "⿱",
		"components": ["加", "马"]
	},
	{
		"id": "327",
		"hanzi": "咖",
		"composition": "⿰",
		"components": ["口", "加"]
	},
	{ "id": "328", "hanzi": "非", "composition": "⿰⿰⿰", "components": ["三", "丨"] },
	{
		"id": "329",
		"hanzi": "啡",
		"composition": "⿰",
		"components": ["口", "非"]
	},
	{
		"id": "330",
		"hanzi": "排",
		"composition": "⿰",
		"components": ["扌", "非"]
	},
	{
		"id": "331",
		"hanzi": "反",
		"composition": "⿸",
		"components": ["⺁", "又"]
	},
	{
		"id": "332",
		"hanzi": "饭",
		"composition": "⿰",
		"components": ["饣", "反"]
	},
	{
		"id": "333",
		"hanzi": "板",
		"composition": "⿰",
		"components": ["木", "反"]
	},
	{
		"id": "334",
		"hanzi": "米",
		"composition": "⿻",
		"components": ["丷", "木"]
	},
	{
		"id": "335",
		"hanzi": "青",
		"composition": "⿱",
		"components": ["龶", "月"]
	},
	{
		"id": "336",
		"hanzi": "请",
		"composition": "⿰",
		"components": ["讠", "青"]
	},
	{
		"id": "337",
		"hanzi": "清",
		"composition": "⿰",
		"components": ["氵", "青"]
	},
	{
		"id": "338",
		"hanzi": "晴",
		"composition": "⿰",
		"components": ["日", "青"]
	},
	{
		"id": "339a",
		"hanzi": "忄",
		"composition": "⿰",
		"components": ["丿", "卜"]
	},
	{
		"id": "339",
		"hanzi": "情",
		"composition": "⿰",
		"components": ["忄", "青"]
	},
	{
		"id": "340",
		"hanzi": "睛",
		"composition": "⿰",
		"components": ["目", "青"]
	},
	{
		"id": "341",
		"hanzi": "精",
		"composition": "⿰",
		"components": ["米", "青"]
	},
	{
		"id": "342",
		"hanzi": "亮",
		"composition": "⿳",
		"components": ["亠", "口", "冗"]
	},
	{
		"id": "343",
		"hanzi": "停",
		"composition": "⿰",
		"components": ["亻", "亭"]
	},
	{ "id": "343a", "hanzi": "亭", "composition": "⿱⿳", "components": ["亠", "口", "冖", "丁"] },
	{ "id": "344", "hanzi": "单", "composition": "⿱⿻", "components": ["丷", "⿻", "日", "十"] },
	{
		"id": "345",
		"hanzi": "间",
		"composition": "⿵",
		"components": ["门", "日"]
	},
	{
		"id": "346",
		"hanzi": "简",
		"composition": "⿱",
		"components": ["⺮", "间"]
	},
	{
		"id": "347",
		"hanzi": "合",
		"composition": "⿱",
		"components": ["亼", "口"]
	},
	{
		"id": "348",
		"hanzi": "拿",
		"composition": "⿱",
		"components": ["合", "手"]
	},
	{
		"id": "349",
		"hanzi": "拾",
		"composition": "⿰",
		"components": ["扌", "合"]
	},
	{
		"id": "350",
		"hanzi": "哈",
		"composition": "⿰",
		"components": ["口", "合"]
	},
	{
		"id": "351",
		"hanzi": "给",
		"composition": "⿰",
		"components": ["纟", "合"]
	},
	{
		"id": "352",
		"hanzi": "答",
		"composition": "⿱",
		"components": ["⺮", "合"]
	},
	{ "id": "353", "hanzi": "片", "composition": "⿰⿱", "components": ["丿", "丄", "𠃍"] },
	{
		"id": "354",
		"hanzi": "叫",
		"composition": "⿰",
		"components": ["口", "丩"]
	},
	{
		"id": "355",
		"hanzi": "收",
		"composition": "⿰",
		"components": ["丩", "攵"]
	},
	{
		"id": "356",
		"hanzi": "啤",
		"composition": "⿰",
		"components": ["口", "卑"]
	},
	{ "id": "356a", "hanzi": "卑", "composition": "⿱⿻", "components": ["白", "丿", "十"] },
	{
		"id": "357a",
		"hanzi": "井",
		"composition": "⿻",
		"components": ["一", "廾"]
	},
	{
		"id": "357",
		"hanzi": "讲",
		"composition": "⿰",
		"components": ["讠", "井"]
	},
	{
		"id": "358",
		"hanzi": "进",
		"composition": "⿺",
		"components": ["辶", "井"]
	},
	{
		"id": "359",
		"hanzi": "改",
		"composition": "⿰",
		"components": ["己", "攵"]
	},
	{
		"id": "360a",
		"hanzi": "冫",
		"composition": "⿱",
		"components": ["丶", "㇀"]
	},
	{
		"id": "360",
		"hanzi": "况",
		"composition": "⿰",
		"components": ["冫", "兄"]
	},
	{
		"id": "361a",
		"hanzi": "欠",
		"composition": "⿱",
		"components": ["⺈", "人"]
	},
	{
		"id": "361",
		"hanzi": "次",
		"composition": "⿰",
		"components": ["冫", "欠"]
	},
	{
		"id": "362",
		"hanzi": "吹",
		"composition": "⿰",
		"components": ["口", "欠"]
	},
	{
		"id": "363",
		"hanzi": "欢",
		"composition": "⿰",
		"components": ["又", "欠"]
	},
	{
		"id": "364",
		"hanzi": "久",
		"composition": "⿸",
		"components": ["𠂊", "㇏"]
	},
	{ "id": "365a", "hanzi": "爪", "composition": "⿸⿰", "components": ["𠂆", "丨", "乀"] },
	{
		"id": "365",
		"hanzi": "爱",
		"composition": "⿳",
		"components": ["⺤", "冖", "友"]
	},
	{
		"id": "366",
		"hanzi": "暖",
		"composition": "⿰",
		"components": ["日", "爰"]
	},
	{
		"id": "367",
		"hanzi": "父",
		"composition": "⿱",
		"components": ["八", "乂"]
	},
	{
		"id": "368",
		"hanzi": "吧",
		"composition": "⿰",
		"components": ["口", "巴"]
	},
	{
		"id": "368a",
		"hanzi": "巴",
		"composition": "⿴",
		"components": ["巳", "丨"]
	},
	{
		"id": "369",
		"hanzi": "把",
		"composition": "⿰",
		"components": ["扌", "巴"]
	},
	{
		"id": "370",
		"hanzi": "爸",
		"composition": "⿱",
		"components": ["父", "巴"]
	},
	{
		"id": "371",
		"hanzi": "爬",
		"composition": "⿺",
		"components": ["爪", "巴"]
	},
	{
		"id": "372",
		"hanzi": "关",
		"composition": "⿱",
		"components": ["丷", "天"]
	},
	{
		"id": "373",
		"hanzi": "送",
		"composition": "⿺",
		"components": ["辶", "关"]
	},
	{
		"id": "374",
		"hanzi": "联",
		"composition": "⿰",
		"components": ["耳", "关"]
	},
	{
		"id": "375",
		"hanzi": "言",
		"composition": "⿳",
		"components": ["亠", "𠄠", "口"]
	},
	{
		"id": "376",
		"hanzi": "信",
		"composition": "⿰",
		"components": ["亻", "言"]
	},
	{
		"id": "377",
		"hanzi": "少",
		"composition": "⿱",
		"components": ["𡭔", "丿"]
	},
	{
		"id": "378",
		"hanzi": "步",
		"composition": "⿱",
		"components": ["止", "𣥂"]
	},
	{
		"id": "379",
		"hanzi": "省",
		"composition": "⿱",
		"components": ["少", "目"]
	},
	{
		"id": "380",
		"hanzi": "交",
		"composition": "⿱",
		"components": ["亠", "父"]
	},
	{
		"id": "381",
		"hanzi": "饺",
		"composition": "⿰",
		"components": ["饣", "交"]
	},
	{
		"id": "382",
		"hanzi": "较",
		"composition": "⿰",
		"components": ["车", "交"]
	},
	{
		"id": "383",
		"hanzi": "校",
		"composition": "⿰",
		"components": ["木", "交"]
	},
	{
		"id": "384",
		"hanzi": "牛",
		"composition": "⿻",
		"components": ["𠂉", "十"]
	},
	{
		"id": "385",
		"hanzi": "件",
		"composition": "⿰",
		"components": ["亻", "牛"]
	},
	{ "id": "386", "hanzi": "哥", "composition": "⿱", "components": ["可"] },
	{
		"id": "387",
		"hanzi": "歌",
		"composition": "⿰",
		"components": ["哥", "欠"]
	},
	{ "id": "388", "hanzi": "应", "composition": "⿸⿱", "components": ["广", "𭕄", "一"] },
	{
		"id": "389",
		"hanzi": "向",
		"composition": "⿱",
		"components": ["丿", "冋"]
	},
	{
		"id": "390",
		"hanzi": "响",
		"composition": "⿰",
		"components": ["口", "向"]
	},
	{
		"id": "391",
		"hanzi": "化",
		"composition": "⿰",
		"components": ["亻", "𠤎"]
	},
	{
		"id": "392",
		"hanzi": "花",
		"composition": "⿱",
		"components": ["艹", "化"]
	},
	{
		"id": "393",
		"hanzi": "历",
		"composition": "⿸",
		"components": ["厂", "力"]
	},
	{
		"id": "394",
		"hanzi": "旧",
		"composition": "⿰",
		"components": ["丨", "日"]
	},
	{ "id": "395", "hanzi": "业", "composition": "⿶⿰", "components": ["䒑", "丨"] },
	{
		"id": "396a",
		"hanzi": "亚",
		"composition": "⿱",
		"components": ["一", "业"]
	},
	{
		"id": "396",
		"hanzi": "碰",
		"composition": "⿰",
		"components": ["石", "並"]
	},
	{
		"id": "396b",
		"hanzi": "並",
		"composition": "⿱",
		"components": ["䒑", "业"]
	},
	{
		"id": "397",
		"hanzi": "史",
		"composition": "⿻",
		"components": ["口", "乂"]
	},
	{
		"id": "398a",
		"hanzi": "吏",
		"composition": "⿻",
		"components": ["一", "史"]
	},
	{
		"id": "398",
		"hanzi": "使",
		"composition": "⿰",
		"components": ["亻", "吏"]
	},
	{ "id": "399", "hanzi": "更", "composition": "⿱⿻", "components": ["一", "日", "乂"] },
	{
		"id": "400",
		"hanzi": "便",
		"composition": "⿰",
		"components": ["亻", "更"]
	},
	{
		"id": "401a",
		"hanzi": "央",
		"composition": "⿻",
		"components": ["冂", "大"]
	},
	{
		"id": "401",
		"hanzi": "英",
		"composition": "⿱",
		"components": ["艹", "央"]
	},
	{
		"id": "402a",
		"hanzi": "夬",
		"composition": "⿻",
		"components": ["𠃍", "大"]
	},
	{
		"id": "402",
		"hanzi": "块",
		"composition": "⿰",
		"components": ["土", "夬"]
	},
	{
		"id": "403",
		"hanzi": "快",
		"composition": "⿰",
		"components": ["忄", "夬"]
	},
	{
		"id": "404",
		"hanzi": "决",
		"composition": "⿰",
		"components": ["冫", "夬"]
	},
	{
		"id": "406",
		"hanzi": "定",
		"composition": "⿱",
		"components": ["宀", "𤴓"]
	},
	{
		"id": "407",
		"hanzi": "重",
		"composition": "⿱",
		"components": ["千", "里"]
	},
	{
		"id": "408",
		"hanzi": "懂",
		"composition": "⿰",
		"components": ["忄", "董"]
	},
	{
		"id": "408a",
		"hanzi": "董",
		"composition": "⿱",
		"components": ["艹", "重"]
	},
	{ "id": "409a", "hanzi": "垂", "composition": null, "components": [] },
	{ "id": "409", "hanzi": "睡", "composition": "⿰", "components": ["目", "垂"] },
	{ "id": "410", "hanzi": "飞", "composition": "⿺⿱", "components": ["⺄", "丿", "丶"] },
	{
		"id": "411",
		"hanzi": "气",
		"composition": "⿳",
		"components": ["𠂉", "一", "⺄"]
	},
	{
		"id": "412",
		"hanzi": "汽",
		"composition": "⿰",
		"components": ["氵", "气"]
	},
	{ "id": "413a", "hanzi": "乙", "composition": null, "components": [] },
	{
		"id": "413",
		"hanzi": "亿",
		"composition": "⿰",
		"components": ["亻", "乙"]
	},
	{
		"id": "414",
		"hanzi": "艺",
		"composition": "⿱",
		"components": ["艹", "乙"]
	},
	{
		"id": "415",
		"hanzi": "吃",
		"composition": "⿰",
		"components": ["口", "乞"]
	},
	{
		"id": "415a",
		"hanzi": "乞",
		"composition": "⿱",
		"components": ["𠂉", "乙"]
	},
	{
		"id": "416",
		"hanzi": "全",
		"composition": "⿱",
		"components": ["人", "王"]
	},
	{
		"id": "417",
		"hanzi": "色",
		"composition": "⿱",
		"components": ["⺈", "巴"]
	},
	{ "id": "418", "hanzi": "角", "composition": "⿱", "components": ["⺈", "用"] },
	{
		"id": "419",
		"hanzi": "确",
		"composition": "⿰",
		"components": ["石", "角"]
	},
	{
		"id": "420",
		"hanzi": "嘴",
		"composition": "⿰",
		"components": ["口", "觜"]
	},
	{
		"id": "421",
		"hanzi": "最",
		"composition": "⿱",
		"components": ["⺜", "取"]
	},
	{
		"id": "422",
		"hanzi": "谈",
		"composition": "⿰",
		"components": ["讠", "炎"]
	},
	{ "id": "422a", "hanzi": "炎", "composition": "⿱", "components": ["火"] },
	{ "id": "423a", "hanzi": "与", "composition": "⿹⿺", "components": ["㇉", "一", "一"] },
	{
		"id": "423",
		"hanzi": "写",
		"composition": "⿱",
		"components": ["冖", "与"]
	},
	{
		"id": "424",
		"hanzi": "号",
		"composition": "⿱",
		"components": ["口", "丂"]
	},
	{
		"id": "424a",
		"hanzi": "丂",
		"composition": "⿱",
		"components": ["一", "㇉"]
	},
	{
		"id": "425a",
		"hanzi": "廿",
		"composition": "⿵",
		"components": ["卄", "一"]
	},
	{ "id": "425", "hanzi": "度", "composition": "⿸⿱", "components": ["广", "廿", "又"] },
	{
		"id": "426",
		"hanzi": "态",
		"composition": "⿱",
		"components": ["太", "心"]
	},
	{
		"id": "427a",
		"hanzi": "巾",
		"composition": "⿻",
		"components": ["冂", "丨"]
	},
	{
		"id": "427",
		"hanzi": "市",
		"composition": "⿱",
		"components": ["丶", "帀"]
	},
	{ "id": "428", "hanzi": "师", "composition": "⿰", "components": ["リ", "帀"] },
	{
		"id": "428a",
		"hanzi": "帀",
		"composition": "⿱",
		"components": ["一", "巾"]
	},
	{
		"id": "429",
		"hanzi": "带",
		"composition": "⿳",
		"components": ["卅", "冖", "巾"]
	},
	{
		"id": "430",
		"hanzi": "示",
		"composition": "⿱",
		"components": ["二", "小"]
	},
	{
		"id": "431",
		"hanzi": "票",
		"composition": "⿱",
		"components": ["覀", "示"]
	},
	{
		"id": "432",
		"hanzi": "漂",
		"composition": "⿰",
		"components": ["氵", "票"]
	},
	{
		"id": "433",
		"hanzi": "社",
		"composition": "⿰",
		"components": ["礻", "土"]
	},
	{ "id": "433a", "hanzi": "礻", "composition": null, "components": [] },
	{
		"id": "434",
		"hanzi": "祝",
		"composition": "⿰",
		"components": ["礻", "兄"]
	},
	{
		"id": "435",
		"hanzi": "视",
		"composition": "⿰",
		"components": ["礻", "见"]
	},
	{
		"id": "436",
		"hanzi": "表",
		"composition": "⿱",
		"components": ["龶", "𧘇"]
	},
	{
		"id": "437",
		"hanzi": "衣",
		"composition": "⿱",
		"components": ["亠", "𧘇"]
	},
	{
		"id": "438",
		"hanzi": "农",
		"composition": "⿻",
		"components": ["冖", "𧘇"]
	},
	{
		"id": "439",
		"hanzi": "初",
		"composition": "⿰",
		"components": ["衤", "刀"]
	},
	{ "id": "439a", "hanzi": "衤", "composition": null, "components": [] },
	{ "id": "440a", "hanzi": "皮", "composition": "⿻", "components": ["丿乛", "又"] },
	{
		"id": "440",
		"hanzi": "被",
		"composition": "⿰",
		"components": ["衤", "皮"]
	},
	{
		"id": "441",
		"hanzi": "破",
		"composition": "⿰",
		"components": ["石", "皮"]
	},
	{
		"id": "442",
		"hanzi": "坏",
		"composition": "⿰",
		"components": ["土", "不"]
	},
	{
		"id": "443",
		"hanzi": "且",
		"composition": "⿴",
		"components": ["𠀃", "𠄠"]
	},
	{
		"id": "444",
		"hanzi": "姐",
		"composition": "⿰",
		"components": ["女", "且"]
	},
	{
		"id": "445",
		"hanzi": "助",
		"composition": "⿰",
		"components": ["且", "力"]
	},
	{
		"id": "446",
		"hanzi": "租",
		"composition": "⿰",
		"components": ["禾", "且"]
	},
	{
		"id": "447",
		"hanzi": "祖",
		"composition": "⿰",
		"components": ["礻", "且"]
	},
	{
		"id": "448",
		"hanzi": "组",
		"composition": "⿰",
		"components": ["纟", "且"]
	},
	{
		"id": "449",
		"hanzi": "宜",
		"composition": "⿱",
		"components": ["宀", "且"]
	},
	{
		"id": "450",
		"hanzi": "谊",
		"composition": "⿰",
		"components": ["讠", "宜"]
	},
	{ "id": "451", "hanzi": "直", "composition": "⿱⿺", "components": ["十", "目", "𠃊"] },
	{
		"id": "452",
		"hanzi": "真",
		"composition": "⿱",
		"components": ["十", "具"]
	},
	{ "id": "453", "hanzi": "毛", "composition": null, "components": [] },
	{
		"id": "454",
		"hanzi": "笔",
		"composition": "⿱",
		"components": ["⺮", "毛"]
	},
	{ "id": "455", "hanzi": "民", "composition": "⿸⿰", "components": ["𠄌", "コ"," 𫠠"] },
	{
		"id": "456",
		"hanzi": "代",
		"composition": "⿰",
		"components": ["亻", "弋"]
	},
	{
		"id": "456a",
		"hanzi": "弋",
		"composition": "⿺",
		"components": ["𫠠", "丶"]
	},
	{
		"id": "457",
		"hanzi": "刮",
		"composition": "⿰",
		"components": ["舌", "刂"]
	},
	{
		"id": "457a",
		"hanzi": "舌",
		"composition": "⿱",
		"components": ["千", "口"]
	},
	{
		"id": "458",
		"hanzi": "话",
		"composition": "⿰",
		"components": ["讠", "舌"]
	},
	{
		"id": "459",
		"hanzi": "适",
		"composition": "⿺",
		"components": ["辶", "舌"]
	},
	{
		"id": "460",
		"hanzi": "活",
		"composition": "⿰",
		"components": ["氵", "舌"]
	},
	{
		"id": "461",
		"hanzi": "术",
		"composition": "⿺",
		"components": ["木", "丶"]
	},
	{
		"id": "462",
		"hanzi": "支",
		"composition": "⿱",
		"components": ["十", "又"]
	},
	{
		"id": "463",
		"hanzi": "技",
		"composition": "⿰",
		"components": ["扌", "支"]
	},
	{
		"id": "464",
		"hanzi": "等",
		"composition": "⿱",
		"components": ["⺮", "寺"]
	},
	{
		"id": "464a",
		"hanzi": "寺",
		"composition": "⿱",
		"components": ["土", "寸"]
	},
	{
		"id": "465",
		"hanzi": "持",
		"composition": "⿰",
		"components": ["扌", "寺"]
	},
	{
		"id": "466",
		"hanzi": "特",
		"composition": "⿰",
		"components": ["牛", "寺"]
	},
	{
		"id": "467",
		"hanzi": "义",
		"composition": "⿶",
		"components": ["乂", "丶"]
	},
	{
		"id": "468",
		"hanzi": "风",
		"composition": "⿵",
		"components": ["𠘨", "㐅"]
	},
	{
		"id": "469",
		"hanzi": "数",
		"composition": "⿰",
		"components": ["娄", "攵"]
	},
	{
		"id": "470",
		"hanzi": "楼",
		"composition": "⿰",
		"components": ["木", "娄"]
	},
	{
		"id": "471",
		"hanzi": "层",
		"composition": "⿸",
		"components": ["尸", "云"]
	},
	{
		"id": "472",
		"hanzi": "室",
		"composition": "⿱",
		"components": ["宀", "至"]
	},
	{
		"id": "473",
		"hanzi": "屋",
		"composition": "⿸",
		"components": ["尸", "至"]
	},
	{
		"id": "474",
		"hanzi": "握",
		"composition": "⿰",
		"components": ["扌", "屋"]
	},
	{
		"id": "475",
		"hanzi": "提",
		"composition": "⿰",
		"components": ["扌", "是"]
	},
	{
		"id": "476",
		"hanzi": "让",
		"composition": "⿰",
		"components": ["讠", "上"]
	},
	{
		"id": "477a",
		"hanzi": "贝",
		"composition": "⿱",
		"components": ["冂", "人"]
	},
	{
		"id": "477",
		"hanzi": "页",
		"composition": "⿱",
		"components": ["丆", "贝"]
	},
	{
		"id": "478",
		"hanzi": "题",
		"composition": "⿺",
		"components": ["是", "页"]
	},
	{
		"id": "479",
		"hanzi": "员",
		"composition": "⿱",
		"components": ["口", "贝"]
	},
	{
		"id": "480",
		"hanzi": "圆",
		"composition": "⿴",
		"components": ["囗", "员"]
	},
	{
		"id": "481",
		"hanzi": "高",
		"composition": "⿳",
		"components": ["亠", "口", "冋"]
	},
	{
		"id": "482",
		"hanzi": "搞",
		"composition": "⿰",
		"components": ["扌", "高"]
	},
	{
		"id": "483a",
		"hanzi": "台",
		"composition": "⿱",
		"components": ["厶", "口"]
	},
	{
		"id": "483",
		"hanzi": "治",
		"composition": "⿰",
		"components": ["氵", "台"]
	},
	{
		"id": "484",
		"hanzi": "抬",
		"composition": "⿰",
		"components": ["扌", "台"]
	},
	{
		"id": "485",
		"hanzi": "始",
		"composition": "⿰",
		"components": ["女", "台"]
	},
	{
		"id": "486",
		"hanzi": "容",
		"composition": "⿱",
		"components": ["宀", "谷"]
	},
	{
		"id": "486a",
		"hanzi": "谷",
		"composition": "⿳",
		"components": ["八", "人", "口"]
	},
	{
		"id": "487a",
		"hanzi": "士",
		"composition": "⿱",
		"components": ["十", "一"]
	},
	{
		"id": "487",
		"hanzi": "志",
		"composition": "⿱",
		"components": ["士", "心"]
	},
	{
		"id": "488",
		"hanzi": "声",
		"composition": "⿱",
		"components": ["士", "𠃜"]
	},
	{
		"id": "489",
		"hanzi": "装",
		"composition": "⿱",
		"components": ["壮", "衣"]
	},
	{
		"id": "489a",
		"hanzi": "壮",
		"composition": "⿰",
		"components": ["丬", "士"]
	},
	{
		"id": "490a",
		"hanzi": "矢",
		"composition": "⿱",
		"components": ["𠂉", "大"]
	},
	{
		"id": "490",
		"hanzi": "知",
		"composition": "⿰",
		"components": ["矢", "口"]
	},
	{
		"id": "491a",
		"hanzi": "匚",
		"composition": "⿱",
		"components": ["一", "𠃊"]
	},
	{
		"id": "491",
		"hanzi": "医",
		"composition": "⿷",
		"components": ["匚", "矢"]
	},
	{
		"id": "492",
		"hanzi": "贵",
		"composition": "⿱",
		"components": ["𠀐", "贝"]
	},
	{
		"id": "493",
		"hanzi": "您",
		"composition": "⿱",
		"components": ["你", "心"]
	},
	{
		"id": "494",
		"hanzi": "束",
		"composition": "⿻",
		"components": ["木", "口"]
	},
	{
		"id": "495",
		"hanzi": "整",
		"composition": "⿱",
		"components": ["敕", "正"]
	},
	{
		"id": "496",
		"hanzi": "嗽",
		"composition": "⿰",
		"components": ["口", "欶"]
	},
	{
		"id": "497",
		"hanzi": "该",
		"composition": "⿰",
		"components": ["讠", "亥"]
	},
	{ "id": "497a", "hanzi": "亥", "composition": "⿳⿸", "components": ["亠", "𠃋", "丿", "人"] },
	{
		"id": "498",
		"hanzi": "孩",
		"composition": "⿰",
		"components": ["子", "亥"]
	},
	{
		"id": "499",
		"hanzi": "咳",
		"composition": "⿰",
		"components": ["口", "亥"]
	},
	{
		"id": "500",
		"hanzi": "刻",
		"composition": "⿰",
		"components": ["亥", "刂"]
	},
	{ "id": "501a", "hanzi": "隹", "composition": "⿰⿻", "components": ["亻", "主", "一"] },
	{
		"id": "501",
		"hanzi": "谁",
		"composition": "⿰",
		"components": ["讠", "隹"]
	},
	{
		"id": "502",
		"hanzi": "推",
		"composition": "⿰",
		"components": ["扌", "隹"]
	},
	{
		"id": "503",
		"hanzi": "难",
		"composition": "⿰",
		"components": ["又", "隹"]
	},
	{
		"id": "504",
		"hanzi": "准",
		"composition": "⿰",
		"components": ["冫", "隹"]
	},
	{
		"id": "505",
		"hanzi": "集",
		"composition": "⿱",
		"components": ["隹", "木"]
	},
	{
		"id": "506a",
		"hanzi": "夂",
		"composition": "⿻",
		"components": ["𠂊", "㇏"]
	},
	{
		"id": "506",
		"hanzi": "处",
		"composition": "⿺",
		"components": ["夂", "卜"]
	},
	{
		"id": "507",
		"hanzi": "各",
		"composition": "⿱",
		"components": ["夂", "口"]
	},
	{
		"id": "508",
		"hanzi": "路",
		"composition": "⿰",
		"components": ["𧾷", "各"]
	},
	{
		"id": "509",
		"hanzi": "客",
		"composition": "⿱",
		"components": ["宀", "各"]
	},
	{
		"id": "510b",
		"hanzi": "疒",
		"composition": "⿰",
		"components": ["冫", "广"]
	},
	{
		"id": "510",
		"hanzi": "病",
		"composition": "⿸",
		"components": ["疒", "丙"]
	},
	{
		"id": "510a",
		"hanzi": "丙",
		"composition": "⿱",
		"components": ["一", "内"]
	},
	{
		"id": "511",
		"hanzi": "杂",
		"composition": "⿱",
		"components": ["九", "朩"]
	},
	{
		"id": "512",
		"hanzi": "怎",
		"composition": "⿱",
		"components": ["乍", "心"]
	},
	{
		"id": "513",
		"hanzi": "脏",
		"composition": "⿰",
		"components": ["⺼", "庄"]
	},
	{
		"id": "513a",
		"hanzi": "庄",
		"composition": "⿸",
		"components": ["广", "土"]
	},
	{
		"id": "514",
		"hanzi": "总",
		"composition": "⿳",
		"components": ["丷", "口", "心"]
	},
	{
		"id": "515",
		"hanzi": "责",
		"composition": "⿱",
		"components": ["龶", "贝"]
	},
	{
		"id": "516",
		"hanzi": "绩",
		"composition": "⿰",
		"components": ["纟", "责"]
	},
	{
		"id": "517",
		"hanzi": "负",
		"composition": "⿱",
		"components": ["⺈", "贝"]
	},
	{
		"id": "518",
		"hanzi": "才",
		"composition": "⿹",
		"components": ["𬺰", "丿"]
	},
	{
		"id": "519",
		"hanzi": "团",
		"composition": "⿴",
		"components": ["囗", "才"]
	},
	{
		"id": "520",
		"hanzi": "因",
		"composition": "⿴",
		"components": ["囗", "大"]
	},
	{
		"id": "521",
		"hanzi": "嗯",
		"composition": "⿰",
		"components": ["口", "恩"]
	},
	{
		"id": "521a",
		"hanzi": "恩",
		"composition": "⿱",
		"components": ["因", "心"]
	},
	{
		"id": "522",
		"hanzi": "困",
		"composition": "⿴",
		"components": ["囗", "木"]
	},
	{ "id": "523", "hanzi": "水", "composition": "⿰", "components": ["㇇", "𰛅"] },
	{ "id": "524", "hanzi": "求", "composition": "⿺⿻", "components": ["一", "氺", "丶"] },
	{
		"id": "525",
		"hanzi": "球",
		"composition": "⿰",
		"components": ["⺩", "求"]
	},
	{
		"id": "526",
		"hanzi": "忽",
		"composition": "⿱",
		"components": ["勿", "心"]
	},
	{ "id": "526a", "hanzi": "勿", "composition": "⿹⿰", "components": ["勹", "丿"] },
	{
		"id": "527",
		"hanzi": "物",
		"composition": "⿰",
		"components": ["牜", "勿"]
	},
	{
		"id": "528",
		"hanzi": "易",
		"composition": "⿱",
		"components": ["日", "勿"]
	},
	{
		"id": "529",
		"hanzi": "踢",
		"composition": "⿰",
		"components": ["⻊", "易"]
	},
	{
		"id": "530",
		"hanzi": "场",
		"composition": "⿰",
		"components": ["土", "𠃓"]
	},
	{
		"id": "531",
		"hanzi": "汤",
		"composition": "⿰",
		"components": ["氵", "𠃓"]
	},
	{
		"id": "532",
		"hanzi": "扬",
		"composition": "⿰",
		"components": ["扌", "𠃓"]
	},
	{
		"id": "533a",
		"hanzi": "乃",
		"composition": "⿹",
		"components": ["㇡", "丿"]
	},
	{
		"id": "533",
		"hanzi": "奶",
		"composition": "⿰",
		"components": ["女", "乃"]
	},
	{
		"id": "534",
		"hanzi": "极",
		"composition": "⿰",
		"components": ["木", "及"]
	},
	{ "id": "534a", "hanzi": "及", "composition": "⿻⿹", "components": ["𠄎", "丿", "乀"] },
	{
		"id": "535",
		"hanzi": "级",
		"composition": "⿰",
		"components": ["纟", "及"]
	},
	{ "id": "536", "hanzi": "原", "composition": "⿸⿱", "components": ["厂", "白", "小"] },
	{
		"id": "537",
		"hanzi": "愿",
		"composition": "⿸",
		"components": ["原", "心"]
	},
	{
		"id": "538",
		"hanzi": "结",
		"composition": "⿰",
		"components": ["纟", "吉"]
	},
	{
		"id": "538a",
		"hanzi": "吉",
		"composition": "⿱",
		"components": ["士", "口"]
	},
	{
		"id": "539",
		"hanzi": "喜",
		"composition": "⿱",
		"components": ["壴", "口"]
	},
	{
		"id": "540",
		"hanzi": "周",
		"composition": "⿵",
		"components": ["⺆", "𠮷"]
	},
	{
		"id": "541",
		"hanzi": "调",
		"composition": "⿰",
		"components": ["讠", "周"]
	},
	{
		"id": "542",
		"hanzi": "躺",
		"composition": "⿰",
		"components": ["身", "尚"]
	},
	{
		"id": "542a",
		"hanzi": "尚",
		"composition": "⿱",
		"components": ["⺌", "冋"]
	},
	{
		"id": "543",
		"hanzi": "堂",
		"composition": "⿱",
		"components": ["𫩠", "土"]
	},
	{
		"id": "544",
		"hanzi": "常",
		"composition": "⿱",
		"components": ["𫩠", "巾"]
	},
	{
		"id": "545",
		"hanzi": "掌",
		"composition": "⿱",
		"components": ["𫩠", "手"]
	},
	{
		"id": "546",
		"hanzi": "条",
		"composition": "⿱",
		"components": ["夂", "朩"]
	},
	{
		"id": "547",
		"hanzi": "务",
		"composition": "⿱",
		"components": ["夂", "力"]
	},
	{
		"id": "548",
		"hanzi": "备",
		"composition": "⿱",
		"components": ["夂", "田"]
	},
	{
		"id": "549",
		"hanzi": "鱼",
		"composition": "⿳",
		"components": ["⺈", "田", "一"]
	},
	{
		"id": "550",
		"hanzi": "复",
		"composition": "⿱",
		"components": ["𭥍", "夂"]
	},
	{
		"id": "551a",
		"hanzi": "壬",
		"composition": "⿱",
		"components": ["丿", "士", "("]
	},
	{
		"id": "551",
		"hanzi": "任",
		"composition": "⿰",
		"components": ["亻", "壬"]
	},
	{
		"id": "552",
		"hanzi": "计",
		"composition": "⿰",
		"components": ["讠", "十"]
	},
	{
		"id": "553",
		"hanzi": "设",
		"composition": "⿰",
		"components": ["讠", "殳"]
	},
	{
		"id": "554",
		"hanzi": "划",
		"composition": "⿰",
		"components": ["戈", "刂"]
	},
	{ "id": "555", "hanzi": "或", "composition": "⿹⿱", "components": ["戈", "口", "㇀"] },
	{
		"id": "556a",
		"hanzi": "咸",
		"composition": "⿵",
		"components": ["戌", "口"]
	},
	{
		"id": "556",
		"hanzi": "感",
		"composition": "⿱",
		"components": ["咸", "心"]
	},
	{
		"id": "557",
		"hanzi": "喊",
		"composition": "⿰",
		"components": ["口", "咸"]
	},
	{
		"id": "558",
		"hanzi": "布",
		"composition": "⿸",
		"components": ["𠂇", "巾"]
	},
	{
		"id": "559",
		"hanzi": "希",
		"composition": "⿱",
		"components": ["㐅", "布"]
	},
	{
		"id": "560a",
		"hanzi": "卩",
		"composition": "⿰",
		"components": ["丨", "𠃌"]
	},
	{
		"id": "560",
		"hanzi": "节",
		"composition": "⿱",
		"components": ["艹", "𰆊"]
	},
	{
		"id": "561a",
		"hanzi": "却",
		"composition": "⿰",
		"components": ["去", "卩"]
	},
	{
		"id": "561",
		"hanzi": "脚",
		"composition": "⿰",
		"components": ["月", "却"]
	},
	{
		"id": "562",
		"hanzi": "报",
		"composition": "⿰",
		"components": ["扌", "𠬝"]
	},
	{
		"id": "563",
		"hanzi": "服",
		"composition": "⿰",
		"components": ["月", "𠬝"]
	},
	{
		"id": "564a",
		"hanzi": "甬",
		"composition": "⿱",
		"components": ["龴", "用"]
	},
	{
		"id": "564",
		"hanzi": "通",
		"composition": "⿰",
		"components": ["辶", "甬"]
	},
	{
		"id": "565",
		"hanzi": "痛",
		"composition": "⿸",
		"components": ["疒", "甬"]
	},
	{
		"id": "566",
		"hanzi": "危",
		"composition": "⿸",
		"components": ["厃", "㔾"]
	},
	{
		"id": "566b",
		"hanzi": "厄",
		"composition": "⿸",
		"components": ["厂", "㔾"]
	},
	{
		"id": "567",
		"hanzi": "顾",
		"composition": "⿰",
		"components": ["厄", "页"]
	},
	{
		"id": "568",
		"hanzi": "忙",
		"composition": "⿰",
		"components": ["忄", "亡"]
	},
	{
		"id": "568b",
		"hanzi": "亡",
		"composition": "⿱",
		"components": ["亠", "𠃊"]
	},
	{
		"id": "569",
		"hanzi": "忘",
		"composition": "⿱",
		"components": ["亡", "心"]
	},
	{ "id": "570", "hanzi": "望", "composition": "⿱⿰", "components": ["亡", "月", "王"] },
	{ "id": "571", "hanzi": "雨", "composition": "⿻⿰", "components": ["帀", "⺀"] },
	{
		"id": "572",
		"hanzi": "雪",
		"composition": "⿱",
		"components": ["雨", "彐"]
	},
	{ "id": "573", "hanzi": "参", "composition": "⿱⿱", "components": ["厶", "大", "彡"] },
	{ "id": "573a", "hanzi": "彡", "composition": "⿳", "components": ["丿"] },
	{
		"id": "574",
		"hanzi": "影",
		"composition": "⿰",
		"components": ["景", "彡"]
	},
	{
		"id": "574a",
		"hanzi": "景",
		"composition": "⿱",
		"components": ["日", "京"]
	},
	{
		"id": "575a",
		"hanzi": "匃",
		"composition": "⿹",
		"components": ["勹", "亾"]
	},
	{
		"id": "575b",
		"hanzi": "曷",
		"composition": "⿱",
		"components": ["曰", "匃"]
	},
	{
		"id": "575",
		"hanzi": "喝",
		"composition": "⿰",
		"components": ["口", "曷"]
	},
	{
		"id": "576",
		"hanzi": "渴",
		"composition": "⿰",
		"components": ["氵", "曷"]
	},
	{ "id": "577", "hanzi": "继", "composition": "⿰⿺", "components": ["纟", "𠃊", "米"] },
	{
		"id": "578",
		"hanzi": "世",
		"composition": "⿻",
		"components": ["廿", "𠃊"]
	},
	{ "id": "579", "hanzi": "介", "composition": "⿱⿰", "components": ["人", "丿", "丨"] },
	{
		"id": "580",
		"hanzi": "界",
		"composition": "⿱",
		"components": ["田", "介"]
	},
	{
		"id": "581",
		"hanzi": "变",
		"composition": "⿱",
		"components": ["𰁜", "又"]
	},
	{ "id": "581a", "hanzi": "亦", "composition": "⿵", "components": ["六", "刂"] },
	{
		"id": "582",
		"hanzi": "笑",
		"composition": "⿱",
		"components": ["⺮", "夭"]
	},
	{
		"id": "582a",
		"hanzi": "夭",
		"composition": "⿱",
		"components": ["丿", "大"]
	},
	{ "id": "583a", "hanzi": "乔", "composition": "⿱⿰", "components": ["夭", "丿", "丨"] },
	{
		"id": "583",
		"hanzi": "桥",
		"composition": "⿰",
		"components": ["木", "乔"]
	},
	{
		"id": "584",
		"hanzi": "例",
		"composition": "⿰",
		"components": ["亻", "列"]
	},
	{
		"id": "584a",
		"hanzi": "歹",
		"composition": "⿱",
		"components": ["一", "夕"]
	},
	{
		"id": "584b",
		"hanzi": "列",
		"composition": "⿰",
		"components": ["歹", "刂"]
	},
	{
		"id": "585",
		"hanzi": "死",
		"composition": "⿸",
		"components": ["歹", "匕"]
	},
	{
		"id": "586",
		"hanzi": "解",
		"composition": "⿰",
		"components": ["角", "𭷔"]
	},
	{
		"id": "587",
		"hanzi": "急",
		"composition": "⿱",
		"components": ["刍", "心"]
	},
	{
		"id": "588",
		"hanzi": "颜",
		"composition": "⿰",
		"components": ["彦", "页"]
	},
	{
		"id": "588a",
		"hanzi": "彦",
		"composition": "⿸",
		"components": ["产", "彡"]
	},
	{
		"id": "589",
		"hanzi": "许",
		"composition": "⿰",
		"components": ["讠", "午"]
	},
	{
		"id": "590",
		"hanzi": "需",
		"composition": "⿱",
		"components": ["⻗", "而"]
	},
	{
		"id": "591",
		"hanzi": "须",
		"composition": "⿰",
		"components": ["彡", "页"]
	},
	{
		"id": "592",
		"hanzi": "续",
		"composition": "⿰",
		"components": ["纟", "卖"]
	},
	{
		"id": "593a",
		"hanzi": "令",
		"composition": "⿱",
		"components": ["亽", "龴"]
	},
	{
		"id": "593",
		"hanzi": "冷",
		"composition": "⿰",
		"components": ["冫", "令"]
	},
	{
		"id": "594",
		"hanzi": "零",
		"composition": "⿱",
		"components": ["⻗", "令"]
	},
	{
		"id": "595",
		"hanzi": "领",
		"composition": "⿰",
		"components": ["令", "页"]
	},
	{
		"id": "596a",
		"hanzi": "召",
		"composition": "⿱",
		"components": ["刀", "口"]
	},
	{
		"id": "596",
		"hanzi": "绍",
		"composition": "⿰",
		"components": ["纟", "召"]
	},
	{
		"id": "597",
		"hanzi": "照",
		"composition": "⿱",
		"components": ["昭", "灬"]
	},
	{
		"id": "597a",
		"hanzi": "昭",
		"composition": "⿰",
		"components": ["日", "召"]
	},
	{
		"id": "598",
		"hanzi": "查",
		"composition": "⿱",
		"components": ["木", "旦"]
	},
	{
		"id": "600",
		"hanzi": "脸",
		"composition": "⿰",
		"components": ["⺼", "佥"]
	},
	{
		"id": "601",
		"hanzi": "险",
		"composition": "⿰",
		"components": ["阝", "佥"]
	},
	{
		"id": "602",
		"hanzi": "验",
		"composition": "⿰",
		"components": ["马", "佥"]
	},
	{
		"id": "603",
		"hanzi": "试",
		"composition": "⿰",
		"components": ["讠", "式"]
	},
	{
		"id": "603a",
		"hanzi": "式",
		"composition": "⿹",
		"components": ["弋", "工"]
	},
	{
		"id": "604",
		"hanzi": "考",
		"composition": "⿱",
		"components": ["耂", "丂"]
	},
	{
		"id": "605",
		"hanzi": "科",
		"composition": "⿰",
		"components": ["禾", "斗"]
	},
	{ "id": "605a", "hanzi": "斗", "composition": "⿻⿻", "components": ["㇀", "丨", "⺀"] },
	{
		"id": "606",
		"hanzi": "研",
		"composition": "⿰",
		"components": ["石", "开"]
	},
	{
		"id": "607",
		"hanzi": "系",
		"composition": "⿱",
		"components": ["丿", "糸"]
	},
	{
		"id": "607a",
		"hanzi": "幺",
		"composition": "⿱",
		"components": ["𠃋", "厶"]
	},
	{
		"id": "607b",
		"hanzi": "糸",
		"composition": "⿱",
		"components": ["幺", "小"]
	},
	{
		"id": "608",
		"hanzi": "累",
		"composition": "⿱",
		"components": ["田", "糸"]
	},
	{
		"id": "609",
		"hanzi": "践",
		"composition": "⿰",
		"components": ["足", "戋"]
	},
	{
		"id": "609a",
		"hanzi": "戋",
		"composition": "⿻",
		"components": ["戈", "一"]
	},
	{
		"id": "610",
		"hanzi": "钱",
		"composition": "⿰",
		"components": ["钅", "戋"]
	},
	{
		"id": "611",
		"hanzi": "浅",
		"composition": "⿰",
		"components": ["氵", "戋"]
	},
	{
		"id": "612",
		"hanzi": "礼",
		"composition": "⿰",
		"components": ["礻", "乚"]
	},
	{
		"id": "613",
		"hanzi": "乱",
		"composition": "⿰",
		"components": ["舌", "乚"]
	},
	{
		"id": "614",
		"hanzi": "育",
		"composition": "⿳",
		"components": ["亠", "厶", "⺝"]
	},
	{
		"id": "615",
		"hanzi": "流",
		"composition": "⿰",
		"components": ["氵", "㐬"]
	},
	{
		"id": "616",
		"hanzi": "究",
		"composition": "⿱",
		"components": ["穴", "九"]
	},
	{
		"id": "616a",
		"hanzi": "穴",
		"composition": "⿱",
		"components": ["宀", "八"]
	},
	{
		"id": "617",
		"hanzi": "空",
		"composition": "⿱",
		"components": ["穴", "工"]
	},
	{
		"id": "618",
		"hanzi": "突",
		"composition": "⿱",
		"components": ["穴", "犬"]
	},
	{
		"id": "619",
		"hanzi": "深",
		"composition": "⿰",
		"components": ["氵", "罙"]
	},
	{
		"id": "620a",
		"hanzi": "由",
		"composition": "⿻",
		"components": ["日", "丨"]
	},
	{
		"id": "620",
		"hanzi": "抽",
		"composition": "⿰",
		"components": ["扌", "由"]
	},
	{
		"id": "621",
		"hanzi": "邮",
		"composition": "⿰",
		"components": ["由", "阝"]
	},
	{
		"id": "622",
		"hanzi": "神",
		"composition": "⿰",
		"components": ["礻", "申"]
	},
	{
		"id": "622a",
		"hanzi": "申",
		"composition": "⿻",
		"components": ["日", "丨"]
	},
	{
		"id": "623",
		"hanzi": "演",
		"composition": "⿰",
		"components": ["氵", "寅"]
	},
	{
		"id": "624",
		"hanzi": "黄",
		"composition": "⿳",
		"components": ["龷", "由", "八"]
	},
	{
		"id": "625",
		"hanzi": "共",
		"composition": "⿱",
		"components": ["龷", "八"]
	},
	{
		"id": "626",
		"hanzi": "画",
		"composition": "⿱",
		"components": ["一", "𰢵", "("]
	},
	{
		"id": "626a",
		"hanzi": "凵",
		"composition": "⿰",
		"components": ["𠃊", "丨"]
	},
	{
		"id": "627",
		"hanzi": "怕",
		"composition": "⿰",
		"components": ["忄", "白"]
	},
	{
		"id": "628",
		"hanzi": "拍",
		"composition": "⿰",
		"components": ["扌", "白"]
	},
	{
		"id": "629",
		"hanzi": "哭",
		"composition": "⿱",
		"components": ["吅", "犬"]
	},
	{
		"id": "630",
		"hanzi": "器",
		"composition": "⿱",
		"components": ["哭", "吅"]
	},
	{
		"id": "631a",
		"hanzi": "品",
		"composition": "⿱",
		"components": ["口", "吅"]
	},
	{
		"id": "631",
		"hanzi": "操",
		"composition": "⿰",
		"components": ["扌", "喿"]
	},
	{
		"id": "632",
		"hanzi": "澡",
		"composition": "⿰",
		"components": ["氵", "喿"]
	},
	{
		"id": "633",
		"hanzi": "早",
		"composition": "⿱",
		"components": ["日", "十"]
	},
	{
		"id": "634",
		"hanzi": "章",
		"composition": "⿱",
		"components": ["立", "早"]
	},
	{
		"id": "635",
		"hanzi": "草",
		"composition": "⿱",
		"components": ["艹", "早"]
	},
	{
		"id": "636",
		"hanzi": "包",
		"composition": "⿻",
		"components": ["勹", "巳"]
	},
	{
		"id": "637",
		"hanzi": "饱",
		"composition": "⿰",
		"components": ["饣", "包"]
	},
	{
		"id": "638",
		"hanzi": "抱",
		"composition": "⿰",
		"components": ["扌", "包"]
	},
	{
		"id": "639",
		"hanzi": "跑",
		"composition": "⿰",
		"components": ["𧾷", "包"]
	},
	{
		"id": "640",
		"hanzi": "商",
		"composition": "⿳",
		"components": ["亠", "丷", "冏"]
	},
	{
		"id": "641a",
		"hanzi": "佰",
		"composition": "⿰",
		"components": ["亻", "百"]
	},
	{
		"id": "641",
		"hanzi": "宿",
		"composition": "⿱",
		"components": ["宀", "佰"]
	},
	{
		"id": "642",
		"hanzi": "预",
		"composition": "⿰",
		"components": ["予", "页"]
	},
	{
		"id": "642a",
		"hanzi": "予",
		"composition": "⿱",
		"components": ["龴", "𠄐"]
	},
	{
		"id": "643",
		"hanzi": "舍",
		"composition": "⿳",
		"components": ["𠆢", "一", "古"]
	},
	{
		"id": "644",
		"hanzi": "舒",
		"composition": "⿰",
		"components": ["舍", "予"]
	},
	{
		"id": "645",
		"hanzi": "兴",
		"composition": "⿳",
		"components": ["𭕄", "一", "八"]
	},
	{
		"id": "646",
		"hanzi": "橘",
		"composition": "⿰",
		"components": ["木", "矞"]
	},
	{
		"id": "646a",
		"hanzi": "矛",
		"composition": "⿹",
		"components": ["予", "丿"]
	},
	{
		"id": "647",
		"hanzi": "桔",
		"composition": "⿰",
		"components": ["木", "吉"]
	},
	{
		"id": "648",
		"hanzi": "举",
		"composition": "⿱",
		"components": ["兴", "𰀁"]
	},
	{
		"id": "649",
		"hanzi": "句",
		"composition": "⿹",
		"components": ["勹", "口"]
	},
	{ "id": "650", "hanzi": "局", "composition": "⿸⿹", "components": ["尸", "𠃌","口"] },
	{
		"id": "651",
		"hanzi": "够",
		"composition": "⿰",
		"components": ["句", "多"]
	},
	{
		"id": "652a",
		"hanzi": "付",
		"composition": "⿰",
		"components": ["亻", "寸"]
	},
	{
		"id": "652",
		"hanzi": "附",
		"composition": "⿰",
		"components": ["阝", "付"]
	},
	{
		"id": "653",
		"hanzi": "府",
		"composition": "⿸",
		"components": ["广", "付"]
	},
	{
		"id": "654",
		"hanzi": "离",
		"composition": "⿱",
		"components": ["㐫", "禸"]
	},
	{
		"id": "654a",
		"hanzi": "凶",
		"composition": "⿶",
		"components": ["凵", "㐅"]
	},
	{
		"id": "655a",
		"hanzi": "禺",
		"composition": "⿻",
		"components": ["日", "禸"]
	},
	{
		"id": "655",
		"hanzi": "遇",
		"composition": "⿺",
		"components": ["辶", "禺"]
	},
	{
		"id": "656",
		"hanzi": "脱",
		"composition": "⿰",
		"components": ["月", "兑"]
	},
	{
		"id": "657b",
		"hanzi": "廴",
		"composition": "⿻",
		"components": ["㇋", "乀"]
	},
	{
		"id": "657a",
		"hanzi": "聿",
		"composition": "⿻",
		"components": ["肀", "二"]
	},
	{
		"id": "657",
		"hanzi": "建",
		"composition": "⿺",
		"components": ["廴", "聿"]
	},
	{
		"id": "658",
		"hanzi": "健",
		"composition": "⿰",
		"components": ["亻", "建"]
	},
	{
		"id": "659",
		"hanzi": "庭",
		"composition": "⿸",
		"components": ["广", "廷"]
	},
	{
		"id": "659a",
		"hanzi": "廷",
		"composition": "⿺",
		"components": ["廴", "𡈼"]
	},
	{
		"id": "660",
		"hanzi": "挺",
		"composition": "⿰",
		"components": ["扌", "廷"]
	},
	{
		"id": "661a",
		"hanzi": "肖",
		"composition": "⿱",
		"components": ["⺌", "月"]
	},
	{
		"id": "661",
		"hanzi": "消",
		"composition": "⿰",
		"components": ["氵", "肖"]
	},
	{
		"id": "662",
		"hanzi": "息",
		"composition": "⿱",
		"components": ["自", "心"]
	},
	{ "id": "663", "hanzi": "留", "composition": "⿱⿰", "components": ["𠂎", "刀", "田"] },
	{
		"id": "664",
		"hanzi": "派",
		"composition": "⿰",
		"components": ["氵", "𠂢"]
	},
	{ "id": "665", "hanzi": "展", "composition": "⿸⿱⿰⿺", "components": ["尸", "龷", "𠄌", "乀", "丿"] },
	{
		"id": "666a",
		"hanzi": "畏",
		"composition": "⿳",
		"components": ["田", "一"]
	},
	{
		"id": "666",
		"hanzi": "喂",
		"composition": "⿰",
		"components": ["口", "畏"]
	},
	{ "id": "667", "hanzi": "候", "composition": "⿰⿰⿱⿱", "components": ["亻", "丨", "𠃍", "一", "矢"] },
	{ "id": "668", "hanzi": "齐", "composition": "⿱⿰", "components": ["文", "丿", "丨"] },
	{
		"id": "669",
		"hanzi": "挤",
		"composition": "⿰",
		"components": ["扌", "齐"]
	},
	{
		"id": "670",
		"hanzi": "济",
		"composition": "⿰",
		"components": ["氵", "齐"]
	},
	{ "id": "671", "hanzi": "黑", "composition": null, "components": [] },
	{
		"id": "672a",
		"hanzi": "曾",
		"composition": "⿱",
		"components": ["丷", "𭥴"]
	},
	{
		"id": "672",
		"hanzi": "增",
		"composition": "⿰",
		"components": ["土", "曾"]
	},
	{ "id": "673a", "hanzi": "免", "composition": "⿳", "components": ["⺈", "口", "儿"] },
	{
		"id": "673",
		"hanzi": "晚",
		"composition": "⿰",
		"components": ["日", "免"]
	},
	{ "id": "674a", "hanzi": "象", "composition": "⿳", "components": ["⺈", "𫩏", "𧰨"] },
	{
		"id": "674",
		"hanzi": "像",
		"composition": "⿰",
		"components": ["亻", "象"]
	},
	{
		"id": "675",
		"hanzi": "换",
		"composition": "⿰",
		"components": ["扌", "奂"]
	},
	{
		"id": "676a",
		"hanzi": "冈",
		"composition": "⿴",
		"components": ["冂", "㐅"]
	},
	{
		"id": "676",
		"hanzi": "刚",
		"composition": "⿰",
		"components": ["冈", "刂"]
	},
	{
		"id": "677",
		"hanzi": "钢",
		"composition": "⿰",
		"components": ["钅", "冈"]
	},
	{
		"id": "678a",
		"hanzi": "鸟",
		"composition": "⿴",
		"components": ["乌", "丶"]
	},
	{
		"id": "678",
		"hanzi": "鸡",
		"composition": "⿰",
		"components": ["又", "鸟"]
	},
	{
		"id": "679",
		"hanzi": "虽",
		"composition": "⿱",
		"components": ["口", "虫"]
	},
	{ "id": "679a", "hanzi": "虫", "composition": "⿱⿰", "components": ["中", "㇀", "丶"] },
	{
		"id": "680",
		"hanzi": "般",
		"composition": "⿰",
		"components": ["舟", "殳"]
	},
	{ "id": "680a", "hanzi": "舟", "composition": "⿱⿻⿵", "components": ["丿", "⺆", "⺀", "一"] },
	{
		"id": "681",
		"hanzi": "搬",
		"composition": "⿰",
		"components": ["扌", "般"]
	},
	{
		"id": "682",
		"hanzi": "迎",
		"composition": "⿺",
		"components": ["辶", "卬"]
	},
	{
		"id": "683",
		"hanzi": "纸",
		"composition": "⿰",
		"components": ["纟", "氏"]
	},
	{ "id": "683a", "hanzi": "氏", "composition": "⿸⿱", "components": ["丿", "𠄌", "𫠠"] },
	{
		"id": "684a",
		"hanzi": "氐",
		"composition": "⿱",
		"components": ["氏", "丶"]
	},
	{
		"id": "684",
		"hanzi": "低",
		"composition": "⿰",
		"components": ["亻", "氐"]
	},
	{ "id": "685", "hanzi": "永", "composition": "⿱⿲⿺", "components": ["丶", "㇇", "𠃌", "㇏", "丿"] },
	{
		"id": "686",
		"hanzi": "泳",
		"composition": "⿰",
		"components": ["氵", "永"]
	},
	{
		"id": "687",
		"hanzi": "族",
		"composition": "⿸",
		"components": ["𭤨", "矢"]
	},
	{
		"id": "688",
		"hanzi": "游",
		"composition": "⿰",
		"components": ["氵", "斿"]
	},
	{
		"id": "689",
		"hanzi": "冬",
		"composition": "⿱",
		"components": ["夂", "⺀"]
	},
	{
		"id": "690",
		"hanzi": "疼",
		"composition": "⿸",
		"components": ["疒", "冬"]
	},
	{
		"id": "691",
		"hanzi": "图",
		"composition": "⿴",
		"components": ["囗", "冬"]
	},
	{
		"id": "692",
		"hanzi": "春",
		"composition": "⿱",
		"components": ["𡗗", "日"]
	},
	{
		"id": "693",
		"hanzi": "秋",
		"composition": "⿰",
		"components": ["禾", "火"]
	},
	{
		"id": "694",
		"hanzi": "夏",
		"composition": "⿱",
		"components": ["𦣻", "夂"]
	},
	{
		"id": "695",
		"hanzi": "热",
		"composition": "⿱",
		"components": ["执", "灬"]
	},
	{
		"id": "695b",
		"hanzi": "丸",
		"composition": "⿻",
		"components": ["九", "丶"]
	},
	{
		"id": "695c",
		"hanzi": "执",
		"composition": "⿰",
		"components": ["扌", "丸"]
	},
	{
		"id": "696",
		"hanzi": "熟",
		"composition": "⿱",
		"components": ["孰", "灬"]
	},
	{
		"id": "696a",
		"hanzi": "享",
		"composition": "⿳",
		"components": ["亠", "口", "子"]
	},
	{
		"id": "697",
		"hanzi": "坚",
		"composition": "⿱",
		"components": ["𰀡", "土"]
	},
	{
		"id": "698",
		"hanzi": "紧",
		"composition": "⿱",
		"components": ["𰀡", "糸"]
	},
	{
		"id": "699",
		"hanzi": "览",
		"composition": "⿱",
		"components": ["𰀢", "见"]
	},
	{
		"id": "700",
		"hanzi": "蓝",
		"composition": "⿱",
		"components": ["艹", "监"]
	},
	{ "id": "700a", "hanzi": "皿", "composition": "⿱", "components": ["𦉫", "一"] },
	{
		"id": "700b",
		"hanzi": "监",
		"composition": "⿱",
		"components": ["𰀢", "皿"]
	},
	{
		"id": "701",
		"hanzi": "篮",
		"composition": "⿱",
		"components": ["𥫗", "监"]
	},
	{
		"id": "702",
		"hanzi": "福",
		"composition": "⿰",
		"components": ["礻", "畐"]
	},
	{
		"id": "703",
		"hanzi": "富",
		"composition": "⿱",
		"components": ["宀", "畐"]
	},
	{
		"id": "704",
		"hanzi": "丰",
		"composition": "⿻",
		"components": ["三", "丨"]
	},
	{
		"id": "705a",
		"hanzi": "邦",
		"composition": "⿰",
		"components": ["丰", "⻏"]
	},
	{
		"id": "705",
		"hanzi": "帮",
		"composition": "⿱",
		"components": ["邦", "巾"]
	},
	{ "id": "706a", "hanzi": "韦", "composition": "⿻⿱", "components": ["二", "𠃌", "丨"] },
	{
		"id": "706",
		"hanzi": "围",
		"composition": "⿴",
		"components": ["囗", "韦"]
	},
	{
		"id": "707",
		"hanzi": "伟",
		"composition": "⿰",
		"components": ["亻", "韦"]
	},
	{
		"id": "708",
		"hanzi": "挂",
		"composition": "⿰",
		"components": ["扌", "圭"]
	},
	{ "id": "708a", "hanzi": "圭", "composition": "⿱", "components": ["土"] },
	{
		"id": "709",
		"hanzi": "封",
		"composition": "⿰",
		"components": ["圭", "寸"]
	},
	{
		"id": "710",
		"hanzi": "街",
		"composition": "⿲",
		"components": ["彳", "圭", "亍"]
	},
	{ "id": "711a", "hanzi": "革", "composition": null, "components": [] },
	{
		"id": "711",
		"hanzi": "鞋",
		"composition": "⿰",
		"components": ["革", "圭"]
	},
	{ "id": "712", "hanzi": "双", "composition": "⿰", "components": ["又"] },
	{
		"id": "713",
		"hanzi": "炼",
		"composition": "⿰",
		"components": ["火", "𫠣"]
	},
	{
		"id": "714",
		"hanzi": "练",
		"composition": "⿰",
		"components": ["纟", "𫠣"]
	},
	{ "id": "715", "hanzi": "段", "composition": "⿰⿰", "components": ["丨", "亖", "殳"] },
	{
		"id": "716",
		"hanzi": "锻",
		"composition": "⿰",
		"components": ["钅", "段"]
	},
	{
		"id": "717",
		"hanzi": "顿",
		"composition": "⿰",
		"components": ["屯", "页"]
	},
	{
		"id": "717a",
		"hanzi": "屯",
		"composition": "⿻",
		"components": ["一", "𡳾"]
	},
	{
		"id": "718",
		"hanzi": "烦",
		"composition": "⿰",
		"components": ["火", "页"]
	},
	{
		"id": "719",
		"hanzi": "诉",
		"composition": "⿰",
		"components": ["讠", "斥"]
	},
	{
		"id": "719a",
		"hanzi": "斥",
		"composition": "⿸",
		"components": ["斤", "丶"]
	},
	{
		"id": "720",
		"hanzi": "药",
		"composition": "⿱",
		"components": ["艹", "约"]
	},
	{
		"id": "720a",
		"hanzi": "约",
		"composition": "⿰",
		"components": ["纟", "勺"]
	},
	{ "id": "721a", "hanzi": "争", "composition": "⿱⿻", "components": ["⺈", "彐", "亅"] },
	{
		"id": "721",
		"hanzi": "净",
		"composition": "⿰",
		"components": ["冫", "争"]
	},
	{
		"id": "722",
		"hanzi": "静",
		"composition": "⿰",
		"components": ["青", "争"]
	},
	{
		"id": "723",
		"hanzi": "朝",
		"composition": "⿰",
		"components": ["龺", "月"]
	},
	{
		"id": "724",
		"hanzi": "掉",
		"composition": "⿰",
		"components": ["扌", "卓"]
	},
	{
		"id": "724a",
		"hanzi": "卓",
		"composition": "⿱",
		"components": ["⺊", "早"]
	},
	{
		"id": "725",
		"hanzi": "桌",
		"composition": "⿱",
		"components": ["⺊", "杲"]
	},
	{ "id": "726", "hanzi": "敢", "composition": "⿰⿱", "components": ["乛", "耳", "攵"] },
	{
		"id": "727",
		"hanzi": "休",
		"composition": "⿰",
		"components": ["亻", "木"]
	},
	{
		"id": "728",
		"hanzi": "退",
		"composition": "⿺",
		"components": ["辶", "艮"]
	},
	{
		"id": "729",
		"hanzi": "腿",
		"composition": "⿰",
		"components": ["⺼", "退"]
	},
	{
		"id": "730",
		"hanzi": "短",
		"composition": "⿰",
		"components": ["矢", "豆"]
	},
	{
		"id": "730a",
		"hanzi": "豆",
		"composition": "⿱",
		"components": ["𠮛", "䒑"]
	},
	{
		"id": "731a",
		"hanzi": "吴",
		"composition": "⿱",
		"components": ["口", "天"]
	},
	{
		"id": "732a",
		"hanzi": "采",
		"composition": "⿱",
		"components": ["爫", "木"]
	},
	{
		"id": "732",
		"hanzi": "彩",
		"composition": "⿰",
		"components": ["采", "彡"]
	},
	{
		"id": "733",
		"hanzi": "菜",
		"composition": "⿱",
		"components": ["艹", "采"]
	},
	{
		"id": "734b",
		"hanzi": "番",
		"composition": "⿱",
		"components": ["釆", "田"]
	},
	{
		"id": "734a",
		"hanzi": "釆",
		"composition": "⿱",
		"components": ["丿", "米"]
	},
	{
		"id": "734",
		"hanzi": "播",
		"composition": "⿰",
		"components": ["扌", "番"]
	},
	{
		"id": "735",
		"hanzi": "习",
		"composition": "⿹",
		"components": ["𠃌", "冫"]
	},
	{
		"id": "736",
		"hanzi": "翻",
		"composition": "⿰",
		"components": ["番", "羽"]
	},
	{ "id": "736a", "hanzi": "羽", "composition": "⿰", "components": ["习"] },
	{
		"id": "737",
		"hanzi": "译",
		"composition": "⿰",
		"components": ["讠", "𠬤"]
	},
	{
		"id": "738",
		"hanzi": "除",
		"composition": "⿰",
		"components": ["⻖", "余"]
	},
	{
		"id": "738a",
		"hanzi": "余",
		"composition": "⿱",
		"components": ["亼", "朩"]
	},
	{
		"id": "739",
		"hanzi": "茶",
		"composition": "⿳",
		"components": ["艹", "𠆢", "朩"]
	},
	{
		"id": "740",
		"hanzi": "骑",
		"composition": "⿰",
		"components": ["马", "奇"]
	},
	{
		"id": "740a",
		"hanzi": "奇",
		"composition": "⿱",
		"components": ["大", "可"]
	},
	{
		"id": "741",
		"hanzi": "椅",
		"composition": "⿰",
		"components": ["木", "奇"]
	},
	{
		"id": "742",
		"hanzi": "寄",
		"composition": "⿱",
		"components": ["宀", "奇"]
	},
	{
		"id": "743a",
		"hanzi": "昔",
		"composition": "⿱",
		"components": ["龷", "日"]
	},
	{
		"id": "743",
		"hanzi": "错",
		"composition": "⿰",
		"components": ["钅", "昔"]
	},
	{
		"id": "744",
		"hanzi": "借",
		"composition": "⿰",
		"components": ["亻", "昔"]
	},
	{ "id": "745", "hanzi": "散", "composition": "⿰⿱", "components": ["龷", "月", "攵"] },
	{
		"id": "746",
		"hanzi": "船",
		"composition": "⿰",
		"components": ["舟", "㕣"]
	},
	{
		"id": "747",
		"hanzi": "铅",
		"composition": "⿰",
		"components": ["钅", "㕣"]
	},
	{
		"id": "748",
		"hanzi": "蛋",
		"composition": "⿱",
		"components": ["疋", "虫"]
	},
	{
		"id": "748a",
		"hanzi": "疋",
		"composition": "⿱",
		"components": ["乛", "龰"]
	},
	{ "id": "749a", "hanzi": "林", "composition": "⿰", "components": ["木"] },
	{
		"id": "749",
		"hanzi": "楚",
		"composition": "⿱",
		"components": ["林", "疋"]
	},
	{
		"id": "750",
		"hanzi": "麻",
		"composition": "⿸",
		"components": ["广", "林"]
	},
	{
		"id": "751",
		"hanzi": "嘛",
		"composition": "⿰",
		"components": ["口", "麻"]
	},
	{
		"id": "752a",
		"hanzi": "隶",
		"composition": "⿻",
		"components": ["⺕", "氺"]
	},
	{
		"id": "752",
		"hanzi": "康",
		"composition": "⿸",
		"components": ["广", "隶"]
	},
	{
		"id": "753",
		"hanzi": "录",
		"composition": "⿱",
		"components": ["彐", "氺"]
	},
	{
		"id": "754",
		"hanzi": "绿",
		"composition": "⿰",
		"components": ["纟", "录"]
	},
	{ "id": "755", "hanzi": "旅", "composition": "⿸", "components": ["𭤨"] },
	{
		"id": "756a",
		"hanzi": "俞",
		"composition": "⿱",
		"components": ["亼", "刖"]
	},
	{
		"id": "756",
		"hanzi": "愉",
		"composition": "⿰",
		"components": ["忄", "俞"]
	},
	{
		"id": "757",
		"hanzi": "输",
		"composition": "⿰",
		"components": ["车", "俞"]
	},
	{
		"id": "758",
		"hanzi": "凉",
		"composition": "⿰",
		"components": ["冫", "京"]
	},
	{
		"id": "759",
		"hanzi": "谅",
		"composition": "⿰",
		"components": ["讠", "京"]
	},
	{
		"id": "760",
		"hanzi": "碗",
		"composition": "⿰",
		"components": ["石", "宛"]
	},
	{
		"id": "760b",
		"hanzi": "宛",
		"composition": "⿱",
		"components": ["宀", "夗"]
	},
	{
		"id": "761",
		"hanzi": "香",
		"composition": "⿱",
		"components": ["禾", "日"]
	},
	{
		"id": "762",
		"hanzi": "努",
		"composition": "⿱",
		"components": ["奴", "力"]
	},
	{
		"id": "762a",
		"hanzi": "奴",
		"composition": "⿰",
		"components": ["女", "又"]
	},
	{
		"id": "763a",
		"hanzi": "焦",
		"composition": "⿱",
		"components": ["隹", "灬"]
	},
	{
		"id": "763",
		"hanzi": "蕉",
		"composition": "⿱",
		"components": ["艹", "焦"]
	},
	{ "id": "764b", "hanzi": "唐", "composition": "⿸⿱", "components": ["广", "肀", "口"] },
	{
		"id": "764",
		"hanzi": "糖",
		"composition": "⿰",
		"components": ["米", "唐"]
	},
	{
		"id": "765",
		"hanzi": "酸",
		"composition": "⿰",
		"components": ["酉", "夋"]
	},
	{
		"id": "766a",
		"hanzi": "委",
		"composition": "⿱",
		"components": ["禾", "女"]
	},
	{
		"id": "766",
		"hanzi": "矮",
		"composition": "⿰",
		"components": ["矢", "委"]
	},
	{ "id": "767a", "hanzi": "囱", "composition": "⿱⿴", "components": ["丿", "囗", "夊"] },
	{
		"id": "767",
		"hanzi": "窗",
		"composition": "⿱",
		"components": ["穴", "囱"]
	},
	{
		"id": "768",
		"hanzi": "寒",
		"composition": "⿱",
		"components": ["𡨄", "⺀"]
	},
	{
		"id": "769",
		"hanzi": "赛",
		"composition": "⿱",
		"components": ["𡨄", "贝"]
	},
	{
		"id": "770",
		"hanzi": "遍",
		"composition": "⿺",
		"components": ["辶", "扁"]
	},
	{
		"id": "770b",
		"hanzi": "扁",
		"composition": "⿸",
		"components": ["戶", "冊"]
	},
	{
		"id": "771",
		"hanzi": "篇",
		"composition": "⿱",
		"components": ["𥫗", "扁"]
	},
	{
		"id": "772a",
		"hanzi": "昌",
		"composition": "⿱",
		"components": ["日", "曰"]
	},
	{
		"id": "773",
		"hanzi": "冒",
		"composition": "⿱",
		"components": ["日", "目"]
	},
	{
		"id": "774",
		"hanzi": "帽",
		"composition": "⿰",
		"components": ["巾", "冒"]
	},
	{ "id": "775a", "hanzi": "辰", "composition": "⿸⿱⿰⿺", "components": ["厂", "二", "𠄌", "乀", "丿"] },
	{
		"id": "775",
		"hanzi": "晨",
		"composition": "⿱",
		"components": ["日", "辰"]
	},
	{
		"id": "776",
		"hanzi": "惯",
		"composition": "⿰",
		"components": ["忄", "贯"]
	},
	{
		"id": "776b",
		"hanzi": "贯",
		"composition": "⿱",
		"components": ["毌", "贝"]
	},
	{ "id": "776a", "hanzi": "毌", "composition": "⿻⿻", "components": ["𠃋", "𠃍", "十"] },
	{
		"id": "777a",
		"hanzi": "尺",
		"composition": "⿸",
		"components": ["尸", "㇏"]
	},
	{
		"id": "777",
		"hanzi": "迟",
		"composition": "⿺",
		"components": ["辶", "尺"]
	},
	{
		"id": "778b",
		"hanzi": "尧",
		"composition": "⿱",
		"components": ["𭠍", "兀"]
	},
	{
		"id": "778",
		"hanzi": "烧",
		"composition": "⿰",
		"components": ["火", "尧"]
	},
	{ "id": "779b", "hanzi": "既", "composition": "⿲⿰", "components": ["𠄌", "彐", "丶", "旡"] },
	{
		"id": "779",
		"hanzi": "概",
		"composition": "⿰",
		"components": ["木", "既"]
	},
	{
		"id": "780",
		"hanzi": "呀",
		"composition": "⿰",
		"components": ["口", "牙"]
	},
	{ "id": "780a", "hanzi": "牙", "composition": "⿹⿻", "components": ["𠃋", "丁", "丿"] },
	{
		"id": "781",
		"hanzi": "穿",
		"composition": "⿱",
		"components": ["穴", "牙"]
	},
	{
		"id": "782",
		"hanzi": "戴",
		"composition": "⿹",
		"components": ["𢦏", "異"]
	},
	{
		"id": "782a",
		"hanzi": "異",
		"composition": "⿱",
		"components": ["田", "共"]
	},
	{
		"id": "783a",
		"hanzi": "乘",
		"composition": "⿻",
		"components": ["禾", "北"]
	},
	{
		"id": "783",
		"hanzi": "剩",
		"composition": "⿰",
		"components": ["乘", "刂"]
	},
	{
		"id": "784",
		"hanzi": "馆",
		"composition": "⿰",
		"components": ["饣", "官"]
	},
	{
		"id": "784b",
		"hanzi": "官",
		"composition": "⿱",
		"components": ["宀", "㠯"]
	},
	{
		"id": "785",
		"hanzi": "慢",
		"composition": "⿰",
		"components": ["忄", "曼"]
	},
	{
		"id": "785b",
		"hanzi": "曼",
		"composition": "⿳",
		"components": ["⺜", "罒", "又"]
	},
	{ "id": "785a", "hanzi": "罒", "composition": "⿴⿰", "components": ["囗", "丨"] },
	{
		"id": "786a",
		"hanzi": "罢",
		"composition": "⿱",
		"components": ["⺲", "去"]
	},
	{
		"id": "786",
		"hanzi": "摆",
		"composition": "⿰",
		"components": ["扌", "罢"]
	},
	{ "id": "787", "hanzi": "舞", "composition": "⿱⿳", "components": ["𠂉", "卌", "一", "舛"] },
	{
		"id": "787a",
		"hanzi": "舛",
		"composition": "⿰",
		"components": ["夕", "㐄"]
	},
	{ "id": "788a", "hanzi": "兆", "composition": "⿻⿱", "components": ["儿", "丷", "八"] },
	{
		"id": "788",
		"hanzi": "跳",
		"composition": "⿰",
		"components": ["⻊", "兆"]
	},
	{ "id": "789a", "hanzi": "甫", "composition": null, "components": [] },
	{
		"id": "789",
		"hanzi": "辅",
		"composition": "⿰",
		"components": ["车", "甫"]
	},
	{
		"id": "790",
		"hanzi": "傅",
		"composition": "⿰",
		"components": ["亻", "尃"]
	},
	{
		"id": "791a",
		"hanzi": "并",
		"composition": "⿱",
		"components": ["丷", "开"]
	},
	{
		"id": "791",
		"hanzi": "瓶",
		"composition": "⿰",
		"components": ["并", "瓦"]
	},
	{ "id": "791b", "hanzi": "瓦", "composition": "⿵⿸⿱", "components": ["一", "𠄌", "㇈", "丶"] },
	{
		"id": "792",
		"hanzi": "擦",
		"composition": "⿰",
		"components": ["扌", "察"]
	},
	{ "id": "792b", "hanzi": "祭", "composition": "⿱⿰⿴⿺", "components": ["𠂊", "⺀", "㇇", "㇏", "示"] },
	{
		"id": "792c",
		"hanzi": "察",
		"composition": "⿱",
		"components": ["宀", "祭"]
	},
	{
		"id": "793a",
		"hanzi": "末",
		"composition": "⿻",
		"components": ["一", "木"]
	},
	{
		"id": "793",
		"hanzi": "袜",
		"composition": "⿰",
		"components": ["衤", "末"]
	},
	{
		"id": "794b",
		"hanzi": "兹",
		"composition": "⿱",
		"components": ["䒑", "𢆶"]
	},
	{
		"id": "794",
		"hanzi": "磁",
		"composition": "⿰",
		"components": ["石", "兹"]
	},
	{
		"id": "795",
		"hanzi": "丢",
		"composition": "⿱",
		"components": ["丿", "去"]
	},
	{
		"id": "796",
		"hanzi": "宴",
		"composition": "⿱",
		"components": ["宀", "妟"]
	},
	{ "id": "797", "hanzi": "夜", "composition": "⿱⿰⿴", "components": ["亠", "亻", "夂", "丶"] },
	{
		"id": "798",
		"hanzi": "假",
		"composition": "⿰",
		"components": ["亻", "叚"]
	},
	{
		"id": "799",
		"hanzi": "墙",
		"composition": "⿰",
		"components": ["土", "啬"]
	},
	{ "id": "800", "hanzi": "赢", "composition": "⿱⿲", "components": ["吂", "月", "贝", "凡"] }
]

const radicalIndex = radicals.reduce((acc, r) => { acc[r.id] = r; return acc }, {})
const compositionIndex = compositions.reduce((acc, r) => { acc[r.id] = r; return acc }, {})

let radicalMisses = []

const charactersWithRadicals = characters.map(c => {
	const id = '' + c.id
	if (!!radicalIndex[id]) {
		return {
			...c,
			radical: {
				id: radicalIndex[id].radicalId,
				character: radicalIndex[id].radical,
			}
		}
	} else {
		radicalMisses.push(c)
		return {...c}
	}
})

let compositionMisses = []

const charactersWithRadicalsAndCompositions = charactersWithRadicals.map(c => {
	const id = '' + c.id
	if (!!compositionIndex[id]) {
		return {
			...c,
			composition: compositionIndex[id].composition,
			components: compositionIndex[id].components,
		}
	} else {
		compositionMisses.push(c)
		return {...c}
	}
})

console.log(JSON.stringify(charactersWithRadicalsAndCompositions))

// console.log('composition misses', compositionMisses.length)
// console.log(compositionMisses)
// ```
// composition misses 9
// [
//   {
//     id: 4,
//     hanzi: '十',
//     pinyin: 'shí',
//     english: 'ten',
//     radical: { id: 24, character: '十' }
//   },
//   {
//     id: 196,
//     hanzi: '亲',
//     pinyin: 'qīn',
//     english: 'kin',
//     radical: { id: 8, character: '亠' }
//   },
//   {
//     id: 206,
//     hanzi: '能',
//     pinyin: 'néng',
//     english: 'able to',
//     radical: { id: 130, character: '肉' }
//   },
//   {
//     id: '251a',
//     hanzi: '旨',
//     pinyin: 'zhǐ',
//     english: 'purpose',
//     radical: { id: 72, character: '日' }
//   },
//   {
//     id: 405,
//     hanzi: '觉',
//     pinyin: 'jué; jiào',
//     english: '1. feel 2. sleep',
//     radical: { id: 147, character: '见' }
//   },
//   {
//     id: 599,
//     hanzi: '检',
//     pinyin: 'jiǎn',
//     english: 'inspect',
//     radical: { id: 75, character: '木' }
//   },
//   {
//     id: '623b',
//     hanzi: '寅',
//     pinyin: 'yín',
//     english: 'tiger',
//     radical: { id: 40, character: '宀' }
//   },
//   {
//     id: 731,
//     hanzi: '误',
//     pinyin: 'wù',
//     english: 'mistake',
//     radical: { id: 149, character: '讠' }
//   },
//   {
//     id: 772,
//     hanzi: '唱',
//     pinyin: 'chàng',
//     english: 'sing',
//     radical: { id: 30, character: '口' }
//   }
// ]
// ```

// console.log('radical misses', radicalMisses.length)
// console.log(radicalMisses)
// ```
// radical misses 11
// [
//   { id: '29a', hanzi: '止', pinyin: 'zhǐ', english: 'stop' },
//   { id: '219a', hanzi: '入', pinyin: 'rù', english: 'enter' },
//   { id: 238, hanzi: '尤', pinyin: 'yóu', english: 'especially' },
//   { id: 298, hanzi: '住', pinyin: 'zhù', english: 'to live in' },
//   { id: '402a', hanzi: '夬', pinyin: 'to', english: 'separate' },
//   { id: 586, hanzi: '解', pinyin: 'jiě', english: 'untie' },
//   { id: 679, hanzi: '虽', pinyin: 'suī', english: 'although' },
//   { id: 697, hanzi: '坚', pinyin: 'jiān', english: 'resolute' },
//   { id: '706a', hanzi: '韦', pinyin: 'wéi', english: 'leather' },
//   { id: 706, hanzi: '围', pinyin: 'wéi', english: 'surround' },
//   { id: 749, hanzi: '楚', pinyin: 'chǔ', english: 'clear' }
// ]
// ```