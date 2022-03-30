/* <-- RESET SETTINGS BUT LEAVE SAVES --> */

function headlineReset() {
var feeldef = "Power";
var typedef = "Verb"
var cstdef = "Custom / Blank";
var inpdef = "Lorem Ipsum Dolor Sin Amet"
var wd1feelid = document.getElementById("word1feel");
wd1feelid.value = feeldef;
var wd1typeid = document.getElementById("word1type");
wd1typeid.value = typedef;
var wd1cstid = document.getElementById("word1-cst");
wd1cstid.value = cstdef;
var wd2feelid = document.getElementById("word2feel");
wd2feelid.value = feeldef;
var wd2typeid = document.getElementById("word2type");
wd2typeid.value = typedef;
var wd2cstid = document.getElementById("word2-cst");
wd2cstid.value = cstdef;
var wd3feelid = document.getElementById("word3feel");
wd3feelid.value = feeldef;
var wd3typeid = document.getElementById("word3type");
wd3typeid.value = typedef;
var wd3cstid = document.getElementById("word3-cst");
wd3cstid.value = cstdef;
var wd4feelid = document.getElementById("word4feel");
wd4feelid.value = feeldef;
var wd4typeid = document.getElementById("word4type");
wd4typeid.value = typedef;
var wd4cstid = document.getElementById("word4-cst");
wd4cstid.value = cstdef;
var wd5feelid = document.getElementById("word5feel");
wd5feelid.value = feeldef;
var wd5typeid = document.getElementById("word5type");
wd5typeid.value = typedef;
var wd5cstid = document.getElementById("word5-cst");
wd5cstid.value = cstdef;
var wd6feelid = document.getElementById("word6feel");
wd6feelid.value = feeldef;
var wd6typeid = document.getElementById("word6type");
wd6typeid.value = typedef;
var wd6cstid = document.getElementById("word6-cst");
wd6cstid.value = cstdef;
var wd7feelid = document.getElementById("word7feel");
wd7feelid.value = feeldef;
var wd7typeid = document.getElementById("word7type");
wd7typeid.value = typedef;
var wd7cstid = document.getElementById("word7-cst");
wd7cstid.value = cstdef;
var inpid = document.getElementById("headline-output");
inpid.value = inpdef;
}

/* <-- SAVE OUTPUT VALUES --> */

function headlineSave() {
var saved = document.getElementById("headline-saved");
var output = document.getElementById("headline-output");
if (saved.value != "Lorem Ipsum Dolor Sin Amet") {
var newsave = saved.value + '\n' + output.value;
saved.value = newsave;
} else {
var newsave = output.value;
saved.value = newsave;
}
}

/* <-- COPY SAVED OUTPUTS --> */

function copySaves() {
  var copyText = document.getElementById("headline-saved");
  copyText.select();
  copyText.setSelectionRange(0, 99999);
  navigator.clipboard.writeText(copyText.value);
  alert("Copied the text: " + copyText.value);
}

/* <-- GET WORD LIST --> */

