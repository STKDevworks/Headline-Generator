const pwr = ['great', 'free', 'focus', 'remarkable', 'conﬁdential', 'sale', 'wanted', 'obsession', 'sizable', 'new', 'absolutely lowest', 'surging', 'wonderful', 'professional', 'interesting', 'revisited', 'delivered', 'guaranteed', 'challenge', 'unique', 'secrets', 'special', 'lifetime', 'bargain', 'scarce', 'tested', 'highest', 'hurry', 'alert ', 'famous', 'improved', 'expert', 'daring', 'strong', 'immediately', 'advice', 'pioneering', 'unusual', 'limited', 'the truth about', 'destiny', 'outstanding', 'simplistic', 'compare', 'unsurpassed', 'energy', 'powerful', 'colorful', 'genuine', 'instructive', 'big', 'affordable', 'informative', 'liberal', 'popular', 'ultimate', 'mainstream', 'rare', 'exclusive', 'willpower', 'complete', 'edge', 'valuable', 'attractive', 'last chance', 'superior', 'how to', 'easily', 'exploit', 'unparalleled', 'endorsed', 'approved', 'quality', 'fascinating', 'unlimited', 'competitive', 'gigantic', 'compromise', 'discount', 'full', 'love', 'odd', 'fundamentals', 'mammoth', 'lavishly', 'bottom line', 'under priced', 'innovative', 'reliable', 'zinger', 'suddenly', 'it is here', 'terriﬁc', 'simpliﬁed', 'perspective', 'just arrived', 'breakthrough', 'tremendous', 'launching', 'sure ﬁre', 'emerging', 'helpful', 'skill', 'soar', 'proﬁtable', 'special offer', 'reduced', 'beautiful', 'sampler', 'technology', 'better', 'crammed', 'noted', 'selected', 'shrewd', 'growth', 'luxury', 'sturdy', 'enormous', 'promising', 'unconditional', 'wealth', 'spotlight', 'astonishing', 'timely', 'successful', 'useful', 'imagination', 'bonanza', 'opportunities', 'survival', 'greatest', 'security', 'last minute', 'largest', 'high tech', 'refundable', 'monumental', 'colossal', 'latest', 'quickly', 'startling', 'now', 'important', 'revolutionary', 'quick', 'unlock', 'urgent', 'miracle', 'easy', 'fortune', 'amazing', 'magic', 'direct', 'authentic', 'exciting', 'proven', 'simple', 'announcing', 'portfolio', 'reward', 'strange', 'huge gift', 'revealing', 'weird', 'value', 'introducing', 'sensational', 'surprise', 'insider', 'practical', 'excellent', 'delighted', 'download'];

const emo = ['destroy', 'extra', 'in a', 'devastating', 'eye-opening', 'gift', 'in the world', 'devoted', 'fail', 'in the', 'faith', 'grateful', 'inexpensive', 'dirty', 'famous', 'disastrous', 'fantastic', 'greed', 'grit', 'insanely', 'disgusting', 'fearless', 'disinformation', 'feast', 'insidious', 'dollar', 'feeble', 'gullible', 'double', 'ﬁre', 'hack', 'ﬂeece', 'had enough', 'invasion', 'drowning', 'ﬂoundering', 'happy', 'ironclad', 'dumb', 'ﬂush', 'hate', 'irresistibly', 'hazardous', 'is the', 'fool', 'is what happens when', 'fooled', 'helpless', 'it looks like a', 'embarrass', 'for the ﬁrst time', 'help are the', 'jackpot', 'forbidden', 'hidden', 'jail', 'empower', 'force-fed', 'high', 'jaw-dropping', 'forgotten', 'jeopardy', 'energize', 'hoax', 'jubilant', 'foul', 'hope', 'killer', 'frantic', 'horriﬁc', 'know it all', 'epic', 'how to make', 'evil', 'freebie', 'frenzy', 'hurricane', 'excited', 'fresh on the mind', 'frightening', 'hypnotic', 'lawsuit', 'frugal', 'illegal', 'fulﬁll', 'lick', 'explode', 'lies', 'exposed', 'gambling', 'like a normal', 'nightmare', 'results', 'line', 'no good', 'pound', 'loathsome', 'no questions asked', 'revenge', 'lonely', 'looks like a', 'obnoxious', 'preposterous', 'revolting', 'looming', 'priced', 'lost', 'prison', 'lowest', 'of the', 'privacy', 'rich', 'lunatic', 'off-limits', 'private', 'risky', 'lurking', 'offer', 'prize', 'ruthless', 'lust', 'official', 'luxurious', 'on the', 'proﬁt', 'scary', 'lying', 'outlawed', 'protected', 'scream', 'searing', 'overcome', 'provocative', 'make you', 'painful', 'pummel', 'secure', 'pale', 'punish', 'marked down', 'panic', 'quadruple', 'seductively', 'massive', 'pay zero', 'seize', 'meltdown', 'payback', 'might look like a', 'peril', 'mind-blowing', 'shameless', 'minute', 'rave', 'shatter', 'piranha', 'reckoning', 'shellacking', 'mired', 'pitfall', 'reclaim', 'mistakes', 'plague', 'sick and tired', 'money', 'played', 'refugee', 'silly', 'money-grubbing', 'pluck', 'refund', 'moneyback', 'plummet', 'plunge', 'murder', 'pointless', 'sinful', 'myths', 'poor', 'remarkably', 'six-ﬁgure', 'never again', 'research', 'surrender', 'to the', 'verify', 'skyrocket', 'toxic', 'vibrant', 'slaughter', 'swindle', 'trap', 'victim', 'sleazy', 'taboo', 'treasure', 'victory', 'smash', 'tailspin', 'vindication', 'smug', 'tank', 'triple', 'viral', 'smuggled', 'tantalizing', 'triumph', 'volatile', 'sniveling', 'targeted', 'truth', 'vulnerable', 'snob', 'tawdry', 'try before you buy', 'tech', 'turn the tables', 'wanton', 'soaring', 'warning', 'teetering', 'unauthorized', 'spectacular', 'temporary ﬁx', 'unbelievably', 'spine', 'tempting', 'uncommonly', 'what happened', 'spirit', 'what happens when', 'terror', 'under', 'what happens', 'staggering', 'underhanded', 'what this', 'that will make you', 'undo', 'when you see', 'that will make', 'unexpected', 'when you', 'strangle', 'that will', 'whip', 'the best', 'whopping', 'stuck up', 'the ranking of', 'wicked', 'stunning', 'the most', 'will make you', 'stupid', 'the reason why is', 'unscrupulous', 'thing i have ever seen', 'withheld', 'this is the', 'this is what happens', 'unusually', 'wondrous', 'this is what', 'uplifting', 'worry', 'sure', 'this is', 'wounded', 'surge', 'thrilled', 'you need to know', 'thrilling', 'valor', 'you need to', 'you see what', 'surprising', 'tired', 'you see', 'surprisingly', 'to be', 'vaporize'];