function headlineGen() {

fetch("./headline generator wordlist.json")
// fetch('https://api.jsonbin.io/b/6243be031a1b610f0846dccc')
.then(response => response.json())
.then(data => {
var wlistdata = []
wlistdata = data;

var pwr = [];
var emo = [];
var com = [];
var unc = [];
var vrb = [];
var sub = [];
var adj = [];
var con = [];
var any = [];
var pwrvrb = [];
var emovrb = [];
var comvrb = [];
var uncvrb = [];
var pwradj = [];
var emoadj = [];
var comadj = [];
var uncadj = [];
var pwrsub = [];
var emosub = [];
var comsub = [];
var uncsub = [];
var pwrcon = [];
var emocon = [];
var comcon = [];
var unccon = [];
var wd1val = '';
var wd2val = '';
var wd3val = '';
var wd4val = '';
var wd5val = '';
var wd6val = '';
var wd7val = '';


/* <-- GENERATE TWO-FACTOR LISTS --> */

for (var i = 0; i < Object.values(wlistdata)[0].length; i++) {
if (Object.values(wlistdata)[0][i].feeling == "Power" && Object.values(wlistdata)[0][i].type == "Verb") {
pwrvrb[i] = Object.values(wlistdata)[0][i].word;
} else if (Object.values(wlistdata)[0][i].feeling == "Power" && Object.values(wlistdata)[0][i].type == "Subject") {
pwrsub[i] = Object.values(wlistdata)[0][i].word;
} else if (Object.values(wlistdata)[0][i].feeling == "Power" && Object.values(wlistdata)[0][i].type == "Adjective") {
pwradj[i] = Object.values(wlistdata)[0][i].word;
} else if (Object.values(wlistdata)[0][i].feeling == "Power" && Object.values(wlistdata)[0][i].type == "Connector") {
pwrcon[i] = Object.values(wlistdata)[0][i].word;
} else  if (Object.values(wlistdata)[0][i].feeling == "Emotion" && Object.values(wlistdata)[0][i].type == "Verb") {
emovrb[i] = Object.values(wlistdata)[0][i].word;
} else if (Object.values(wlistdata)[0][i].feeling == "Emotion" && Object.values(wlistdata)[0][i].type == "Subject") {
emosub[i] = Object.values(wlistdata)[0][i].word;
} else if (Object.values(wlistdata)[0][i].feeling == "Emotion" && Object.values(wlistdata)[0][i].type == "Adjective") {
emoadj[i] = Object.values(wlistdata)[0][i].word;
} else if (Object.values(wlistdata)[0][i].feeling == "Emotion" && Object.values(wlistdata)[0][i].type == "Connector") {
emocon[i] = Object.values(wlistdata)[0][i].word;
} else if (Object.values(wlistdata)[0][i].feeling == "Common" && Object.values(wlistdata)[0][i].type == "Verb") {
comvrb[i] = Object.values(wlistdata)[0][i].word;
} else if (Object.values(wlistdata)[0][i].feeling == "Common" && Object.values(wlistdata)[0][i].type == "Subject") {
comsub[i] = Object.values(wlistdata)[0][i].word;
} else if (Object.values(wlistdata)[0][i].feeling == "Common" && Object.values(wlistdata)[0][i].type == "Adjective") {
comadj[i] = Object.values(wlistdata)[0][i].word;
} else if (Object.values(wlistdata)[0][i].feeling == "Common" && Object.values(wlistdata)[0][i].type == "Connector") {
comcon[i] = Object.values(wlistdata)[0][i].word;
} else  if (Object.values(wlistdata)[0][i].feeling == "Uncommon" && Object.values(wlistdata)[0][i].type == "Verb") {
uncvrb[i] = Object.values(wlistdata)[0][i].word;
} else if (Object.values(wlistdata)[0][i].feeling == "Uncommon" && Object.values(wlistdata)[0][i].type == "Subject") {
uncsub[i] = Object.values(wlistdata)[0][i].word;
} else if (Object.values(wlistdata)[0][i].feeling == "Uncommon" && Object.values(wlistdata)[0][i].type == "Adjective") {
uncadj[i] = Object.values(wlistdata)[0][i].word;
} else if (Object.values(wlistdata)[0][i].feeling == "Uncommon" && Object.values(wlistdata)[0][i].type == "Connector") {
unccon[i] = Object.values(wlistdata)[0][i].word;
} }

/* <-- GENERATE FEELING LISTS --> */

for (var i = 0; i < Object.values(wlistdata)[0].length; i++) {
if (Object.values(wlistdata)[0][i].feeling == "Power") {
pwr[i] = Object.values(wlistdata)[0][i].word;
} else if (Object.values(wlistdata)[0][i].feeling == "Emotion") {
emo[i] = Object.values(wlistdata)[0][i].word;
} else if (Object.values(wlistdata)[0][i].feeling == "Common") {
com[i] = Object.values(wlistdata)[0][i].word;
} else if (Object.values(wlistdata)[0][i].feeling == "Uncommon") {
unc[i] = Object.values(wlistdata)[0][i].word;
} }

/* <-- GENERATE TYPE LISTS --> */

for (var i = 0; i < Object.values(wlistdata)[0].length; i++) {
if (Object.values(wlistdata)[0][i].type == "Connector") {
con[i] = Object.values(wlistdata)[0][i].word;
} else if (Object.values(wlistdata)[0][i].type == "Verb") {
vrb[i] = Object.values(wlistdata)[0][i].word;
} else if (Object.values(wlistdata)[0][i].type == "Adjective") {
adj[i] = Object.values(wlistdata)[0][i].word;
} else if (Object.values(wlistdata)[0][i].type == "Subject") {
sub[i] = Object.values(wlistdata)[0][i].word;
} else {
any[i] = Object.values(wlistdata)[0][i].word
} }

/* <-- GENERATE ANY LIST --> */

for (var i = 0; i < Object.values(wlistdata)[0].length; i++) {
any[i] = Object.values(wlistdata)[0][i].word
}

/* <--WORDLIST TESTING-->

console.log( Object.values(pwr));
console.log( Object.values(emo));
 console.log( Object.values(com));
  console.log( Object.values(unc));
   console.log( Object.values(vrb));
    console.log( Object.values(sub));
     console.log( Object.values(adj));
      console.log( Object.values(con));
       console.log( Object.values(any));
  console.log( Object.values(pwrvrb));
console.log( Object.values(emovrb));
 console.log( Object.values(comvrb));
  console.log( Object.values(uncvrb));
console.log( Object.values(pwradj));
console.log( Object.values(emoadj));
 console.log( Object.values(comadj));
  console.log( Object.values(uncadj));
console.log( Object.values(pwrsub));
 console.log( Object.values(emosub));
  console.log( Object.values(comsub));
   console.log( Object.values(uncsub));
console.log( Object.values(pwrcon));
 console.log( Object.values(emocon));
  console.log( Object.values(comcon));
      console.log( Object.values(unccon)); */

/* <-- GENERATE WORD 1-7 VALUES --> */

var wd1feeling = document.getElementById("word1feel");
var wd1feel = wd1feeling.value;
var wd1type = document.getElementById("word1type");
var wd1typ = wd1type.value;
var wd1custom = document.getElementById("word1-cst");
var wd1cst = wd1custom.value;

if (wd1cst != "Custom / Blank") {
var wd1val = wd1cst;
} else {
if (wd1feel == "Power" && wd1typ == "Verb") {
var wd1val = Object.values(pwrvrb)[Math.floor(Math.random() * Object.values(pwrvrb).length)]
} else if (wd1feel == "Power" && wd1typ == "Subject") {
var wd1val = Object.values(pwrsub)[Math.floor(Math.random() * Object.values(pwrsub).length)]
} else if (wd1feel == "Power" && wd1typ == "Adjective") {
var wd1val = Object.values(pwradj)[Math.floor(Math.random() * Object.values(pwradj).length)]
} else if (wd1feel == "Power" && wd1typ == "Connector") {
var wd1val = Object.values(pwrcon)[Math.floor(Math.random() * Object.values(pwrcon).length)]
} else if (wd1feel == "Emotion" && wd1typ == "Verb") {
var wd1val = Object.values(emovrb)[Math.floor(Math.random() * Object.values(emovrb).length)]
} else if (wd1feel == "Emotion" && wd1typ == "Subject") {
var wd1val = Object.values(emosub)[Math.floor(Math.random() * Object.values(emosub).length)]
} else if (wd1feel == "Emotion" && wd1typ == "Adjective") {
var wd1val = Object.values(emoadj)[Math.floor(Math.random() * Object.values(emoadj).length)]
} else if (wd1feel == "Emotion" && wd1typ == "Connector") {
var wd1val = Object.values(emocon)[Math.floor(Math.random() * Object.values(emocon).length)]
} else if (wd1feel == "Common" && wd1typ == "Verb") {
var wd1val = Object.values(comvrb)[Math.floor(Math.random() * Object.values(comvrb).length)]
} else if (wd1feel == "Common" && wd1typ == "Subject") {
var wd1val = Object.values(comsub)[Math.floor(Math.random() * Object.values(comsub).length)]
} else if (wd1feel == "Common" && wd1typ == "Adjective") {
var wd1val = Object.values(comadj)[Math.floor(Math.random() * Object.values(comadj).length)]
} else if (wd1feel == "Common" && wd1typ == "Connector") {
var wd1val = Object.values(comcon)[Math.floor(Math.random() * Object.values(comcon).length)]
}  else if (wd1feel == "Uncommon" && wd1typ == "Verb") {
var wd1val = Object.values(uncvrb)[Math.floor(Math.random() * Object.values(uncvrb).length)]
} else if (wd1feel == "Uncommon" && wd1typ == "Subject") {
var wd1val = Object.values(uncsub)[Math.floor(Math.random() * Object.values(uncsub).length)]
} else if (wd1feel == "Uncommon" && wd1typ == "Adjective") {
var wd1val = Object.values(uncadj)[Math.floor(Math.random() * Object.values(uncadj).length)]
} else if (wd1feel == "Uncommon" && wd1typ == "Connector") {
var wd1val = Object.values(unccon)[Math.floor(Math.random() * Object.values(unccon).length)]
} else if (wd1feel == "Any" && wd1typ == "Connector") {
var wd1val = Object.values(con)[Math.floor(Math.random() * Object.values(con).length)]
} else if (wd1feel == "Any" && wd1typ == "Verb") {
var wd1val = Object.values(vrb)[Math.floor(Math.random() * Object.values(vrb).length)]
} else if (wd1feel == "Any" && wd1typ == "Adjective") {
var wd1val = Object.values(adj)[Math.floor(Math.random() * Object.values(adj).length)]
} else if (wd1feel == "Any" && wd1typ == "Subject") {
var wd1val = Object.values(sub)[Math.floor(Math.random() * Object.values(sub).length)]
} else if (wd1feel == "Power" && wd1typ == "Any") {
var wd1val = Object.values(pwr)[Math.floor(Math.random() * Object.values(pwr).length)]
} else if (wd1feel == "Emotion" && wd1typ == "Any") {
var wd1val = Object.values(emo)[Math.floor(Math.random() * Object.values(emo).length)]
} else if (wd1feel == "Common" && wd1typ == "Any") {
var wd1val = Object.values(com)[Math.floor(Math.random() * Object.values(com).length)]
} else if (wd1feel == "Uncommon" && wd1typ == "Any") {
var wd1val = Object.values(unc)[Math.floor(Math.random() * Object.values(unc).length)]
} else if (wd1feel == "Any" && wd1typ == "Any") {
var wd1val = Object.values(any)[Math.floor(Math.random() * Object.values(any).length)]
} }

var wd2feeling = document.getElementById("word2feel");
var wd2feel = wd2feeling.value;
var wd2type = document.getElementById("word2type");
var wd2typ = wd2type.value;
var wd2custom = document.getElementById("word2-cst");
var wd2cst = wd2custom.value;

if (wd2cst != "Custom / Blank") {
var wd2val = wd2cst;
} else {
if (wd2feel == "Power" && wd2typ == "Verb") {
var wd2val = Object.values(pwrvrb)[Math.floor(Math.random() * Object.values(pwrvrb).length)]
} else if (wd2feel == "Power" && wd2typ == "Subject") {
var wd2val = Object.values(pwrsub)[Math.floor(Math.random() * Object.values(pwrsub).length)]
} else if (wd2feel == "Power" && wd2typ == "Adjective") {
var wd2val = Object.values(pwradj)[Math.floor(Math.random() * Object.values(pwradj).length)]
} else if (wd2feel == "Power" && wd2typ == "Connector") {
var wd2val = Object.values(pwrcon)[Math.floor(Math.random() * Object.values(pwrcon).length)]
} else if (wd2feel == "Emotion" && wd2typ == "Verb") {
var wd2val = Object.values(emovrb)[Math.floor(Math.random() * Object.values(emovrb).length)]
} else if (wd2feel == "Emotion" && wd2typ == "Subject") {
var wd2val = Object.values(emosub)[Math.floor(Math.random() * Object.values(emosub).length)]
} else if (wd2feel == "Emotion" && wd2typ == "Adjective") {
var wd2val = Object.values(emoadj)[Math.floor(Math.random() * Object.values(emoadj).length)]
} else if (wd2feel == "Emotion" && wd2typ == "Connector") {
var wd2val = Object.values(emocon)[Math.floor(Math.random() * Object.values(emocon).length)]
} else if (wd2feel == "Common" && wd2typ == "Verb") {
var wd2val = Object.values(comvrb)[Math.floor(Math.random() * Object.values(comvrb).length)]
} else if (wd2feel == "Common" && wd2typ == "Subject") {
var wd2val = Object.values(comsub)[Math.floor(Math.random() * Object.values(comsub).length)]
} else if (wd2feel == "Common" && wd2typ == "Adjective") {
var wd2val = Object.values(comadj)[Math.floor(Math.random() * Object.values(comadj).length)]
} else if (wd2feel == "Common" && wd2typ == "Connector") {
var wd2val = Object.values(comcon)[Math.floor(Math.random() * Object.values(comcon).length)]
}  else if (wd2feel == "Uncommon" && wd2typ == "Verb") {
var wd2val = Object.values(uncvrb)[Math.floor(Math.random() * Object.values(uncvrb).length)]
} else if (wd2feel == "Uncommon" && wd2typ == "Subject") {
var wd2val = Object.values(uncsub)[Math.floor(Math.random() * Object.values(uncsub).length)]
} else if (wd2feel == "Uncommon" && wd2typ == "Adjective") {
var wd2val = Object.values(uncadj)[Math.floor(Math.random() * Object.values(uncadj).length)]
} else if (wd2feel == "Uncommon" && wd2typ == "Connector") {
var wd2val = Object.values(unccon)[Math.floor(Math.random() * Object.values(unccon).length)]
} else if (wd2feel == "Any" && wd2typ == "Connector") {
var wd2val = Object.values(con)[Math.floor(Math.random() * Object.values(con).length)]
} else if (wd2feel == "Any" && wd2typ == "Verb") {
var wd2val = Object.values(vrb)[Math.floor(Math.random() * Object.values(vrb).length)]
} else if (wd2feel == "Any" && wd2typ == "Adjective") {
var wd2val = Object.values(adj)[Math.floor(Math.random() * Object.values(adj).length)]
} else if (wd2feel == "Any" && wd2typ == "Subject") {
var wd2val = Object.values(sub)[Math.floor(Math.random() * Object.values(sub).length)]
} else if (wd2feel == "Power" && wd2typ == "Any") {
var wd2val = Object.values(pwr)[Math.floor(Math.random() * Object.values(pwr).length)]
} else if (wd2feel == "Emotion" && wd2typ == "Any") {
var wd2val = Object.values(emo)[Math.floor(Math.random() * Object.values(emo).length)]
} else if (wd2feel == "Common" && wd2typ == "Any") {
var wd2val = Object.values(com)[Math.floor(Math.random() * Object.values(com).length)]
} else if (wd2feel == "Uncommon" && wd2typ == "Any") {
var wd2val = Object.values(unc)[Math.floor(Math.random() * Object.values(unc).length)]
} else if (wd2feel == "Any" && wd2typ == "Any") {
var wd2val = Object.values(any)[Math.floor(Math.random() * Object.values(any).length)]
} }

var wd3feeling = document.getElementById("word3feel");
var wd3feel = wd3feeling.value;
var wd3type = document.getElementById("word3type");
var wd3typ = wd3type.value;
var wd3custom = document.getElementById("word3-cst");
var wd3cst = wd3custom.value;

if (wd3cst != "Custom / Blank") {
var wd3val = wd3cst;
} else {
if (wd3feel == "Power" && wd3typ == "Verb") {
var wd3val = Object.values(pwrvrb)[Math.floor(Math.random() * Object.values(pwrvrb).length)]
} else if (wd3feel == "Power" && wd3typ == "Subject") {
var wd3val = Object.values(pwrsub)[Math.floor(Math.random() * Object.values(pwrsub).length)]
} else if (wd3feel == "Power" && wd3typ == "Adjective") {
var wd3val = Object.values(pwradj)[Math.floor(Math.random() * Object.values(pwradj).length)]
} else if (wd3feel == "Power" && wd3typ == "Connector") {
var wd3val = Object.values(pwrcon)[Math.floor(Math.random() * Object.values(pwrcon).length)]
} else if (wd3feel == "Emotion" && wd3typ == "Verb") {
var wd3val = Object.values(emovrb)[Math.floor(Math.random() * Object.values(emovrb).length)]
} else if (wd3feel == "Emotion" && wd3typ == "Subject") {
var wd3val = Object.values(emosub)[Math.floor(Math.random() * Object.values(emosub).length)]
} else if (wd3feel == "Emotion" && wd3typ == "Adjective") {
var wd3val = Object.values(emoadj)[Math.floor(Math.random() * Object.values(emoadj).length)]
} else if (wd3feel == "Emotion" && wd3typ == "Connector") {
var wd3val = Object.values(emocon)[Math.floor(Math.random() * Object.values(emocon).length)]
} else if (wd3feel == "Common" && wd3typ == "Verb") {
var wd3val = Object.values(comvrb)[Math.floor(Math.random() * Object.values(comvrb).length)]
} else if (wd3feel == "Common" && wd3typ == "Subject") {
var wd3val = Object.values(comsub)[Math.floor(Math.random() * Object.values(comsub).length)]
} else if (wd3feel == "Common" && wd3typ == "Adjective") {
var wd3val = Object.values(comadj)[Math.floor(Math.random() * Object.values(comadj).length)]
} else if (wd3feel == "Common" && wd3typ == "Connector") {
var wd3val = Object.values(comcon)[Math.floor(Math.random() * Object.values(comcon).length)]
}  else if (wd3feel == "Uncommon" && wd3typ == "Verb") {
var wd3val = Object.values(uncvrb)[Math.floor(Math.random() * Object.values(uncvrb).length)]
} else if (wd3feel == "Uncommon" && wd3typ == "Subject") {
var wd3val = Object.values(uncsub)[Math.floor(Math.random() * Object.values(uncsub).length)]
} else if (wd3feel == "Uncommon" && wd3typ == "Adjective") {
var wd3val = Object.values(uncadj)[Math.floor(Math.random() * Object.values(uncadj).length)]
} else if (wd3feel == "Uncommon" && wd3typ == "Connector") {
var wd3val = Object.values(unccon)[Math.floor(Math.random() * Object.values(unccon).length)]
} else if (wd3feel == "Any" && wd3typ == "Connector") {
var wd3val = Object.values(con)[Math.floor(Math.random() * Object.values(con).length)]
} else if (wd3feel == "Any" && wd3typ == "Verb") {
var wd3val = Object.values(vrb)[Math.floor(Math.random() * Object.values(vrb).length)]
} else if (wd3feel == "Any" && wd3typ == "Adjective") {
var wd3val = Object.values(adj)[Math.floor(Math.random() * Object.values(adj).length)]
} else if (wd3feel == "Any" && wd3typ == "Subject") {
var wd3val = Object.values(sub)[Math.floor(Math.random() * Object.values(sub).length)]
} else if (wd3feel == "Power" && wd3typ == "Any") {
var wd3val = Object.values(pwr)[Math.floor(Math.random() * Object.values(pwr).length)]
} else if (wd3feel == "Emotion" && wd3typ == "Any") {
var wd3val = Object.values(emo)[Math.floor(Math.random() * Object.values(emo).length)]
} else if (wd3feel == "Common" && wd3typ == "Any") {
var wd3val = Object.values(com)[Math.floor(Math.random() * Object.values(com).length)]
} else if (wd3feel == "Uncommon" && wd3typ == "Any") {
var wd3val = Object.values(unc)[Math.floor(Math.random() * Object.values(unc).length)]
} else if (wd3feel == "Any" && wd3typ == "Any") {
var wd3val = Object.values(any)[Math.floor(Math.random() * Object.values(any).length)]
} }

var wd4feeling = document.getElementById("word4feel");
var wd4feel = wd4feeling.value;
var wd4type = document.getElementById("word4type");
var wd4typ = wd4type.value;
var wd4custom = document.getElementById("word4-cst");
var wd4cst = wd4custom.value;

if (wd4cst != "Custom / Blank") {
var wd4val = wd4cst;
} else {
if (wd4feel == "Power" && wd4typ == "Verb") {
var wd4val = Object.values(pwrvrb)[Math.floor(Math.random() * Object.values(pwrvrb).length)]
} else if (wd4feel == "Power" && wd4typ == "Subject") {
var wd4val = Object.values(pwrsub)[Math.floor(Math.random() * Object.values(pwrsub).length)]
} else if (wd4feel == "Power" && wd4typ == "Adjective") {
var wd4val = Object.values(pwradj)[Math.floor(Math.random() * Object.values(pwradj).length)]
} else if (wd4feel == "Power" && wd4typ == "Connector") {
var wd4val = Object.values(pwrcon)[Math.floor(Math.random() * Object.values(pwrcon).length)]
} else if (wd4feel == "Emotion" && wd4typ == "Verb") {
var wd4val = Object.values(emovrb)[Math.floor(Math.random() * Object.values(emovrb).length)]
} else if (wd4feel == "Emotion" && wd4typ == "Subject") {
var wd4val = Object.values(emosub)[Math.floor(Math.random() * Object.values(emosub).length)]
} else if (wd4feel == "Emotion" && wd4typ == "Adjective") {
var wd4val = Object.values(emoadj)[Math.floor(Math.random() * Object.values(emoadj).length)]
} else if (wd4feel == "Emotion" && wd4typ == "Connector") {
var wd4val = Object.values(emocon)[Math.floor(Math.random() * Object.values(emocon).length)]
} else if (wd4feel == "Common" && wd4typ == "Verb") {
var wd4val = Object.values(comvrb)[Math.floor(Math.random() * Object.values(comvrb).length)]
} else if (wd4feel == "Common" && wd4typ == "Subject") {
var wd4val = Object.values(comsub)[Math.floor(Math.random() * Object.values(comsub).length)]
} else if (wd4feel == "Common" && wd4typ == "Adjective") {
var wd4val = Object.values(comadj)[Math.floor(Math.random() * Object.values(comadj).length)]
} else if (wd4feel == "Common" && wd4typ == "Connector") {
var wd4val = Object.values(comcon)[Math.floor(Math.random() * Object.values(comcon).length)]
}  else if (wd4feel == "Uncommon" && wd4typ == "Verb") {
var wd4val = Object.values(uncvrb)[Math.floor(Math.random() * Object.values(uncvrb).length)]
} else if (wd4feel == "Uncommon" && wd4typ == "Subject") {
var wd4val = Object.values(uncsub)[Math.floor(Math.random() * Object.values(uncsub).length)]
} else if (wd4feel == "Uncommon" && wd4typ == "Adjective") {
var wd4val = Object.values(uncadj)[Math.floor(Math.random() * Object.values(uncadj).length)]
} else if (wd4feel == "Uncommon" && wd4typ == "Connector") {
var wd4val = Object.values(unccon)[Math.floor(Math.random() * Object.values(unccon).length)]
} else if (wd4feel == "Any" && wd4typ == "Connector") {
var wd4val = Object.values(con)[Math.floor(Math.random() * Object.values(con).length)]
} else if (wd4feel == "Any" && wd4typ == "Verb") {
var wd4val = Object.values(vrb)[Math.floor(Math.random() * Object.values(vrb).length)]
} else if (wd4feel == "Any" && wd4typ == "Adjective") {
var wd4val = Object.values(adj)[Math.floor(Math.random() * Object.values(adj).length)]
} else if (wd4feel == "Any" && wd4typ == "Subject") {
var wd4val = Object.values(sub)[Math.floor(Math.random() * Object.values(sub).length)]
} else if (wd4feel == "Power" && wd4typ == "Any") {
var wd4val = Object.values(pwr)[Math.floor(Math.random() * Object.values(pwr).length)]
} else if (wd4feel == "Emotion" && wd4typ == "Any") {
var wd4val = Object.values(emo)[Math.floor(Math.random() * Object.values(emo).length)]
} else if (wd4feel == "Common" && wd4typ == "Any") {
var wd4val = Object.values(com)[Math.floor(Math.random() * Object.values(com).length)]
} else if (wd4feel == "Uncommon" && wd4typ == "Any") {
var wd4val = Object.values(unc)[Math.floor(Math.random() * Object.values(unc).length)]
} else if (wd4feel == "Any" && wd4typ == "Any") {
var wd4val = Object.values(any)[Math.floor(Math.random() * Object.values(any).length)]
} }

var wd5feeling = document.getElementById("word5feel");
var wd5feel = wd5feeling.value;
var wd5type = document.getElementById("word5type");
var wd5typ = wd5type.value;
var wd5custom = document.getElementById("word5-cst");
var wd5cst = wd5custom.value;

if (wd5cst != "Custom / Blank") {
var wd5val = wd5cst;
} else {
if (wd5feel == "Power" && wd5typ == "Verb") {
var wd5val = Object.values(pwrvrb)[Math.floor(Math.random() * Object.values(pwrvrb).length)]
} else if (wd5feel == "Power" && wd5typ == "Subject") {
var wd5val = Object.values(pwrsub)[Math.floor(Math.random() * Object.values(pwrsub).length)]
} else if (wd5feel == "Power" && wd5typ == "Adjective") {
var wd5val = Object.values(pwradj)[Math.floor(Math.random() * Object.values(pwradj).length)]
} else if (wd5feel == "Power" && wd5typ == "Connector") {
var wd5val = Object.values(pwrcon)[Math.floor(Math.random() * Object.values(pwrcon).length)]
} else if (wd5feel == "Emotion" && wd5typ == "Verb") {
var wd5val = Object.values(emovrb)[Math.floor(Math.random() * Object.values(emovrb).length)]
} else if (wd5feel == "Emotion" && wd5typ == "Subject") {
var wd5val = Object.values(emosub)[Math.floor(Math.random() * Object.values(emosub).length)]
} else if (wd5feel == "Emotion" && wd5typ == "Adjective") {
var wd5val = Object.values(emoadj)[Math.floor(Math.random() * Object.values(emoadj).length)]
} else if (wd5feel == "Emotion" && wd5typ == "Connector") {
var wd5val = Object.values(emocon)[Math.floor(Math.random() * Object.values(emocon).length)]
} else if (wd5feel == "Common" && wd5typ == "Verb") {
var wd5val = Object.values(comvrb)[Math.floor(Math.random() * Object.values(comvrb).length)]
} else if (wd5feel == "Common" && wd5typ == "Subject") {
var wd5val = Object.values(comsub)[Math.floor(Math.random() * Object.values(comsub).length)]
} else if (wd5feel == "Common" && wd5typ == "Adjective") {
var wd5val = Object.values(comadj)[Math.floor(Math.random() * Object.values(comadj).length)]
} else if (wd5feel == "Common" && wd5typ == "Connector") {
var wd5val = Object.values(comcon)[Math.floor(Math.random() * Object.values(comcon).length)]
}  else if (wd5feel == "Uncommon" && wd5typ == "Verb") {
var wd5val = Object.values(uncvrb)[Math.floor(Math.random() * Object.values(uncvrb).length)]
} else if (wd5feel == "Uncommon" && wd5typ == "Subject") {
var wd5val = Object.values(uncsub)[Math.floor(Math.random() * Object.values(uncsub).length)]
} else if (wd5feel == "Uncommon" && wd5typ == "Adjective") {
var wd5val = Object.values(uncadj)[Math.floor(Math.random() * Object.values(uncadj).length)]
} else if (wd5feel == "Uncommon" && wd5typ == "Connector") {
var wd5val = Object.values(unccon)[Math.floor(Math.random() * Object.values(unccon).length)]
} else if (wd5feel == "Any" && wd5typ == "Connector") {
var wd5val = Object.values(con)[Math.floor(Math.random() * Object.values(con).length)]
} else if (wd5feel == "Any" && wd5typ == "Verb") {
var wd5val = Object.values(vrb)[Math.floor(Math.random() * Object.values(vrb).length)]
} else if (wd5feel == "Any" && wd5typ == "Adjective") {
var wd5val = Object.values(adj)[Math.floor(Math.random() * Object.values(adj).length)]
} else if (wd5feel == "Any" && wd5typ == "Subject") {
var wd5val = Object.values(sub)[Math.floor(Math.random() * Object.values(sub).length)]
} else if (wd5feel == "Power" && wd5typ == "Any") {
var wd5val = Object.values(pwr)[Math.floor(Math.random() * Object.values(pwr).length)]
} else if (wd5feel == "Emotion" && wd5typ == "Any") {
var wd5val = Object.values(emo)[Math.floor(Math.random() * Object.values(emo).length)]
} else if (wd5feel == "Common" && wd5typ == "Any") {
var wd5val = Object.values(com)[Math.floor(Math.random() * Object.values(com).length)]
} else if (wd5feel == "Uncommon" && wd5typ == "Any") {
var wd5val = Object.values(unc)[Math.floor(Math.random() * Object.values(unc).length)]
} else if (wd5feel == "Any" && wd5typ == "Any") {
var wd5val = Object.values(any)[Math.floor(Math.random() * Object.values(any).length)]
} }

var wd6feeling = document.getElementById("word6feel");
var wd6feel = wd6feeling.value;
var wd6type = document.getElementById("word6type");
var wd6typ = wd6type.value;
var wd6custom = document.getElementById("word6-cst");
var wd6cst = wd6custom.value;

if (wd6cst != "Custom / Blank") {
var wd6val = wd6cst;
} else {
if (wd6feel == "Power" && wd6typ == "Verb") {
var wd6val = Object.values(pwrvrb)[Math.floor(Math.random() * Object.values(pwrvrb).length)]
} else if (wd6feel == "Power" && wd6typ == "Subject") {
var wd6val = Object.values(pwrsub)[Math.floor(Math.random() * Object.values(pwrsub).length)]
} else if (wd6feel == "Power" && wd6typ == "Adjective") {
var wd6val = Object.values(pwradj)[Math.floor(Math.random() * Object.values(pwradj).length)]
} else if (wd6feel == "Power" && wd6typ == "Connector") {
var wd6val = Object.values(pwrcon)[Math.floor(Math.random() * Object.values(pwrcon).length)]
} else if (wd6feel == "Emotion" && wd6typ == "Verb") {
var wd6val = Object.values(emovrb)[Math.floor(Math.random() * Object.values(emovrb).length)]
} else if (wd6feel == "Emotion" && wd6typ == "Subject") {
var wd6val = Object.values(emosub)[Math.floor(Math.random() * Object.values(emosub).length)]
} else if (wd6feel == "Emotion" && wd6typ == "Adjective") {
var wd6val = Object.values(emoadj)[Math.floor(Math.random() * Object.values(emoadj).length)]
} else if (wd6feel == "Emotion" && wd6typ == "Connector") {
var wd6val = Object.values(emocon)[Math.floor(Math.random() * Object.values(emocon).length)]
} else if (wd6feel == "Common" && wd6typ == "Verb") {
var wd6val = Object.values(comvrb)[Math.floor(Math.random() * Object.values(comvrb).length)]
} else if (wd6feel == "Common" && wd6typ == "Subject") {
var wd6val = Object.values(comsub)[Math.floor(Math.random() * Object.values(comsub).length)]
} else if (wd6feel == "Common" && wd6typ == "Adjective") {
var wd6val = Object.values(comadj)[Math.floor(Math.random() * Object.values(comadj).length)]
} else if (wd6feel == "Common" && wd6typ == "Connector") {
var wd6val = Object.values(comcon)[Math.floor(Math.random() * Object.values(comcon).length)]
}  else if (wd6feel == "Uncommon" && wd6typ == "Verb") {
var wd6val = Object.values(uncvrb)[Math.floor(Math.random() * Object.values(uncvrb).length)]
} else if (wd6feel == "Uncommon" && wd6typ == "Subject") {
var wd6val = Object.values(uncsub)[Math.floor(Math.random() * Object.values(uncsub).length)]
} else if (wd6feel == "Uncommon" && wd6typ == "Adjective") {
var wd6val = Object.values(uncadj)[Math.floor(Math.random() * Object.values(uncadj).length)]
} else if (wd6feel == "Uncommon" && wd6typ == "Connector") {
var wd6val = Object.values(unccon)[Math.floor(Math.random() * Object.values(unccon).length)]
} else if (wd6feel == "Any" && wd6typ == "Connector") {
var wd6val = Object.values(con)[Math.floor(Math.random() * Object.values(con).length)]
} else if (wd6feel == "Any" && wd6typ == "Verb") {
var wd6val = Object.values(vrb)[Math.floor(Math.random() * Object.values(vrb).length)]
} else if (wd6feel == "Any" && wd6typ == "Adjective") {
var wd6val = Object.values(adj)[Math.floor(Math.random() * Object.values(adj).length)]
} else if (wd6feel == "Any" && wd6typ == "Subject") {
var wd6val = Object.values(sub)[Math.floor(Math.random() * Object.values(sub).length)]
} else if (wd6feel == "Power" && wd6typ == "Any") {
var wd6val = Object.values(pwr)[Math.floor(Math.random() * Object.values(pwr).length)]
} else if (wd6feel == "Emotion" && wd6typ == "Any") {
var wd6val = Object.values(emo)[Math.floor(Math.random() * Object.values(emo).length)]
} else if (wd6feel == "Common" && wd6typ == "Any") {
var wd6val = Object.values(com)[Math.floor(Math.random() * Object.values(com).length)]
} else if (wd6feel == "Uncommon" && wd6typ == "Any") {
var wd6val = Object.values(unc)[Math.floor(Math.random() * Object.values(unc).length)]
} else if (wd6feel == "Any" && wd6typ == "Any") {
var wd6val = Object.values(any)[Math.floor(Math.random() * Object.values(any).length)]
} }

var wd7feeling = document.getElementById("word7feel");
var wd7feel = wd7feeling.value;
var wd7type = document.getElementById("word7type");
var wd7typ = wd7type.value;
var wd7custom = document.getElementById("word7-cst");
var wd7cst = wd7custom.value;

if (wd7cst != "Custom / Blank") {
var wd7val = wd7cst;
} else {
if (wd7feel == "Power" && wd7typ == "Verb") {
var wd7val = Object.values(pwrvrb)[Math.floor(Math.random() * Object.values(pwrvrb).length)]
} else if (wd7feel == "Power" && wd7typ == "Subject") {
var wd7val = Object.values(pwrsub)[Math.floor(Math.random() * Object.values(pwrsub).length)]
} else if (wd7feel == "Power" && wd7typ == "Adjective") {
var wd7val = Object.values(pwradj)[Math.floor(Math.random() * Object.values(pwradj).length)]
} else if (wd7feel == "Power" && wd7typ == "Connector") {
var wd7val = Object.values(pwrcon)[Math.floor(Math.random() * Object.values(pwrcon).length)]
} else if (wd7feel == "Emotion" && wd7typ == "Verb") {
var wd7val = Object.values(emovrb)[Math.floor(Math.random() * Object.values(emovrb).length)]
} else if (wd7feel == "Emotion" && wd7typ == "Subject") {
var wd7val = Object.values(emosub)[Math.floor(Math.random() * Object.values(emosub).length)]
} else if (wd7feel == "Emotion" && wd7typ == "Adjective") {
var wd7val = Object.values(emoadj)[Math.floor(Math.random() * Object.values(emoadj).length)]
} else if (wd7feel == "Emotion" && wd7typ == "Connector") {
var wd7val = Object.values(emocon)[Math.floor(Math.random() * Object.values(emocon).length)]
} else if (wd7feel == "Common" && wd7typ == "Verb") {
var wd7val = Object.values(comvrb)[Math.floor(Math.random() * Object.values(comvrb).length)]
} else if (wd7feel == "Common" && wd7typ == "Subject") {
var wd7val = Object.values(comsub)[Math.floor(Math.random() * Object.values(comsub).length)]
} else if (wd7feel == "Common" && wd7typ == "Adjective") {
var wd7val = Object.values(comadj)[Math.floor(Math.random() * Object.values(comadj).length)]
} else if (wd7feel == "Common" && wd7typ == "Connector") {
var wd7val = Object.values(comcon)[Math.floor(Math.random() * Object.values(comcon).length)]
}  else if (wd7feel == "Uncommon" && wd7typ == "Verb") {
var wd7val = Object.values(uncvrb)[Math.floor(Math.random() * Object.values(uncvrb).length)]
} else if (wd7feel == "Uncommon" && wd7typ == "Subject") {
var wd7val = Object.values(uncsub)[Math.floor(Math.random() * Object.values(uncsub).length)]
} else if (wd7feel == "Uncommon" && wd7typ == "Adjective") {
var wd7val = Object.values(uncadj)[Math.floor(Math.random() * Object.values(uncadj).length)]
} else if (wd7feel == "Uncommon" && wd7typ == "Connector") {
var wd7val = Object.values(unccon)[Math.floor(Math.random() * Object.values(unccon).length)]
} else if (wd7feel == "Any" && wd7typ == "Connector") {
var wd7val = Object.values(con)[Math.floor(Math.random() * Object.values(con).length)]
} else if (wd7feel == "Any" && wd7typ == "Verb") {
var wd7val = Object.values(vrb)[Math.floor(Math.random() * Object.values(vrb).length)]
} else if (wd7feel == "Any" && wd7typ == "Adjective") {
var wd7val = Object.values(adj)[Math.floor(Math.random() * Object.values(adj).length)]
} else if (wd7feel == "Any" && wd7typ == "Subject") {
var wd7val = Object.values(sub)[Math.floor(Math.random() * Object.values(sub).length)]
} else if (wd7feel == "Power" && wd7typ == "Any") {
var wd7val = Object.values(pwr)[Math.floor(Math.random() * Object.values(pwr).length)]
} else if (wd7feel == "Emotion" && wd7typ == "Any") {
var wd7val = Object.values(emo)[Math.floor(Math.random() * Object.values(emo).length)]
} else if (wd7feel == "Common" && wd7typ == "Any") {
var wd7val = Object.values(com)[Math.floor(Math.random() * Object.values(com).length)]
} else if (wd7feel == "Uncommon" && wd7typ == "Any") {
var wd7val = Object.values(unc)[Math.floor(Math.random() * Object.values(unc).length)]
} else if (wd7feel == "Any" && wd7typ == "Any") {
var wd7val = Object.values(any)[Math.floor(Math.random() * Object.values(any).length)]
} }

/* <-- GENERATE OUTPUT VALUES --> */

var allwds = wd1val.concat (" ", wd2val, " ", wd3val, " ", wd4val, " ", wd5val, " ", wd6val, " ", wd7val);
/* console.log(allwds); */
document.getElementById("headline-output").value = allwds;
});
};