const com = ['a', 'for', 'about', 'from', 'after', 'get', 'all', 'has', 'an', 'have', 'and', 'he', 'are', 'her', 'as', 'his', 'at', 'how', 'be', 'I', 'but', 'if', 'by', 'in', 'can', 'is', 'did', 'it', 'do', 'just', 'ever', 'like', 'll', 'these', 'me', 'they', 'most', 'things', 'my', 'this', 'no', 'to', 'not', 'up', 'of', 'was', 'on', 'what', 're', 'when', 'she', 'who', 'should', 'why', 'so', 'will', 'that', 'with', 'the', 'you', 'their', 'your', 'there'];

const unc = ['actually', 'happened', 'need', 'thing', 'awesome', 'heart', 'never', 'think', 'baby', 'here', 'new', 'time', 'beautiful', 'its', 'now', 'valentines', 'being', 'know', 'old', 'video', 'best', 'life', 'one', 'want', 'better', 'little', 'out', 'watch', 'boy', 'look', 'people', 'way', 'dog', 'love', 'photos', 'ways', 'down', 'made', 'really', 'world', 'facebook', 'make', 'reasons', 'year', 'ﬁrst', 'makes', 'right', 'years', 'found', 'man', 'see', 'you will', 'girl', 'media', 'seen', 'good', 'mind', 'social', 'guy', 'more', 'something'];

function headlineGen() {
var wd1 = document.getElementById("word1");
var wd1typ = wd1.value;

if (wd1typ == "Power") {
var wd1val = pwr[Math.floor(Math.random() * pwr.length)]
} else if (wd1typ == "Emotion") {
var wd1val = emo[Math.floor(Math.random() * emo.length)]
} else if (wd1typ == "Common") {
var wd1val = com[Math.floor(Math.random() * com.length)]
} else if (wd1typ == "Uncommon") {
var wd1val = unc[Math.floor(Math.random() * unc.length)]
}

var wd2 = document.getElementById("word2");
var wd2typ = wd2.value;

if (wd2typ == "Power") {
var wd2val = pwr[Math.floor(Math.random() * pwr.length)]
} else if (wd2typ == "Emotion") {
var wd2val = emo[Math.floor(Math.random() * emo.length)]
} else if (wd2typ == "Common") {
var wd2val = com[Math.floor(Math.random() * com.length)]
} else if (wd2typ == "Uncommon") {
var wd2val = unc[Math.floor(Math.random() * unc.length)]
}

var wd3 = document.getElementById("word3");
var wd3typ = wd3.value;

if (wd3typ == "Power") {
var wd3val = pwr[Math.floor(Math.random() * pwr.length)]
} else if (wd3typ == "Emotion") {
var wd3val = emo[Math.floor(Math.random() * emo.length)]
} else if (wd3typ == "Common") {
var wd3val = com[Math.floor(Math.random() * com.length)]
} else if (wd3typ == "Uncommon") {
var wd3val = unc[Math.floor(Math.random() * unc.length)]
}

var wd4 = document.getElementById("word4");
var wd4typ = wd4.value;

if (wd4typ == "Power") {
var wd4val = pwr[Math.floor(Math.random() * pwr.length)]
} else if (wd4typ == "Emotion") {
var wd4val = emo[Math.floor(Math.random() * emo.length)]
} else if (wd4typ == "Common") {
var wd4val = com[Math.floor(Math.random() * com.length)]
} else if (wd4typ == "Uncommon") {
var wd4val = unc[Math.floor(Math.random() * unc.length)]
}

var wd5 = document.getElementById("word5");
var wd5typ = wd5.value;

if (wd5typ == "Power") {
var wd5val = pwr[Math.floor(Math.random() * pwr.length)]
} else if (wd5typ == "Emotion") {
var wd5val = emo[Math.floor(Math.random() * emo.length)]
} else if (wd5typ == "Common") {
var wd5val = com[Math.floor(Math.random() * com.length)]
} else if (wd5typ == "Uncommon") {
var wd5val = unc[Math.floor(Math.random() * unc.length)]
}

var allwds = wd1val.concat (" ", wd2val, " ", wd3val, " ", wd4val, " ", wd5val);
console.log(allwds);
  document.getElementById("headline-output").value = allwds;
}
