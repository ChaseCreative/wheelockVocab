
function shuffle(array){
  var m = array.length, t, i;

  while (m > 0)
  {
	i = Math.floor(Math.random() * m--);
	t = array[m];
	array[m] = array[i];
	array[i] = t;
  }
  return array;
}

//This initiates an empty array
var vocArry = [];


var width = 0;

var movLength = 0;
var movement = 0;
var click = 0;


function move() {
document.getElementById("myProgress").style.display = "block" ;
var bar = document.getElementById("myBar");
//var width = 0;


console.log(vocArry.length);
console.log(movLength);
console.log(width);
    //var movement = 100/click;
    //var movement = click;

    //console.log(movement);

      if (width >= 100) {
        bar.style.width = 0;
      } else {
        width += movLength;
        bar.style.width = width + "%";
        //width += movLength;

      }
    }





function resetGame(){

//This retrieves the data based on the user's selection
userInputValue();

//var arrLength = vocArry.length
// This shuffles the data randomly.
shuffle(vocArry);
//movLength = 100/vocArry.length;
width = 0;
}

//This loads the data in the function startGame().
//resetGame();


function userInputValue(){
  //This accesseses the user's input and then sets the data
  var x = document.getElementById("labelBox").value;
  console.log(x);
  if (x==1){
    vocArry =[["me","me, myself"],["quid","what"],["nihil","nothing"],["nōn","not"],["saepe","often"],["sī","if"],["amō, amāre, amāvī, amātum","to love, like"],["cōgitō, cōgitāre, cōgitāvī, cōgitātum","to think, ponder, consider, plan"],["dō, dāre, dedī, datum","to give, offer"],["dēbeō, dēbēre, dēbuī, dēbitum","to owe; ought, must, should"],["ō, ēre, uī, itum",""],["monō, monmonmonēre, monmonuī, monitum","to remind, advise, warn"],["salvō, salvēre","to be well, be in good health"],["errō, errāre, errāvī, errātum","to wander; err, go astray, make a mistake, be mistaken"],["conservō, conservconservconservāre, conservconservāvī, conservātum","to preserve, conserve, maintain"],["laudō, laudāre, laudāvī, laudātum","to praise"],["vocō, vocāre, vocāvī, vocātum","to call, summon"],["salvē (salvēte)","hello, greetings"],["servō, servāre, servāvī, servātum","to preserve, save, keep, guard"],["terreō, terrēre, terruī, territum","to frighten, terrify"],["valeō, valēre, valuī,valiturum","to be strong, have power; be well"],["videō, vidēre, vīdī, visum","to see; observe,understands"],["valē (valēte)","good-bye, farewll"]];

  } else if (x==2){
    vocArry = [["fama, famae, f.","rumor, report; fame, reputation"],["forma, formae, f.","form, shape; beauty"],["fortuna, fortunae, f.","fortune, luck"],["īra, īrae, f.","anger"],["nauta, nautae, m.","sailor"],["patria, patriae, f.","fatherland, native land, (one's) country"],["pecūnia, pecūniae, f.","money"],["philosophia, pecūniae, f.","philosophy"],["poēta, poētae, m.","poet"],["porta, portae, f.","gate, entrance"],["puella, puellae, f.","girl"],["rosa, rosae, f.","rose"],["sententia, sententiae, f.","feeling,thought, opinion, vote, sentence"],["vita, vitae, f.","life; mode of life"],["antīquus, antīqua, antīquum","ancient, old-time"],["magnus, magna, magnum","large, great; important"],["meus, mea, meum","my"],["multus, multa, multum","much, many"],["tuus, tua, tuum","your"],["et","and; even"],["et ... et","both ... and"],["sed","but"],["est","is"],["Ō","O! Oh!"],["sine (+ ABL.)","wihtout"]];

  } else if (x==3){
    vocArry = [["ager, agrī, m.","field, farm"],["amīcus, amīcī, m.","friend"],["fīlius, fīliī, m.","son"],["numerus, numerī, m.","number"],["populus, populī, m.","the people, a people, a nation"],["amīca, amīcae., f.","friend"],["agricola, agricolae., m.","farmer"],["fēmina, fēminae., f.","woman"],["fīlia, fīliae., f.","daughter"],["sapientia, sapientiae., f.","wisdom"],["puer, puerī, m.","boy"],["vir, virī, m.","man, hero"],["avārus,avāra, avārum","greedy, avaricious"],["Rōmānus, Rōmāna, Rōmānum","Roman"],["paucī, paucae, paeca","few, a few"],["de (+ ABL.)","down from. from; concerning, about"],["in (+ ABL.)","in, on"],["hodiė","today"],["semper","always"],["habeō, habēre, habuī, habitum","to have, hold, possess; consider, regard"],["satiō, satiāre, satiāvī, satiātum","to satisfy, sate"]];

  } else if (x==4){
    vocArry = [["bāsium, bāsiī, n.","kiss"],["bellum, bellī, n.","war"],["cōnsilium, cōnsiliī, n.","plan, purpose, advice, counsel, judgment, wisdom"],["cura, curae, f.","care, attention, caution, anxiety"],["dōnum, dōnī, n.","gift, present"],["exitium, exitiī, n.","destruction, ruin"],["magistra, magistrae, f.","teacher, mistress"],["magister, magistrī, m.","teacher, master"],["officium, officiī, n.","duty, service"],["perīculum, perīculī, n.","danger"],["remedium, remediī, n.","cure, remedy"],["mora, morae, f.","delay"],["nihil","nothing"],["oculus, oculī, m.","eye"],["bellus, bella, bellum","pretty, handsome, charming"],["bonus, bona, bonum","good, kind"],["humānus, humāna, humānum","human, pertaining to man; humane, kind, refined, cultivated"],["malus, mala, malum","bad, wicked, eviil"],["parvus, parva, parvum","small, little"],["stultus, stulta, stultum","foolish"],["stultum, stultī, n.","a fool"],["vērus, vēra, vērum","true, real, proper"],["iuvo, iuvāre, iuvī, iutum", "to help, aid, assist; please"],["sum, esse, fuī, futurm","to be, exist"],["iuvo, iuvāre, iuvī, iutum", "to help, aid, assist"]];

  } else if (x==5){
    vocArry = [["adulēscentia, adulēscentia, f.","youth, young manhood; youthfulness"],["animus, animī, m.","soul, spirit, mind"],["animī, animōrum, m.","high spirits, pride, courage"],["caelum, caelī, n.","sky"],["culpa, culpae, f.","fault, blame"],["glōria, glōriae, f.","glory, fame"],["verbum, verbī, n.","word"],["tē","you"],["līber, lībera, līberum","free"],["noster, nostra, nostrum","our, ours"],["pulcher, pulchra, pulchrum","beautiful, handsome; fine"],["sānus, sāna, sānum","sound, healthy, sane"],["igitur","therefore, consequently"],["propter (+ ACC.)","on account of, because of"],["crās","tomorrow"],["heri","yesterday"],["quandō","when"],["sī quandō","if ever"],["satis","enough, sufficient"],["tum","then, at that time"],["cēnō, cēnāre, cēnāvì, cēnātum","to dine"],["culpō, culpāre, culpāvì, culpātum","to blame, censure"],["superō, superāre, superāvī, superātum","to be above, have the upper hand, surpass; overcome, conquer"],["remaneō, remanēre, remansī, remansurum","to remain, stay, stay behind, abide, continue"],["maneō, manēre, mansī, mansurum","to remain, stay, stay behind, abide, continue"],["super","above"]];

  }  else if (x==6){
    vocArry = [["deus, deī, m.","god"],["discipulus, discipulī, m.","student, pupil, learner"],["discipula, discipulae, f.","student, pupil, learner"],["insidiae, insidiārum, f.","ambush, plot, treachery"],["liber, librī, m.","book"],["tyrānnus, tyrānnī, m.","tyrant"],["vitium, vitiī, n.","fault, crime, vice"],["Graecus, Graeca, Graecum","Greek"],["Graecus, Graecī, m.","a Greek"],["perpētuus, perpētua, perpētuum","perpetual, lasting, uninterrupted, continuous"],["plēnus, plēna, plēnum","full, abundant, generous"],["salvus, salva, salvum","safe, sound"],["secundus, secunda, secundum","second, favorable"],["vester, vestra, vestrum","your"],["-que","and"],["ubi","where, when"],["ibi","there"],["nunc","now"],["quārē","why, wherefore"],["possum, posse, potuī","to be able, can, could, have power"],["tolerō, tolerāre, tolerāvī, tolerātum","to bear, endure"]];

  } else if (x==7){
    vocArry = [["",""],["",""],["",""],["",""],["",""],["",""],["",""],["",""],["",""],["",""],["",""],["",""],["",""],["",""],["",""],["",""],["",""],["",""],["",""],["",""],["",""],["",""],["",""],["",""]];

  } else if (x==8){
    vocArry = [["amor, amoris, m.","love"],["carmen, carminis, n.","song, poem"],["civitās, civitātis, f.","state, citizenship"],["corpus, corporis, n.","body"],["homo, hominis, m.","man, human being"],["labor, laboris, m.","labor, work, toil; a work, production"],["littera, litterae f.","a letter of the alphabet"],["litterae, litterārum, f.","a lettler"],["mōs, mōris, m.","cusotm, manner, manner"],["mōres, mōrum, m.","habits, morals, character"],["nōmen, nōminis, n.","name"],["pāx, pācis, f.","peace"],["regīna, regīnae, f.","queen"],["rēx, rēgis, m.","king"],["tempus, temporis, n.","time; occasion, opportunity"],["terra, terrae, f.","earthk ground, land, country"],["uxor, uxoris, f.","wife"],["virgō, virginis, f.","maiden, virgin"],["virtūs, virtūtis, f.","manliness, courage, excellence, character, worth, virtue"],["no vus, nov a, novum","new, strange"],["post (+ ACC)","after, behind"],["sub (+ ABL.)","under"],["sub (+ ACC.)","under, up under, close to; down tto/into, to/at the foot of"],["audeō, audēre, ausus sum","to dare"],["necō, necāre, necāvī, necātum","to murder, kill"]];

  } else if (x==9){
    vocArry = [["locus, locī, m.","place, passage in literature"],["loca, locōrum, n.,","places, region"],["morbus, morbī, m.","disease, sickness"],["studium, studiī, n.","eagerness, zeal, pursuit, study"],["hic, haec, hoc","this, the latter"],["ille, illa, illud","that, the former"],["iste, ista, istud","that of yours, that"],["alius, alia, aliud","other, another"],["aliī ... aliī","some ... others"],["alter, altera, alterum","the other (of two), the second"],["neuter, neutra, neutrum","not either, neither"],["nūllus, nūlla, nūllum","not any, no, none"],["sōlus, sōla, sōlum","alone, only, the only"],["nōn sōlum ... sed etiam","not only ... but also"],["tōtus, tōta, tōtum","whole, entire"],["ullus, ulla, ullum","any"],["ūnus, ūna, ūnum","one, single, alone"],["uter, uttra, utrum","either, which (of two)"],["enim","for, in fact, truly"],["in (+ ACC.)","into, toward, against"],["nimis or nimium","too, too much, excessively"]];

  } else if (x==10){
    vocArry =[["amicitia, amicitiae, f.","friendship"],["cupiditās, cupiditātis, f.","desire, longing, passion, cupidity, avarice"],["hōra, hōrae, f.","hour, time"],["natura, naturae, f.","nature"],["senectūs, senectūtis, f.","old age"],["timor, timoris, m.","fear"],["veritās, veritātis, f.","truth"],["voluptās, voluptātis, f.","pleasure"],["via, viae, f.","way, road, street"],["beãtus, beāta, beātum","happy, fortunate, blessed"],["quoniam","since"],["cum (+ ABL.)","with"],["audiō, audīre, audīvī, audītum","to hear"],["veniō, venīre, vēnī, ventum","to come"],,["inveniō, invenīre, invēnī, inventum","to find, come upon"]["capiō, capere, cēpī, captum","to take, capture, seize"],["dīcō, dīcere, dīxī, dictum","to say, tell, speak; name, call"],["faciō, facere, fēcī, factum","to make, do, accomplish"],["fugiō, fugere, fūgī, fugitūrum","to flee, hurry away, escape, go into exile; avoid, shun"],["vivō, vivere, vīxī, vīctum","to live"]];

  } else if (x==11){
    vocArry =[["caput, capitis, n.","head; leader; beginning; life; heading; chapter"],["cōnsul, cōnsulis, m.","consul"],["nēmo, nullīus, nēminī, nēminem, nullō or nullã, m./f.","no one, nobody"],["ego (meī)","I (of me)"],["tū (tuī)","you (of you)"],["is, ea, id","he, she, it"],["i.e. = id est","that is"],["īdem, eadem, īdem","the same"],["amīcus, amīca, amīcum","friendly"],["cārus, cāra, cārum","dear"],["quod","because"],["neque, nec","and not, nor"],["neque ... neque or nec ... nec","neither ... nor"],["autem","however, moreover"],["bene","well, satisfactorily, quite"],["etiam","even, also"],["intellego, intellegere, intellēxi, intellectum","to understand"],["mittō, mittere, mīsi, missus","to send, let go"],["sentio, sentīre, sēnsi, sensum","to feel, perceive, think, experience"]];

  } else if (x==12){
    vocArry =[["adulēscens, adulēscentia, m./f.","young man or woman"],["annus, annī, m.","year"],["Ãsia, Āsiae, f.","Asia"],["Caesar, Caesaris, m.","Caesar"],["māter, mātris, f.","mother"],["medicus, medicī, m.","doctor, physician"],["medica, medicae, f.","doctor, physician"],["pater, patris, m.","father"],["patientia, patientia, f.","suffering; patience, endurance"],["principium, principiī, n.","beginning"],["acerbus, acerba, acerbum","harsh, bitter, grievous"],["pro (+ ABL.)","in front of, before, on behalf of, for the sake of, in return for, instead of, for, as"],["diū","for a long time"],["nūper","recently"],["amittō, amittere, amīsi, amissus","to lose, let go, send away"],["cadō, cadere, cecidī, cāsurum","to fall"],["creō, creāre, creāvī, creātum","to create"]];

  } else if (x==13){
    vocArry =[["divitiae, divitiārum, f.","riches, wealth"],["factum, factī, n.","deed, cat, achievement"],["signum, signī, n.","sign, signal, indication; seal"],["ipse, ipsa, ipsum","myself, yourself, himself, herself, itself, etc."],["quisque, quidque","each one, each person, each thing"],["suī (gen.)","himself, herself, itself, themselves"],["doctus, docta, doctum","taught learned"],["fortūnātus, fortūnāta, fortūnātum","lucky, fortunate, happy"],["suus, suua, suum","his own, her own, its own, their own"],["nam","for"],["ante (+ ACC.)","before"],["per (+ ACC.)","through, by"],["ōlim","once (upon a time), long ago, formerly, in the future"],["alō, alere, aluī, altum","to nourish, support, sustain, cherish, increase"],["dīligo, dīligere, dīlēxi, dīlectum","to esteem, love"],["iungō, iungere, iūnxī, iunctum","to join"],["stō, stāre, stetī, stātum","to stand, stand still or firm"]];

  } else if (x==14){
    vocArry =[["animal, animālis, n.","animal, a living creature"],["aqua, aquae, f.","water"],["ars, artis, f.","art, skill"],["auris, auris, f.","ear"],["cīvis, cīvis, m./f.","citizen"],["iūs, iūris, n.","right, justice, law"],["mare, maris, n.","sea"],["mors, mortis, f.","death"],["nūbes, nūbis, f.","cloud"],["ōs, ōris, n.","mouth, face"],["pars, partis, f.","part, share; direction"],["Rōma, Rōmae, f.","Rome"],["turba, turbae, f.","uproar, disturbance; mob, crowd, multitude"],["urbs, urbis, f.","city"],["vīs, vīs, f.","force, power, violence"],["vīrēs, vīrium, f.","strength"],["ā or ab (+ ABL.)","away from, from; by"],["trāns (+ ACC.)","across"],["appellō, appellāre, appellāvī, appellātum","to speak to, address (as), call, name"],["mūtō, mūtāre, mūtāvī, mūtātum","to change, alter; exchange"],["currō, currere, cucurrī, cursum","to run, rush, move quickly"]["teneō, tenere, tenuī, tentum","to hold, keep, possess; restrain"],["vītō, vītāre, vītāvī, vītātum","to avoid, shun"]];

  } else if (x==15){
    vocArry = [["Italia, Italiae, f.","Italy"],["memoria, memoriae, f.","memory, recollection"],["tempestās, tempestātis, f.","period of time, season, weather, storm"],["centum","one hundred"],["mīlle","thousand"],["miser, misera, miserum","wrectched, miserable, unfortunate"],["inter","between, among"],["itaque","and so, therefor"],["committō, committere, commīsī, commissum","to entrust, commit"],["exspectō, exspectexspectāre, exspectāvī, exspectātum","to look for, expec t, await"],["iaciō, iacere, iēci, iactum","to throw, hurl"],["timeō, timēre, timuī","to fear, be afraid (of)"],["ūnus, ūna, ūnum","one"],["duo, duae, duo","two"],["trēs, trēs, tria","three"],["quattuor","four"],["quinque","five"],["sex","six"],["septem","seven"],["octō","eight"],["novem","nine"],["decem","ten"],["ūndecim","eleven"],["duodecim","tweleve"]["tredcim","thirteen"],["quattuordecim","fourteen"],["quīndecim","fifteen"],["sēdecim","sixteen"],["septendecim","seventeen"],["duodēvīgintī","eighteen"],["ūndēvīgintī","nineteen"],["vīgintī ūnus","twenty-one"],["prīmus, prīma, prīmum","first"],["secundus, secunda, secundum","second"],["tertius, tertia, tertium","third"],["quārtus, quārta, quārtum","fourth"],["quintus, quinta, quintum","fifth"],["sextus, sexta, sextum","sixth"],["septimus, septima, septimum","seventh"],["octāvus, octāva, octāvum","eighth"],["nōnus, nōna, nōnum","ninth"],["decimus, decima, decimum","tenth"],["ūndecimus, ūndecima, ūndecimum","eleventh"],["duodecimua, duodecima, duodecimum","twelth"]];

  } else if (x==16){
    vocArry =[["aetas, aetātis, f.","period of life, life, age, an age, time"],["audītor, audītor, m.","hearer, listener, member of an audience"],["clēmentia, clēmentiae, f.","mildness, gentleness, mercy"],["mēns, mēntis, f.","mind"],["satura, saurae, f.","satire"],["ācer, ācris, ācre","sharp, keen, eager; severe, fierce"],["brevis, brevis, breve","short, small, brief"],["celer, celeris, celere","swift, quick, rapid"],["difficilis, difficilis, difficile","difficult"],["dulcis, dulcis, dulce","sweet; pleasant, agreeable"],["facilis, facilis, facile","easy, agreeable"],["fortis, forttis, forte","strong, brave"],["ingēns, ingēns, ingēns (gen. ingentis)","huge"],["iūcundus, iūcunda, iūcundum","pleasant, delightful, agreeable"],["longus, longa, longum","long"],["omnis, omnis, omne","every, all"],["potēns, potēns, potēns (gen. potentis,)","able, powerful"],["senex, senex, senex (gen. senis)","old, aged; old man"],["quam","how"],["regō, regere, rēxī, rectum","to rule, guide, direct"]];

  } else if (x==17){
    vocArry =[["libellus, libellī, m.","little book"],["quī, quae, quod","who, which, what, that"],["caecus, caeca, caecum","blind"],["levis, leve","light; easy; slight, trivial"],["aut","or"],["aut ... aut","either ... or"],["cito","quickly"],["quoque","also, too"],["admittō, admittere, admīsi, admissum","to admit, receive, let in"],["coepī, coepisse, coeptum","began"],["cupio, cupere, cupīvī, cupītum","to desire, wish, long for"],["dēleo, dēlēre, dēlēvī, dēlētum","to destroy, wipe out, erase"],["dēsīderō, dēsīderāre, dēsīderāvì, dēsīderātum","to desire, long for, miss"],["incipiō, incipere, incēpī, inceptum","to begin"],["nāvigō, nāvigāre, nāvigāvī, nāvigātum","to sail, navigate"],["neglegō, neglegāre, neglegāvī, neglegātum","to neglect, disregard"],["recitō, recitāre, recitāvī, recitātum","to recite, read aloud"]];

  } else if (x==18){
    vocArry = [["flūmen,flūminis, n.", "river"],["genus, generis, n.","origin, kind, type, sort, class"],["hostis, hostis, m.","an enemy"],["lūdus, lūdi, m.","game, sport; school"],["probitās, probitātis, f.","uprightness, honesty"],["sciēntia, sciēntiae, f.","knowledge"],["clārus, clāra, clārum","clear, bright; renowned, famous, illustrious"],["mortālis, mortālis, mortāle","mortal"],["cūr","why"],["deinde","thereupon, next then"],["fluō, fluere, flūxī, fluctum","to flow"],["legō, legere, lēgī, lectum","to pick out, choose, read"],["misceō, miscēre, miscuī, mixtum","to mix, stir up, disturb"],["moveō, movēre, mōvī, mōtum","to move, arouse, affect"],["videor, vidērī, vīsus sum","to be seen, seem, appear"]];

  } else if (x==19){
    vocArry = [["argūmentum, argūmentī, n.","proof, evidence, argument"],["auctor, auctōris, m.","increaser; author, originator"],["beneficium, beneficiī, n.","benefit, kindness, favor"],["familia, familiae, f.","household, family"],["Graecia, Graeciae, f.","Greece"],["iūdex, iūdicis, m.","judge, juror"],["iūdicium, iūdiciī, n.","jugment, decision, opinion; trial"],["scelus, sceleris, n.","evil deed, crime, sin, wickedness"],["quis? quid?","who? whose? whom? what?"],["quī? quae? quod?","what? which? what kind of; what (a)!"],["certus, certa, certum","definite, sure, certain, reliable"],["immortālis, immortālis, immortāle","immortal, not subject to death"],["at","but; but, mind youp; but, you say"],["nisi","if ... not, unless; except"],["contrā (+ ACC.)","against"],["iam","now, already, soon"],["dēlectō, dēlectāre, dēlectāvī, dēlectātum","to delight, charm, please"],["līberō, līberāre, līberāvī, līberātum","to free, liberate"],["parō, parāre, parāvī, parātum","o prepare, prove; get, obtain"]];
  } else if (x==20){
    vocArry = [["coniūratī, coniūratōrum","conspirators"],["cornū, cornūs, n.","horn"],["frūctus, frūctūs, m.","fruit; profit, benefit, enjoyment"],["genu, genūs, n.","knee"],["manus, manūs, f.","hand, handwriting; band"],["metus, metūs, m.","fear, dread, anxiety"],["mons, montis, m.","mountain"],["senātus, senātūs, m.","senate"],["sensus, sensūs, m.","feeling, sense"],["spīritus, spīritūs, m.","beath, breathing; spirit, soul"],["servitūs, servitūtis, f.","servitude, slavery"],["versus, versūs, m.","line of verse"],["commūnis, commūnis, commūne","common, general, of/for the community"],["dexter, dextra, dextrum","right, right-handed"],["sinister, sinistra, sinistrum","left, left-handed; harmful, ill-omened"],["careō, carēre, caruī, cariturum (+ ABL.)","to be without, deprived of, want, lack; be free from"],["defendō, defendere, defendī, defensum","to defend"],[", discēdere, discessī, discessum","to go away, depart"],["ōdī, ōdisse, õsum","to hate"],["prohibeō, prohibēre, prohibuī, prohibitum","to kee (back), prevent, hinder, restrain, prohibit"],["prōnūntiō, prōnūntiāre, prōnūntiāvī, prōnūntiātum","to proclaim, announce, declaim, pronounce"]];

  } else if (x==21){
    vocArry =[["casa, casae, f.","house, cottage, hut"],["causa, causae, f.","cause, reason; case, situation"],["causā (with a preceding genitive)","for the sake of, on account of"],["fenestra, fenestrae, f.","window"],["finis, finis, m.","end, limit, boundary; purpose"],["finēs, finium, m.","boundaries"],["gēns, gentis, f.","clan, race, nation, people"],["mundus, mundī, m.","wolrd, universe"],["nāvis, nāvis, f.","ship, boat"],["salūs, salūtis, f.","health, safety; greeting"],["Trōia, rōiae, f.","Troy"],["vīcīnus, vīcīnī, m.","neighbor"],["vīcīna, vīcīnae, f.","neighbor"],["vulgus, vulgī, n.","the common people, mob, rabble"],["asper, aspera, asperum","rough, harsh"],["atque or ac","and also, and even, and in fact"],["iterum","again, a second time"],["contineō, continēre, continuī, contentum","to hold together, keep, contain, enclose, restrain"],["iubeō, iubēre, iussī, iussum","to order, bid, command"],["laborō, laborāre, laborāvī, laborātum","to labor, work, be in distress"],["rapiō, rapere, rapuī, raptum","to seize, snatch, carry away"],["relinquō, relinquere, reliquī, relictum","to leave behind, leave, abandon, desert"],["sciō, scīre, scīvī, scitum","to know"],["nesciō, nescīre, nescīvī, nescitum","to not know, be ignorant"],["tangō, tangere, tetigī, tāctum","to touch"]];

  } else if (x==22){
    vocArry =[["diēs, dieī, m.","day"],["ferrum, ferrī, n.","iron; sword"],["fidēs, fideī, f.","faith, turst, trustworthiness, fidelity; promise, guarantee, protection"],["modus, modī, m.","measure, bound, limit, manner, method, mode, way"],["rēs, reī, f.","thing"],["rēs pūblica, reī pūblicae, f.","state, commonwealth, republic"],["spēs, speī, f.","hope"],["ignis, ignis, m.","fire"],["aequus, aequa, aequum","level, calm, even, equal, just; favorable"],["fēlīx, fēlīx, fēlīx (gen. fēlicis)","lucky, fortunate, happy"],["incertus, incerta, incertum","uncertain, unsure, doubtful"],["Latīnus, Latīna, Latīnum","Latin"],["medius, media, medium","middle; middle of"],["quondam","formerly, once"],["ultrā (+ ACC.)","on the other side of, beyond"],["prōtinus","immediately"],["cernō, cernere, crēvī, crētum","to distnguish, discern, perceive"],["ēripiō, ēripere, ēripuī, ēreptum","to snatch away, take away, rescue"],["inquit","he says or he said"],["tollo, tollere, sustulī, sublātum","to raise, lift up; take away, remove, destroy"]];

  } else if (x==23){
    vocArry =[["arx, arcis, f.","citadel, stronghold"],["dux, ducis, m.","leader, guide; commander, general"],["equus, equuī, m.","horse"],["hasta, hastae, f.","spear"],["īnsula, īnsulae, f.","island"],["lītus, lītoris, n.","shore, coast"],["mīles, mīlitis, m.","soldier"],["ōrātor, ōrātoris, m.","orator, speaker"],["sacerdōs, sacerdōtis, m.","priest"],["aliquis, aliquid","someone, something"],["quisquis, quidquid","whoever, whatever"],["magnanimus, magnanima, magnanimum","great-hearted, brave, magnanimous"],["umquam","ever, at any time"],["ēducō, ēducāre, ēducāvī, ēducātum","to bring up, educate"],["gaudeō, gaudēre, gāvīsus sum","to be glad, rejoice"],["ostendō, ostendere, ostendī, ostentum","to show, exhibit, display"],["petō, petere, petīvī, petītum","to seek, aim at, beg beseech"],["premō, premere, pressī, pressum","to press; press hard, pursue"],["opprimō, opprimere, oppressī, oppressum","to suppress, overwhelm, overpower, check"],["verto, vertere, vertī, versum","to turn, change"],["āverto, āvertere, āvertī, āversum","to turn away, avert"]];

  } else if (x==24){
    vocArry =[["Carthāgo, Carthāginis, f.","Carthage"],["fabula, fabulae, f.","story, tale; play"],["imperātor, imperātoris, m.","general, commander-in-chief, emperor"],["imperium, imperiī, n.","power t command, supreme power, authority, command"],["perfugium, perfugiī, n.","refuge, shelter"],["servus, servī, m.","slave"],["sōlācium, sōlāciī, n.","comfort, relief"],["vulnus, vulneris, n.","wound"],["re or red as prefix","again, back"],["ut","as, just as, when"],["posteā","aferwards"],["accipiō, accipere, accēpī, acceptum","to take, receive, accept"],["excipiō, excipere, excēpī, exceptum","to take out, except; take, receive, capture"],["recipiō, recipere, recēpī, receptum","to take back, regain; admit, receive"],["pellō, pellere, pepulī, pulsum","to strike, push; drive out, banish"],["expellō, expellere, expulsī, expulsum","to drive out, expel, banish"],["nārrō, nārrāre, nārrāvī, nārrātum","to tell, report, narrate"],["quaerō, quaerere, quaesīvī, quaesītum","to seek, look for, strive for; ask, inquire, inquire into"],["rīdeō, rīdēre, rīsī, rīsum","to laugh, laugh at"]];

  } else if (x==25){
    vocArry = [["lingua, linguae, f.","tongue; language"],["ferōx, ferōx, ferōx (gen. ferōcis)","fierce, savage"],["fidēlis, fidēlis, fidēle","faithful, loyal"],["geminus, gemina, geminum","twin"],["sapiēns, sapiēns, sapiēns (gen. sapientis)","wise, judicious"],["ultimus, ultima, ultimum","farthest, extreme"],["dehinc","then, next"],["hīc","here"],["āit, āiunt","he says, they say, assert"],["ō, āre, āvī, ātum",""],["ō, ēre, uī, itum",""],["ō, āre, āvī, ātum",""],["crēdō, crēdere, crēdidī, crēditum (+ DAT.)","believe, trust"],["negō, negāre, negāvī, negātum","to deny, say that ... not"],["iacō, iacēre, iacuī","to lie; lie prostrate; lie dead"],["nesciō, nescīre, nescīvī, nescītum","to not know, be ignorant"],["patefaciō, patefacere, patefēcī, patefactum","to make open, open; disclose, expose"],["nuntiō, nuntiāre, nuntiāvī, nuntiātum","to announce, report, relate"],["ō, ēre, uī, itum",""],["ō, āre, āvī, ātum",""],["ō, ēre, uī, itum",""],["ō, āre, āvī, ātum",""],["ō, ēre, uī, itum",""],["ō, āre, āvī, ātum",""],["sperō, sperāre, sperāvī, sperātum","to hope for, hope"],["putō, putāre, putāvī, putātum","to reckon, suppose, judge, think, imagine"],["suscipiō, suscipere, suscēpī, susceptum","to undertake"]];

  } else if (x==26){
    vocArry = [["cēna, cēnae, f.","dinner"],["forum, forī, n.","marketplace, forum"],["lēx, lēgis, f.","law, statute"],["līmen, līminis, n.","threshold"],["lūx, lūcis, f.","light"],["mēnsa, mēnsae, f.","ttable; dining; dish, course"],["nox, noctis, f.","night"],["somnus, somnī, m.","sleep"],["quīdam, quaedam, quiddam or quoddam","a certain one or thing, someone, someting; a certain, some"],["pudīcus, pudīca, pudīcum","modest, chaste"],["superbus, superba, superbum","arrogant, overbearing, haughty, proud"],["trīstis, trīstis, trīste","sad, sorrowful; joyless, grim, severe"],["turpis, turpis, turpe","ugly; shameful, base, disgraceful"],["urbānus, urbāna, urbānum","of the city urban; urbance, elegant"],["prae (+ ABL.)","in front ofl before"],["quam","than; as ... as possible; how"],["tantum","only"],["invītō, invītāre, invītāvī, invītātum","to entertain, invite, summon"]];

  } else if (x==27){
    vocArry = [["dēlectātio, dēlectātionis, f.","delight, pleasure, enjoyment"],["nepōs, nepōtis, m.","grandson, descendant"],["sōl, sōlis, m.","sun"],["dīligēns, dīligēns, dīligēns (gen. dīligentis)","diligent, careful"],["dissimilis, dissimilis, dissimile","unlike, different"],["gracilis, gracilis, gracile","slender, thin"],["humilis, humilis, humile","lowly, humble"],["maior, maior, maius","greater, older"],["maiōres, maiōrum, m.","ancestors, i.e., the older ones"],["prīmus, prīma, prīmum","first, foremost, chief, principal"],["quot","how many, as many as"],["similis, similis, simile","similar (to), like, resembling"],["superus, supera, superum","above, upper"],["superī, superōrum, m.","the gods"],["ūtilis, ūtilis, ūtile","useful, advantageous"],["pōnō, pōnere, pōsuī, pōsitum","to put, place"],["probō, probāre, probāvī, probātum","to approve, recommend, test"]];


  } else if (x==28){
    vocArry =[["arma, armōrum, n.","arms, weapons"],["cursus, cursūs, m.","running, race; course"],["lūna, lūnae, f.","moon"],["occāsiō, occāsiōnis, f.","occasion, opportunity"],["parēns, parentis, m./f.","parent"],["stella, stellae, f.","star, planet"],["vesper, vesperis or vesperī, m.","evening; evening star"],["mortutus, mortua, mortuum","dead"],["prīnceps, prīncipis, m./f.","leader, emperor"],["ut + subjunctive","in order that, so that, that, in order to, so as to, to"],["ut + indicative","as, when"],["nē","not; in order that ... not, that ... not, in order not to"],["cēdo, cēdere, cessī, cessum","to go, withdraw; yield to, grant, submit"],["dēdicō, dēdicāre, dēdicāvī, dēdicātum","to dedicate"],["egeō, egēre, eguī (+ ABL. or GEN.)","to need, lack, wantt"]["ō, āre, āvī, ātum",""],["expleō, explēre, explēvī, explētum","to fill, fill up, complete"]["praestō, praestāre, praestitī, praestitum","to excel; exhibit, show, offer, supply, furnish"],["taceō, tacēre, tacuī, tacitum","to be silent, leave unmentioned"]];

  } else if (x==29){
    vocArry = [["fātum, fāti, n.","fate; death"],["ingenium, ingeniī, n.","nature, innate talent"],["moenia, moenium, n.","walls of a city"],["nata, natae, f.","daughter"],["ōsculum, ōsculi, n.","kiss"],["sīdus, sīderis, n.","constellation, star"],["dignus, digna, dignum (+ ABL.)","worthy, worthy of"],["dūrus, dūra, dūrum","hard, harsh, rough, stern, unfeeling, hardy"],["tantus, tanta, tantum","so large, so great, of such a size"],["dēnique","at last, finally, lastly"],["ita","so, thus"],["quidem","indeed, certainly, at least, even"],["sīc","so, thus"],["tam","so, to such a degree"],["tam ... quam","so ... as"],["tamquam","as it were, as if, so to speak"],["vēro","in truth, indeed, to be sure, however"],["condō, condere, condidī, conditum","to put together or into, store; foundk establish"],["contendō, contendere, contendī, contentum","to strive, struggle, contend;hasten"],["molliō, mollīre, mollīvī, mollītum","to soften; make calm or less hostile"],["pugnō, pugnāre, pugnāvī, pugnātum","to fight"],["respondeō, respondēre, respondī, respōnsum","to answer"],["surgō, surgere, durrēxī, surrēctum","to get up, arise"]];

  } else if (x==30){
    vocArry = [["honor, honōris, m.","honor, esteem; public office"],["cēterī, cēterae, cētera","the remaining, the rest, the other, all the others"],["quantus, quanta, quantum","how large, how great, how much"],["tantus ... quantus","just as much (many) ... as"],["rīdiculus, rīdicula, rīdiculum","laughable, ridiculous"],["vīvus, vīva, vīvum","alive, living"],["furtim","stealthily, secretly"],["fūr, fūris, m.","thief"],["mox","soon"],["under","whence, from what or which place, from which, from whom"],["utrum ... an","whether ... or"],["bibō, bibere, bibī","to drink"],["cognōscō, cognōscere, cognōvī, cognitum","become acquainted with, learn, recognize"],["comprehendō, comprehendere, comprehendī, comprehensum","to grasp, seize, arrest; comprehend, understand"],["cōnsūmō, cōnsūmere, cōnsūmpsī, cōnsūmptum","to consume, use up"],["dubitō, dubitāre, dubitāvī, dubitātum","to doubt, hesitate"],["ō, ēre, uī, itum",""],["ō, āre, āvī, ātum",""],["expōnō, expōnere, exposuī, expositum","to set forth, explain, expose"],["rogō, rogāre, rogāvī, rogātum","to ask"],["minuō, minuere, minuī, minutum","to lessen, diminish"]];

  } else if (x==31){
    vocArry = [["as, assis, m.","an as (a small copper coin)"],["auxilium, auxiliī, n.","aid, help"],["digitus, digitī, m.","finger, toe"],["elephantus, elephantī, m.","elephant"],["exsilium, exsiliī, n.","exile, banishment"],["invidia, invidiae, f.","envy, jealously, hatred"],["rūmor, rūmoris, m.","rumor"],["vīnum, vīnī, n.","wine"],["mediocris, mediocris, mediocre","ordinary, moderate, mediocre"],["cum + subjunctive","when, since, although"],["cum + indicative","when"],["apud (+ ACC.)","among, in the presence of, at the house of"],["semel","a single time, once, once and for all, simultaneously"],["usque","all the way, up (to), even (to), constinuously, always"],["ō, āre, āvī, ātum",""],["ō, ēre, uī, itum",""],["ferō, ferre, tulī, lātum","to bear, carry, bring; suffer, endure, tolerate; say, report"],["adferō, adferre, attulī, allātum","to bring to"],["cōnferō, cōnferre, contulī, collātum","to bring together, compare; confer, bestow; se conferre = to go"],["offerō, offerre, obtulī, oblātum","to offer"],["referō, referre, rettulī, relātum","to carry back, bring back; repeat, answer, report"],["invideō, invidēre, invīdī, invīsum","to be envious; to be jealous of, envy, look at with envy (+ DAT.)"],["occidō, occidere, occidī, occāsum","to fall down, die, set"]];

  } else if (x==32){
    vocArry = [["custōdia, custōdiae, f.","protection, custody"],["exercitus, exercitūs, m.", "army"], ["paupertās, paupertātis, f.", "poverty, humble circumstances"],["dīves, dīves, dīves (gen. dīvitis or dītis)","rich, wealthy"],["pār, pār, pār (gen. paris)","equal"],["pauper, pauper, pauper (gen. pauperis)","of small means, poor"],["dummodo + subjunctive","provided that, so long as"],["longē","far"],["liberē","freely"],["pulchrē","beautifully"],["fortiter","bravely"],["celeriter","quickly"],["ācriter","keenly"],["felīciter","happily"],["sapienter","wisely"],["facile","easily"],["bene","well"],["male","badly"],["multum","much"],["magnopere","greatly"],["parum","little, not very [much]"],["diū","for a long time"],["longius","farther, too far"],["līberius","more freely"],["pulchrius","more beautifully"],["fortius","more bravely"],["celerius","more quickly"],["ācrius","more keenly"],["fēlīcius","more happily"],["sapientius","more easily"],["melius","better"],["peius","worse"],["plūs","more (quantity)"],["magis","more (quality)"],["prius","before, earlier"],["minus","less"],["diūtius","longer"],["diūtissimē","very long"],["prīmum","in the first place"],["prīmō","first, at first"],["minimē","least"],["maximē","most, especially"],["maximē","most"],["plurimum","most, very much"],["pessimē","worst"],["optimē","best"],["longissimē","farthest, very far"],["liberrimē","most, very freely"],["pulcherrimē","most beautifully"],["fortissimē","most bravely"],["celerrimē","most quicly"],["ācerrimē","most keenly"],["fēlīcissimē","most happily"],["sapientissimē","most wisely"],["facillimē","most easily"],["malō, malle, maluī","to want (something) more, instead; prefer"],["volō, velle, voluī","to want, wish, be willing, will"],["nolō, nolle, noluī","to not ... wish, be unwilling"],["pateō, patēre, patuī","to be open, lie open; be accessible, be evident"],["praebeō, praebēre, praebuī, praebitum","to offer, provide"],["promittō, promittere, promīsī, promissum","to promise, send forth"],["ō, ēre, uī, itum",""],["ō, āre, āvī, ātum",""],["ō, ēre, uī, itum",""],["ō, āre, āvī, ātum",""]];

  } else if (x==33){
    vocArry = [["initium, initiī, n.","beginning, commencement"],["ops, opis, f.","help, aid"],["opēs, opum, f.","power, resources, wealth"],["philosophus, philosophī, m.","philosopher"],["philosopha, philosophae, f.","philosopher"],["plēbs, plēbis, f.","the common people, populace, plebeians"],["sãl, alis, m.","salt; wit"],["speculum, speculī, n.","mirror"],["quis, quid after sī, nisi, num and ne","anyone, anything, someone, something"],["candidus, candida, candidum","shining, bright, white; beautiful"],["merus, mera, merum","pure, undiluted"],["suāvis, suāvis, suāve","sweet"],["-ve","or"],["heu","ah! alas!"],["subitō","suddenly"],["recūsō, recūsāre, recūsāvī, recūsātum","to refuse"],["tradō, tradere, tradidī, traditum","to give over, surrender; hand down, transmit, teach"]];

  } else if (x==34){
    vocArry = [["anima, animae, f.","air, breath, soul, spirit"],["remissiō, remissiōnis, f.","letting go, release, relaxation"],["vōx, vōcis, f.","voice, word"],["adversus, adversa, adversum","opposite, adverse"],["tālis, tālis, tāle","such, of such a sxort"],["vae (+ DAT. or ACC.)","alas, woe to"],["arbitror, arbitrāri, arbitrātus sum","to judge, think"],["conor, conāri, conātus sum","to try, attempt"],["crēscō, crēscere, crēvī, crētum","to increase"],["hortor, hortāri, hortātus sum","to encourage, urge"],["fateor, fatēri, fassus sum","to confess, admitt"],["ēgredior, ēgredī, ēgressus sum","to go out"],["loquor, loquī, locutus sum","to say, speak, tell"],["molīor, molīrī, molītus sum","to work at, build, undertake, plan"],["morior, morī, mortuus sum","to die"],["nāscor, nāscī, nātus sum","to be born, spring forth, arise"],["patior, patī, passus sum","to suffer, endure; permit"],["proficīscor, proficīscī, profectus sum","to set out, start"],["rūsticor, rūsticāri, rūsticātus sum","to live in the country"],["sedō, sedēre, sēdī, sessum","to sit"],["sequor, sequi, secutus sum","to follow"],["spectō, spectāre, spectāvī, spectātum","to look at, see"],["ūtor, ūtī, ūsus sum (+ ABL.)","to use; enjoy, experience"]];

  } else if (x==35){
    vocArry = [["aestās, aestātis, f.","summer"],["iānua, iānuae, f.","door"],["pectus, pectoris, n.","breast, heart"],["praemium, praemiī, n.","reward, prize"],["īrātus, īrāta, īrātum","angry"],["antepōnō, antepōnere, antepōsuī, antepōsitum","to put before, prefer"],["fōveō, fōvēre, fōvī, fōtum","to comfort, nurture, cherish"],["ignōscō, ignōscere, ignōvī, ignōtum (+ DAT.)","to grant pardon to, forgive"],["imperō, imperāre, imperāvī, imperātum (+ DAT.)","to give orders to, command"],["mīror, mīrārī, mīrātus sum","to marvel at, admire, wonder"],["noceō, nocēre, nocuī, nocitum (+ DAT.)","to do harm to, harm, injure"],["nūbō, nūbere, nūpsī, nūptum","to cover, veil, + DAT. to be married to, marry"],["parcō, parcere, pepercī, parsurum (+ DAT.)","to spare"],["pāreō, pārēre, pāruī (+ DAT.)","to be obedient to, obey"],["persuādeō, persuādēre, persuāsī, persuāsum (+ DAT.)","to succeed in urging, persuade"],["placeō, placēre, placuī, placitum (+ DAT.)","to be pleasing to, please"],["sapiō, sapīre, sapīvī","to have good tase, have good sense, be wise"],["serviō, servīre, servīvī, servītum (+ DAT.)","TO BE A SLAVE TO, SERVE"],["studeō, studēre, studuī (+ DAT.)","to direct one's zeal to, be eager for, study"],["subrideō, subridēre, subrīsī, subrīsum","to smile (down) upon"],["",""],["",""],["",""],["",""],["",""]];

  } else if (x==36){
    vocArry = [["cupīdo, cupīdinis, f.","desire, passion"],["lēctor, lēctoris, m.","reader"],["lēctrīx, lēctrīcis, f.","reader"],["vinculum, vinculī, n.","bond, chain, fetter"],["cōtīdiē","daily, every day"],["fortasse","perhaps"],["accēdō, accēdere, accessī, accessum","to come to, approach"],["carpō, carpere, carpsī, carptum","to harvest, pluck; seize"],["cogō, cogere, coegī, coactum","to drive or bring together, force, compel"],["contemnō, contemnere, contempsī, contemptum","to despise, scorn"]["curō, curāre, curāvī, curātum","to care for, attend to; heal, cure; take care"],["contundō, contundere, contudī, contunsum","to beat, crush, bruise, destroy"],["dēcernō, dēcernere, dēcrēvī, dēcrētum","to decide, settle, decree"],["exigō, exigere, exēgī, exactum","to drive out, force out, exact, drive through, complete"],["fiō, fierī, factus sum","to occur, happen; become; be made, be done"],["oblectō, oblectoblectāre, oblectāvī, oblectātum","to please, amuse, delight, pass time pleasantly"],["orō, orāre, orāvī, orātum","to speak, plead, be, beseech, entreat, pray"],["requīrō, requīrere, requīsīvī, requīsitum","to seek, ask for; miss, need, require"],["recreō, recreāre, recreāvī, recreātum","to restore, revive; refresh, cheer"],["serenō, serenāre, serenāvī, serenātum","to make clear, brighten; cheer kup, soothe"]];

  } else if (x==37){
    vocArry = [["Athēnae, Athēnārum, f.","Athens"],["domus, domūs (domī), f.","house, home"],["humus, humī, f.","ground, earth, soil"],["iter, itineris, n.","journey, route, road"],["rūs, rūris, n.","the country, countryside"],["Syrācūsae, Syrācūsārum, f.","Syracuse"],["grātus, grāta, grātum","pleasing, agreeable; grateful"],["idōneus, idōnea, idōneum","suitable, fit, appropriate"],["immōtus, immōta, immōtum","unmoved; uknchanged, unrelenting"],["forīs","out of doors, outside"],["eō, īre, iī, itum","to go"],["abeō, abīre, ababiī, abitum","to go away, depart, leave"],["adeō, adīre, adiī, aditum","to go to, approach"],["exeō, exīre, exiī, exitum","to go out exit"],["ineō, inīre, iniī, initum","to go in, enter; enter into, begin"],["obeō, obīre, obiī, boitum","to go up against, mee, die"],["pereō, perīre, periī, peritum","to pass away, be destroyed"],["redeō, redīre, rediī, reditum","to go back, return"],["interficiō, interficere, interfecī, interfectum","to kill, murder"],["licet, licēre, licuit (+ DAT.)","it is permitted (for someone to do something), one may"],["pergrīnor, pergrīnārī, pergrīnātus sum","to travel abroad, wander"],["requiēsco, requiēscere, requiēvī, requiētum","to rest"],["soleō, solēre, solitus sum","to be accustomed"]];

  } else if (x==38){
    vocArry = [["arbor, arboris, f.","tree"],["dignitās, dignitātis, f.","merit, prestige, dignity"],["dolor, doloris, m.","pain, grief"],["odium, odiī, n.","hatred"],["opus, operis, n.","a work, task; deed, accomplishment"],["ōrātiō, ōrātiōnis, f.","speech"],["pēs, pedis, m.","lower leg, foot"],["sator, satōris, m.","sower, planter; begetter, father; founder"],["fīrmus, fīrma, fīrmum","firm, storng, reliable"],["mīrābilis, mīrābilis, mīrābile","amazing, wondrous, remarkable"],["prīstinus, prīstina, prīstinum","ancient; former, previous"],["etsī","even if, although"],["erga (+ ACC.)","toward"],["libenter","with pleasure, gladly"],["impēdiō, impēdīre, impēdīvī, impēdītum","to impede, hinder, prevent"],["metuō, metuere, metuī","to fear, dread; be afraid for (+ DAT.)"],["recognōscō, recognōscere, recognōvī, recognitum","to recognize, recollect"],["suspendō, suspendere, suspendī, suspensum","to hand up, suspend; interrupt"],["vēndō, vēndere, vēndidī, vēnditum","to sell"],["queror, querī, questus sum","to complain, lament"]];

  } else if (x==39){
    vocArry = [["aedificium, aedificiī, n.","building, structure"],["iniūria, iniūriae, f.","injustice, injury, wrong"],["mulier, mulieris, f.","woman"],["transitus, transitūs, m.","passing over, transit, transition"],["ventus, ventī, m.","wind"],["cupidus, cupida, cupidum","desirous, eager, fond (+ GEN.)"],["līberālis, līberālis, līberāle","decent, liberal, generous; of, relating to a free person; worthy of a free man"],["necesse","necessary, inevitable"],["necesse est","it is necessary"],["vetus, vetus, vetus (gen. veteris)","old"],["quasi","as if, as it were"],["ambulō, ambulāre, ambulāvī, ambulātum","to walk"],["experior, experīrī, expertus sum","to try, test"],["lībō, lībāre, lībāvī, lībātum","to pour alibation of, on; pour ritually; sip; touch gently"],["ō, āre, āvī, ātum",""],["oportet, oportēre, oportuit","it is proper, right, necessary"],["oppugnō, oppugnāre, oppugnāvī, oppugnātum","to fight against, attack, assault, assail"],["ōrnō, ōrnāre, ōrnāvī, ōrnātum","to equip, furnish, adorn"],["pernoctō, pernoctpernoctāre, pernoctāvī, pernoctātum","to spend or occupy the night"],["transeō, transīre, transiī, transitum","to go across, cross; pass over, ignore"]];


  } else if (x==40){
    vocArry = [["aes, aeris, n.","bronze"],["dominus, dominī, m.","master (of a household), lord"],["domina, dominae, f.","mistress, lady"],["lācrima, lācrimae, f.","tear"],["mēta, mētae, f.","turning point, goal; limit, boundary"],["monumentum, monumentī, n.","monument"],["nāsus, nāsi, m.","nose"],["saxum, saxī, n.","rock, stone"],["vultus, vultūs, m.","countenance, face"],["iūstus, iūsta, iūstum","just, right"],["tot","so many, as many"],["tot ... quot","as many ... as"],["praeter (+ ACC.)","besides, except; beyond, past"],["nōnne","introduces a question expecting the answer 'yes'"],["num","introduces a question expecting the answer 'no'"],["omnīnō","wholly, entirely, altogether"],["postrēmum","after all, finally; for the last time"],["quīn","indeed, in fact, furthermore"],["explicō, explicāre, explicāvī, explicātum","to unfold; explain; spread out, deploy"],["fatīgō, fatīgāre, fatīgāvī, fatīgātum","to weary, tire out"],["for, fārī, fatus sum","to speak (prophetically), talk, foretell"],["ōpinor, ōpinārī, ōpinatus sum","to suppose"],["reperiō, reperīre, repperī, repertum","to find, discover, learn; get"],["vereor, verērī, veritus sum","to show reverence for, respect; be afraid of, fear"]];

  } else {

    restartGame();
    document.getElementById("box1").style.background = "orange";
  }
movLength = 100/vocArry.length;
}


 /*

wheelock1 = [["me","me, myself"],["quid","what"],["nihil","nothing"],["nōn","not"],["saepe","often"],["sī","if"],["amō, amāre, amāvī, amātum","to love, like"],["cōgitō, cōgitāre, cōgitāvī, cōgitātum","to think, ponder, consider, plan"],["dō, dāre, dedī, datum","to give, offer"],["dēbeō, dēbēre, dēbuī, dēbitum","to owe; ought, must, should"],["ō, ēre, uī, itum",""],["monō, monmonmonēre, monmonuī, monitum","to remind, advise, warn"],["salvō, salvēre","to be well, be in good health"],["errō, errāre, errāvī, errātum","to wander; err, go astray, make a mistake, be mistaken"],["conservō, conservconservconservāre, conservconservāvī, conservātum","to preserve, conserve, maintain"],["laudō, laudāre, laudāvī, laudātum","to praise"],["vocō, vocāre, vocāvī, vocātum","to call, summon"],["salvē (salvēte)","hello, greetings"],["servō, servāre, servāvī, servātum","to preserve, save, keep, guard"],["terreō, terrēre, terruī, territum","to frighten, terrify"],["valeō, valēre, valuī,valiturum","to be strong, have power; be well"],["videō, vidēre, vīdī, visum","to see; observe,understands"],["valē (valēte)","good-bye, farewll"]];

wheelock2 = [["fama, famae, f.","rumor, report; fame, reputation"],["forma, formae, f.","form, shape; beauty"],["fortuna, fortunae, f.","fortune, luck"],["īra, īrae, f.","anger"],["nauta, nautae, m.","sailor"],["patria, patriae, f.","fatherland, native land, (one's) country"],["pecūnia, pecūniae, f.","money"],["philosophia, pecūniae, f.","philosophy"],["poēta, poētae, m.","poet"],["porta, portae, f.","gate, entrance"],["puella, puellae, f.","girl"],["rosa, rosae, f.","rose"],["sententia, sententiae, f.","feeling,thought, opinion, vote, sentence"],["vita, vitae, f.","life; mode of life"],["antīquus, antīqua, antīquum","ancient, old-time"],["magnus, magna, magnum","large, great; important"],["meus, mea, meum","my"],["multus, multa, multum","much, many"],["tuus, tua, tuum","your"],["et","and; even"],["et ... et","both ... and"],["sed","but"],["est","is"],["Ō","O! Oh!"],["sine (+ ABL.)","wihtout"]];

wheelock3 = [["ager, agrī, m.","field, farm"],["amīcus, amīcī, m.","friend"],["fīlius, fīliī, m.","son"],["numerus, numerī, m.","number"],["populus, populī, m.","the people, a people, a nation"],["amīca, amīcae., f.","friend"],["agricola, agricolae., m.","farmer"],["fēmina, fēminae., f.","woman"],["fīlia, fīliae., f.","daughter"],["sapientia, sapientiae., f.","wisdom"],["puer, puerī, m.","boy"],["vir, virī, m.","man, hero"],["avārus,avāra, avārum","greedy, avaricious"],["Rōmānus, Rōmāna, Rōmānum","Roman"],["paucī, paucae, paeca","few, a few"],["de (+ ABL.)","down from. from; concerning, about"],["in (+ ABL.)","in, on"],["hodiė","today"],["semper","always"],["habeō, habēre, habuī, habitum","to have, hold, possess; consider, regard"],["satiō, satiāre, satiāvī, satiātum","to satisfy, sate"]];

wheelock4 = [["bāsium, bāsiī, n.","kiss"],["bellum, bellī, n.","war"],["cōnsilium, cōnsiliī, n.","plan, purpose, advice, counsel, judgment, wisdom"],["cura, curae, f.","care, attention, caution, anxiety"],["dōnum, dōnī, n.","gift, present"],["exitium, exitiī, n.","destruction, ruin"],["magistra, magistrae, f.","teacher, mistress"],["magister, magistrī, m.","teacher, master"],["officium, officiī, n.","duty, service"],["perīculum, perīculī, n.","danger"],["remedium, remediī, n.","cure, remedy"],["mora, morae, f.","delay"],["nihil","nothing"],["oculus, oculī, m.","eye"],["bellus, bella, bellum","pretty, handsome, charming"],["bonus, bona, bonum","good, kind"],["humānus, humāna, humānum","human, pertaining to man; humane, kind, refined, cultivated"],["malus, mala, malum","bad, wicked, eviil"],["parvus, parva, parvum","small, little"],["stultus, stulta, stultum","foolish"],["stultum, stultī, n.","a fool"],["vērus, vēra, vērum","true, real, proper"],["iuvo, iuvāre, iuvī, iutum", "to help, aid, assist; please"],["sum, esse, fuī, futurm","to be, exist"],["iuvo, iuvāre, iuvī, iutum", "to help, aid, assist"]];

wheelock5 = [["adulēscentia, adulēscentia, f.","youth, young manhood; youthfulness"],["animus, animī, m.","soul, spirit, mind"],["animī, animōrum, m.","high spirits, pride, courage"],["caelum, caelī, n.","sky"],["culpa, culpae, f.","fault, blame"],["glōria, glōriae, f.","glory, fame"],["verbum, verbī, n.","word"],["tē","you"],["līber, lībera, līberum","free"],["noster, nostra, nostrum","our, ours"],["pulcher, pulchra, pulchrum","beautiful, handsome; fine"],["sānus, sāna, sānum","sound, healthy, sane"],["igitur","therefore, consequently"],["propter (+ ACC.)","on account of, because of"],["crās","tomorrow"],["heri","yesterday"],["quandō","when"],["sī quandō","if ever"],["satis","enough, sufficient"],["tum","then, at that time"],["cēnō, cēnāre, cēnāvì, cēnātum","to dine"],["culpō, culpāre, culpāvì, culpātum","to blame, censure"],["superō, superāre, superāvī, superātum","to be above, have the upper hand, surpass; overcome, conquer"],["remaneō, remanēre, remansī, remansurum","to remain, stay, stay behind, abide, continue"],["maneō, manēre, mansī, mansurum","to remain, stay, stay behind, abide, continue"],["super","above"]];

wheelock6 = [["deus, deī, m.","god"],["discipulus, discipulī, m.","student, pupil, learner"],["discipula, discipulae, f.","student, pupil, learner"],["insidiae, insidiārum, f.","ambush, plot, treachery"],["liber, librī, m.","book"],["tyrānnus, tyrānnī, m.","tyrant"],["vitium, vitiī, n.","fault, crime, vice"],["Graecus, Graeca, Graecum","Greek"],["Graecus, Graecī, m.","a Greek"],["perpētuus, perpētua, perpētuum","perpetual, lasting, uninterrupted, continuous"],["plēnus, plēna, plēnum","full, abundant, generous"],["salvus, salva, salvum","safe, sound"],["secundus, secunda, secundum","second, favorable"],["vester, vestra, vestrum","your"],["-que","and"],["ubi","where, when"],["ibi","there"],["nunc","now"],["quārē","why, wherefore"],["possum, posse, potuī","to be able, can, could, have power"],["tolerō, tolerāre, tolerāvī, tolerātum","to bear, endure"]];

wheelock7 = [["",""],["",""],["",""],["",""],["",""],["",""],["",""],["",""],["",""],["",""],["",""],["",""],["",""],["",""],["",""],["",""],["",""],["",""],["",""],["",""],["",""],["",""],["",""],["",""]];

wheelock8 = [["amor, amoris, m.","love"],["carmen, carminis, n.","song, poem"],["civitās, civitātis, f.","state, citizenship"],["corpus, corporis, n.","body"],["homo, hominis, m.","man, human being"],["labor, laboris, m.","labor, work, toil; a work, production"],["littera, litterae f.","a letter of the alphabet"],["litterae, litterārum, f.","a lettler"],["mōs, mōris, m.","cusotm, manner, manner"],["mōres, mōrum, m.","habits, morals, character"],["nōmen, nōminis, n.","name"],["pāx, pācis, f.","peace"],["regīna, regīnae, f.","queen"],["rēx, rēgis, m.","king"],["tempus, temporis, n.","time; occasion, opportunity"],["terra, terrae, f.","earthk ground, land, country"],["uxor, uxoris, f.","wife"],["virgō, virginis, f.","maiden, virgin"],["virtūs, virtūtis, f.","manliness, courage, excellence, character, worth, virtue"],["no vus, nov a, novum","new, strange"],["post (+ ACC)","after, behind"],["sub (+ ABL.)","under"],["sub (+ ACC.)","under, up under, close to; down tto/into, to/at the foot of"],["audeō, audēre, ausus sum","to dare"],["necō, necāre, necāvī, necātum","to murder, kill"]];

wheelock9 = [["locus, locī, m.","place, passage in literature"],["loca, locōrum, n.,","places, region"],["morbus, morbī, m.","disease, sickness"],["studium, studiī, n.","eagerness, zeal, pursuit, study"],["hic, haec, hoc","this, the latter"],["ille, illa, illud","that, the former"],["iste, ista, istud","that of yours, that"],["alius, alia, aliud","other, another"],["aliī ... aliī","some ... others"],["alter, altera, alterum","the other (of two), the second"],["neuter, neutra, neutrum","not either, neither"],["nūllus, nūlla, nūllum","not any, no, none"],["sōlus, sōla, sōlum","alone, only, the only"],["nōn sōlum ... sed etiam","not only ... but also"],["tōtus, tōta, tōtum","whole, entire"],["ullus, ulla, ullum","any"],["ūnus, ūna, ūnum","one, single, alone"],["uter, uttra, utrum","either, which (of two)"],["enim","for, in fact, truly"],["in (+ ACC.)","into, toward, against"],["nimis or nimium","too, too much, excessively"]];

wheelock10 = [["amicitia, amicitiae, f.","friendship"],["cupiditās, cupiditātis, f.","desire, longing, passion, cupidity, avarice"],["hōra, hōrae, f.","hour, time"],["natura, naturae, f.","nature"],["senectūs, senectūtis, f.","old age"],["timor, timoris, m.","fear"],["veritās, veritātis, f.","truth"],["voluptās, voluptātis, f.","pleasure"],["via, viae, f.","way, road, street"],["beãtus, beāta, beātum","happy, fortunate, blessed"],["quoniam","since"],["cum (+ ABL.)","with"],["audiō, audīre, audīvī, audītum","to hear"],["veniō, venīre, vēnī, ventum","to come"],,["inveniō, invenīre, invēnī, inventum","to find, come upon"]["capiō, capere, cēpī, captum","to take, capture, seize"],["dīcō, dīcere, dīxī, dictum","to say, tell, speak; name, call"],["faciō, facere, fēcī, factum","to make, do, accomplish"],["fugiō, fugere, fūgī, fugitūrum","to flee, hurry away, escape, go into exile; avoid, shun"],["vivō, vivere, vīxī, vīctum","to live"]];

wheelock11 = [["caput, capitis, n.","head; leader; beginning; life; heading; chapter"],["cōnsul, cōnsulis, m.","consul"],["nēmo, nullīus, nēminī, nēminem, nullō or nullã, m./f.","no one, nobody"],["ego (meī)","I (of me)"],["tū (tuī)","you (of you)"],["is, ea, id","he, she, it"],["i.e. = id est","that is"],["īdem, eadem, īdem","the same"],["amīcus, amīca, amīcum","friendly"],["cārus, cāra, cārum","dear"],["quod","because"],["neque, nec","and not, nor"],["neque ... neque or nec ... nec","neither ... nor"],["autem","however, moreover"],["bene","well, satisfactorily, quite"],["etiam","even, also"],["intellego, intellegere, intellēxi, intellectum","to understand"],["mittō, mittere, mīsi, missus","to send, let go"],["sentio, sentīre, sēnsi, sensum","to feel, perceive, think, experience"]];

wheelock12 = [["adulēscens, adulēscentia, m./f.","young man or woman"],["annus, annī, m.","year"],["Ãsia, Āsiae, f.","Asia"],["Caesar, Caesaris, m.","Caesar"],["māter, mātris, f.","mother"],["medicus, medicī, m.","doctor, physician"],["medica, medicae, f.","doctor, physician"],["pater, patris, m.","father"],["patientia, patientia, f.","suffering; patience, endurance"],["principium, principiī, n.","beginning"],["acerbus, acerba, acerbum","harsh, bitter, grievous"],["pro (+ ABL.)","in front of, before, on behalf of, for the sake of, in return for, instead of, for, as"],["diū","for a long time"],["nūper","recently"],["amittō, amittere, amīsi, amissus","to lose, let go, send away"],["cadō, cadere, cecidī, cāsurum","to fall"],["creō, creāre, creāvī, creātum","to create"]];

wheelock13 = [["divitiae, divitiārum, f.","riches, wealth"],["factum, factī, n.","deed, cat, achievement"],["signum, signī, n.","sign, signal, indication; seal"],["ipse, ipsa, ipsum","myself, yourself, himself, herself, itself, etc."],["quisque, quidque","each one, each person, each thing"],["suī (gen.)","himself, herself, itself, themselves"],["doctus, docta, doctum","taught learned"],["fortūnātus, fortūnāta, fortūnātum","lucky, fortunate, happy"],["suus, suua, suum","his own, her own, its own, their own"],["nam","for"],["ante (+ ACC.)","before"],["per (+ ACC.)","through, by"],["ōlim","once (upon a time), long ago, formerly, in the future"],["alō, alere, aluī, altum","to nourish, support, sustain, cherish, increase"],["dīligo, dīligere, dīlēxi, dīlectum","to esteem, love"],["iungō, iungere, iūnxī, iunctum","to join"],["stō, stāre, stetī, stātum","to stand, stand still or firm"]];

wheelock14 = [["animal, animālis, n.","animal, a living creature"],["aqua, aquae, f.","water"],["ars, artis, f.","art, skill"],["auris, auris, f.","ear"],["cīvis, cīvis, m./f.","citizen"],["iūs, iūris, n.","right, justice, law"],["mare, maris, n.","sea"],["mors, mortis, f.","death"],["nūbes, nūbis, f.","cloud"],["ōs, ōris, n.","mouth, face"],["pars, partis, f.","part, share; direction"],["Rōma, Rōmae, f.","Rome"],["turba, turbae, f.","uproar, disturbance; mob, crowd, multitude"],["urbs, urbis, f.","city"],["vīs, vīs, f.","force, power, violence"],["vīrēs, vīrium, f.","strength"],["ā or ab (+ ABL.)","away from, from; by"],["trāns (+ ACC.)","across"],["appellō, appellāre, appellāvī, appellātum","to speak to, address (as), call, name"],["mūtō, mūtāre, mūtāvī, mūtātum","to change, alter; exchange"],["currō, currere, cucurrī, cursum","to run, rush, move quickly"]["teneō, tenere, tenuī, tentum","to hold, keep, possess; restrain"],["vītō, vītāre, vītāvī, vītātum","to avoid, shun"]];


wheelock15 = [["Italia, Italiae, f.","Italy"],["memoria, memoriae, f.","memory, recollection"],["tempestās, tempestātis, f.","period of time, season, weather, storm"],["centum","one hundred"],["mīlle","thousand"],["miser, misera, miserum","wrectched, miserable, unfortunate"],["inter","between, among"],["itaque","and so, therefor"],["committō, committere, commīsī, commissum","to entrust, commit"],["exspectō, exspectexspectāre, exspectāvī, exspectātum","to look for, expec t, await"],["iaciō, iacere, iēci, iactum","to throw, hurl"],["timeō, timēre, timuī","to fear, be afraid (of)"],["ūnus, ūna, ūnum","one"],["duo, duae, duo","two"],["trēs, trēs, tria","three"],["quattuor","four"],["quinque","five"],["sex","six"],["septem","seven"],["octō","eight"],["novem","nine"],["decem","ten"],["ūndecim","eleven"],["duodecim","tweleve"]["tredcim","thirteen"],["quattuordecim","fourteen"],["quīndecim","fifteen"],["sēdecim","sixteen"],["septendecim","seventeen"],["duodēvīgintī","eighteen"],["ūndēvīgintī","nineteen"],["vīgintī ūnus","twenty-one"],["prīmus, prīma, prīmum","first"],["secundus, secunda, secundum","second"],["tertius, tertia, tertium","third"],["quārtus, quārta, quārtum","fourth"],["quintus, quinta, quintum","fifth"],["sextus, sexta, sextum","sixth"],["septimus, septima, septimum","seventh"],["octāvus, octāva, octāvum","eighth"],["nōnus, nōna, nōnum","ninth"],["decimus, decima, decimum","tenth"],["ūndecimus, ūndecima, ūndecimum","eleventh"],["duodecimua, duodecima, duodecimum","twelth"]];

wheelock16 = [["aetas, aetātis, f.","period of life, life, age, an age, time"],["audītor, audītor, m.","hearer, listener, member of an audience"],["clēmentia, clēmentiae, f.","mildness, gentleness, mercy"],["mēns, mēntis, f.","mind"],["satura, saurae, f.","satire"],["ācer, ācris, ācre","sharp, keen, eager; severe, fierce"],["brevis, brevis, breve","short, small, brief"],["celer, celeris, celere","swift, quick, rapid"],["difficilis, difficilis, difficile","difficult"],["dulcis, dulcis, dulce","sweet; pleasant, agreeable"],["facilis, facilis, facile","easy, agreeable"],["fortis, forttis, forte","strong, brave"],["ingēns, ingēns, ingēns (gen. ingentis)","huge"],["iūcundus, iūcunda, iūcundum","pleasant, delightful, agreeable"],["longus, longa, longum","long"],["omnis, omnis, omne","every, all"],["potēns, potēns, potēns (gen. potentis,)","able, powerful"],["senex, senex, senex (gen. senis)","old, aged; old man"],["quam","how"],["regō, regere, rēxī, rectum","to rule, guide, direct"]];

wheelock17 = [["libellus, libellī, m.","little book"],["quī, quae, quod","who, which, what, that"],["caecus, caeca, caecum","blind"],["levis, leve","light; easy; slight, trivial"],["aut","or"],["aut ... aut","either ... or"],["cito","quickly"],["quoque","also, too"],["admittō, admittere, admīsi, admissum","to admit, receive, let in"],["coepī, coepisse, coeptum","began"],["cupio, cupere, cupīvī, cupītum","to desire, wish, long for"],["dēleo, dēlēre, dēlēvī, dēlētum","to destroy, wipe out, erase"],["dēsīderō, dēsīderāre, dēsīderāvì, dēsīderātum","to desire, long for, miss"],["incipiō, incipere, incēpī, inceptum","to begin"],["nāvigō, nāvigāre, nāvigāvī, nāvigātum","to sail, navigate"],["neglegō, neglegāre, neglegāvī, neglegātum","to neglect, disregard"],["recitō, recitāre, recitāvī, recitātum","to recite, read aloud"]];

wheelock18 = [["flūmen,flūminis, n.", "river"],["genus, generis, n.","origin, kind, type, sort, class"],["hostis, hostis, m.","an enemy"],["lūdus, lūdi, m.","game, sport; school"],["probitās, probitātis, f.","uprightness, honesty"],["sciēntia, sciēntiae, f.","knowledge"],["clārus, clāra, clārum","clear, bright; renowned, famous, illustrious"],["mortālis, mortālis, mortāle","mortal"],["cūr","why"],["deinde","thereupon, next then"],["fluō, fluere, flūxī, fluctum","to flow"],["legō, legere, lēgī, lectum","to pick out, choose, read"],["misceō, miscēre, miscuī, mixtum","to mix, stir up, disturb"],["moveō, movēre, mōvī, mōtum","to move, arouse, affect"],["videor, vidērī, vīsus sum","to be seen, seem, appear"]];

wheelock19 = [["argūmentum, argūmentī, n.","proof, evidence, argument"],["auctor, auctōris, m.","increaser; author, originator"],["beneficium, beneficiī, n.","benefit, kindness, favor"],["familia, familiae, f.","household, family"],["Graecia, Graeciae, f.","Greece"],["iūdex, iūdicis, m.","judge, juror"],["iūdicium, iūdiciī, n.","jugment, decision, opinion; trial"],["scelus, sceleris, n.","evil deed, crime, sin, wickedness"],["quis? quid?","who? whose? whom? what?"],["quī? quae? quod?","what? which? what kind of; what (a)!"],["certus, certa, certum","definite, sure, certain, reliable"],["immortālis, immortālis, immortāle","immortal, not subject to death"],["at","but; but, mind youp; but, you say"],["nisi","if ... not, unless; except"],["contrā (+ ACC.)","against"],["iam","now, already, soon"],["dēlectō, dēlectāre, dēlectāvī, dēlectātum","to delight, charm, please"],["līberō, līberāre, līberāvī, līberātum","to free, liberate"],["parō, parāre, parāvī, parātum","o prepare, prove; get, obtain"]];

wheelock20 = [["coniūratī, coniūratōrum","conspirators"],["cornū, cornūs, n.","horn"],["frūctus, frūctūs, m.","fruit; profit, benefit, enjoyment"],["genu, genūs, n.","knee"],["manus, manūs, f.","hand, handwriting; band"],["metus, metūs, m.","fear, dread, anxiety"],["mons, montis, m.","mountain"],["senātus, senātūs, m.","senate"],["sensus, sensūs, m.","feeling, sense"],["spīritus, spīritūs, m.","beath, breathing; spirit, soul"],["servitūs, servitūtis, f.","servitude, slavery"],["versus, versūs, m.","line of verse"],["commūnis, commūnis, commūne","common, general, of/for the community"],["dexter, dextra, dextrum","right, right-handed"],["sinister, sinistra, sinistrum","left, left-handed; harmful, ill-omened"],["careō, carēre, caruī, cariturum (+ ABL.)","to be without, deprived of, want, lack; be free from"],["defendō, defendere, defendī, defensum","to defend"],[", discēdere, discessī, discessum","to go away, depart"],["ōdī, ōdisse, õsum","to hate"],["prohibeō, prohibēre, prohibuī, prohibitum","to kee (back), prevent, hinder, restrain, prohibit"],["prōnūntiō, prōnūntiāre, prōnūntiāvī, prōnūntiātum","to proclaim, announce, declaim, pronounce"]];

wheelock21 = [["casa, casae, f.","house, cottage, hut"],["causa, causae, f.","cause, reason; case, situation"],["causā (with a preceding genitive)","for the sake of, on account of"],["fenestra, fenestrae, f.","window"],["finis, finis, m.","end, limit, boundary; purpose"],["finēs, finium, m.","boundaries"],["gēns, gentis, f.","clan, race, nation, people"],["mundus, mundī, m.","wolrd, universe"],["nāvis, nāvis, f.","ship, boat"],["salūs, salūtis, f.","health, safety; greeting"],["Trōia, rōiae, f.","Troy"],["vīcīnus, vīcīnī, m.","neighbor"],["vīcīna, vīcīnae, f.","neighbor"],["vulgus, vulgī, n.","the common people, mob, rabble"],["asper, aspera, asperum","rough, harsh"],["atque or ac","and also, and even, and in fact"],["iterum","again, a second time"],["contineō, continēre, continuī, contentum","to hold together, keep, contain, enclose, restrain"],["iubeō, iubēre, iussī, iussum","to order, bid, command"],["laborō, laborāre, laborāvī, laborātum","to labor, work, be in distress"],["rapiō, rapere, rapuī, raptum","to seize, snatch, carry away"],["relinquō, relinquere, reliquī, relictum","to leave behind, leave, abandon, desert"],["sciō, scīre, scīvī, scitum","to know"],["nesciō, nescīre, nescīvī, nescitum","to not know, be ignorant"],["tangō, tangere, tetigī, tāctum","to touch"]];

wheelock22 = [["diēs, dieī, m.","day"],["ferrum, ferrī, n.","iron; sword"],["fidēs, fideī, f.","faith, turst, trustworthiness, fidelity; promise, guarantee, protection"],["modus, modī, m.","measure, bound, limit, manner, method, mode, way"],["rēs, reī, f.","thing"],["rēs pūblica, reī pūblicae, f.","state, commonwealth, republic"],["spēs, speī, f.","hope"],["ignis, ignis, m.","fire"],["aequus, aequa, aequum","level, calm, even, equal, just; favorable"],["fēlīx, fēlīx, fēlīx (gen. fēlicis)","lucky, fortunate, happy"],["incertus, incerta, incertum","uncertain, unsure, doubtful"],["Latīnus, Latīna, Latīnum","Latin"],["medius, media, medium","middle; middle of"],["quondam","formerly, once"],["ultrā (+ ACC.)","on the other side of, beyond"],["prōtinus","immediately"],["cernō, cernere, crēvī, crētum","to distnguish, discern, perceive"],["ēripiō, ēripere, ēripuī, ēreptum","to snatch away, take away, rescue"],["inquit","he says or he said"],["tollo, tollere, sustulī, sublātum","to raise, lift up; take away, remove, destroy"]];

wheelock23 = [["arx, arcis, f.","citadel, stronghold"],["dux, ducis, m.","leader, guide; commander, general"],["equus, equuī, m.","horse"],["hasta, hastae, f.","spear"],["īnsula, īnsulae, f.","island"],["lītus, lītoris, n.","shore, coast"],["mīles, mīlitis, m.","soldier"],["ōrātor, ōrātoris, m.","orator, speaker"],["sacerdōs, sacerdōtis, m.","priest"],["aliquis, aliquid","someone, something"],["quisquis, quidquid","whoever, whatever"],["magnanimus, magnanima, magnanimum","great-hearted, brave, magnanimous"],["umquam","ever, at any time"],["ēducō, ēducāre, ēducāvī, ēducātum","to bring up, educate"],["gaudeō, gaudēre, gāvīsus sum","to be glad, rejoice"],["ostendō, ostendere, ostendī, ostentum","to show, exhibit, display"],["petō, petere, petīvī, petītum","to seek, aim at, beg beseech"],["premō, premere, pressī, pressum","to press; press hard, pursue"],["opprimō, opprimere, oppressī, oppressum","to suppress, overwhelm, overpower, check"],["verto, vertere, vertī, versum","to turn, change"],["āverto, āvertere, āvertī, āversum","to turn away, avert"]];

wheelock24 = [["Carthāgo, Carthāginis, f.","Carthage"],["fabula, fabulae, f.","story, tale; play"],["imperātor, imperātoris, m.","general, commander-in-chief, emperor"],["imperium, imperiī, n.","power t command, supreme power, authority, command"],["perfugium, perfugiī, n.","refuge, shelter"],["servus, servī, m.","slave"],["sōlācium, sōlāciī, n.","comfort, relief"],["vulnus, vulneris, n.","wound"],["re or red as prefix","again, back"],["ut","as, just as, when"],["posteā","aferwards"],["accipiō, accipere, accēpī, acceptum","to take, receive, accept"],["excipiō, excipere, excēpī, exceptum","to take out, except; take, receive, capture"],["recipiō, recipere, recēpī, receptum","to take back, regain; admit, receive"],["pellō, pellere, pepulī, pulsum","to strike, push; drive out, banish"],"expellō, expellere, expulsī, expulsum","to drive out, expel, banish"],["nārrō, nārrāre, nārrāvī, nārrātum","to tell, report, narrate"],["quaerō, quaerere, quaesīvī, quaesītum","to seek, look for, strive for; ask, inquire, inquire into"],["rīdeō, rīdēre, rīsī, rīsum","to laugh, laugh at"]];

wheelock25 = [["lingua, linguae, f.","tongue; language"],["ferōx, ferōx, ferōx (gen. ferōcis)","fierce, savage"],["fidēlis, fidēlis, fidēle","faithful, loyal"],["geminus, gemina, geminum","twin"],["sapiēns, sapiēns, sapiēns (gen. sapientis)","wise, judicious"],["ultimus, ultima, ultimum","farthest, extreme"],["dehinc","then, next"],["hīc","here"],["āit, āiunt","he says, they say, assert"],["ō, āre, āvī, ātum",""],["ō, ēre, uī, itum",""],["ō, āre, āvī, ātum",""],["crēdō, crēdere, crēdidī, crēditum (+ DAT.)","believe, trust"],["negō, negāre, negāvī, negātum","to deny, say that ... not"],["iacō, iacēre, iacuī","to lie; lie prostrate; lie dead"],["nesciō, nescīre, nescīvī, nescītum","to not know, be ignorant"],["patefaciō, patefacere, patefēcī, patefactum","to make open, open; disclose, expose"],["nuntiō, nuntiāre, nuntiāvī, nuntiātum","to announce, report, relate"],["ō, ēre, uī, itum",""],["ō, āre, āvī, ātum",""],["ō, ēre, uī, itum",""],["ō, āre, āvī, ātum",""],["ō, ēre, uī, itum",""],["ō, āre, āvī, ātum",""],["sperō, sperāre, sperāvī, sperātum","to hope for, hope"],["putō, putāre, putāvī, putātum","to reckon, suppose, judge, think, imagine"],["suscipiō, suscipere, suscēpī, susceptum","to undertake"]];


wheelock26 = [["cēna, cēnae, f.","dinner"],["forum, forī, n.","marketplace, forum"],["lēx, lēgis, f.","law, statute"],["līmen, līminis, n.","threshold"],["lūx, lūcis, f.","light"],["mēnsa, mēnsae, f.","ttable; dining; dish, course"],["nox, noctis, f.","night"],["somnus, somnī, m.","sleep"],["quīdam, quaedam, quiddam or quoddam","a certain one or thing, someone, someting; a certain, some"],["pudīcus, pudīca, pudīcum","modest, chaste"],["superbus, superba, superbum","arrogant, overbearing, haughty, proud"],["trīstis, trīstis, trīste","sad, sorrowful; joyless, grim, severe"],["turpis, turpis, turpe","ugly; shameful, base, disgraceful"],["urbānus, urbāna, urbānum","of the city urban; urbance, elegant"],["prae (+ ABL.)","in front ofl before"],["quam","than; as ... as possible; how"],["tantum","only"],["invītō, invītāre, invītāvī, invītātum","to entertain, invite, summon"]];


wheelock27 = [["dēlectātio, dēlectātionis, f.","delight, pleasure, enjoyment"],["nepōs, nepōtis, m.","grandson, descendant"],["sōl, sōlis, m.","sun"],["dīligēns, dīligēns, dīligēns (gen. dīligentis)","diligent, careful"],["dissimilis, dissimilis, dissimile","unlike, different"],["gracilis, gracilis, gracile","slender, thin"],["humilis, humilis, humile","lowly, humble"],["maior, maior, maius","greater, older"],["maiōres, maiōrum, m.","ancestors, i.e., the older ones"],["prīmus, prīma, prīmum","first, foremost, chief, principal"],["quot","how many, as many as"],["similis, similis, simile","similar (to), like, resembling"],["superus, supera, superum","above, upper"],["superī, superōrum, m.","the gods"],["ūtilis, ūtilis, ūtile","useful, advantageous"],["pōnō, pōnere, pōsuī, pōsitum","to put, place"],["probō, probāre, probāvī, probātum","to approve, recommend, test"]];


wheelock28 = [["arma, armōrum, n.","arms, weapons"],["cursus, cursūs, m.","running, race; course"],["lūna, lūnae, f.","moon"],["occāsiō, occāsiōnis, f.","occasion, opportunity"],["parēns, parentis, m./f.","parent"],["stella, stellae, f.","star, planet"],["vesper, vesperis or vesperī, m.","evening; evening star"],["mortutus, mortua, mortuum","dead"],["prīnceps, prīncipis, m./f.","leader, emperor"],["ut + subjunctive","in order that, so that, that, in order to, so as to, to"],["ut + indicative","as, when"],["nē","not; in order that ... not, that ... not, in order not to"],["cēdo, cēdere, cessī, cessum","to go, withdraw; yield to, grant, submit"],["dēdicō, dēdicāre, dēdicāvī, dēdicātum","to dedicate"],["egeō, egēre, eguī (+ ABL. or GEN.)","to need, lack, wantt"]["ō, āre, āvī, ātum",""],["expleō, explēre, explēvī, explētum","to fill, fill up, complete"]["praestō, praestāre, praestitī, praestitum","to excel; exhibit, show, offer, supply, furnish"],["taceō, tacēre, tacuī, tacitum","to be silent, leave unmentioned"]];

wheelock29 = [["fātum, fāti, n.","fate; death"],["ingenium, ingeniī, n.","nature, innate talent"],["moenia, moenium, n.","walls of a city"],["nata, natae, f.","daughter"],["ōsculum, ōsculi, n.","kiss"],["sīdus, sīderis, n.","constellation, star"],["dignus, digna, dignum (+ ABL.)","worthy, worthy of"],["dūrus, dūra, dūrum","hard, harsh, rough, stern, unfeeling, hardy"],["tantus, tanta, tantum","so large, so great, of such a size"],["dēnique","at last, finally, lastly"],["ita","so, thus"],["quidem","indeed, certainly, at least, even"],["sīc","so, thus"],["tam","so, to such a degree"],["tam ... quam","so ... as"],["tamquam","as it were, as if, so to speak"],["vēro","in truth, indeed, to be sure, however"],["condō, condere, condidī, conditum","to put together or into, store; foundk establish"],["contendō, contendere, contendī, contentum","to strive, struggle, contend;hasten"],["molliō, mollīre, mollīvī, mollītum","to soften; make calm or less hostile"],["pugnō, pugnāre, pugnāvī, pugnātum","to fight"],["respondeō, respondēre, respondī, respōnsum","to answer"],["surgō, surgere, durrēxī, surrēctum","to get up, arise"]];


wheelock30 = [["honor, honōris, m.","honor, esteem; public office"],["cēterī, cēterae, cētera","the remaining, the rest, the other, all the others"],["quantus, quanta, quantum","how large, how great, how much"],["tantus ... quantus","just as much (many) ... as"],["rīdiculus, rīdicula, rīdiculum","laughable, ridiculous"],["vīvus, vīva, vīvum","alive, living"],["furtim","stealthily, secretly"],["fūr, fūris, m.","thief"],["mox","soon"],["under","whence, from what or which place, from which, from whom"],["utrum ... an","whether ... or"],["bibō, bibere, bibī","to drink"],["cognōscō, cognōscere, cognōvī, cognitum","become acquainted with, learn, recognize"],["comprehendō, comprehendere, comprehendī, comprehensum","to grasp, seize, arrest; comprehend, understand"],["cōnsūmō, cōnsūmere, cōnsūmpsī, cōnsūmptum","to consume, use up"],["dubitō, dubitāre, dubitāvī, dubitātum","to doubt, hesitate"],["ō, ēre, uī, itum",""],["ō, āre, āvī, ātum",""],["expōnō, expōnere, exposuī, expositum","to set forth, explain, expose"],["rogō, rogāre, rogāvī, rogātum","to ask"],["minuō, minuere, minuī, minutum","to lessen, diminish"]];

wheelock31 = [["as, assis, m.","an as (a small copper coin)"],["auxilium, auxiliī, n.","aid, help"],["digitus, digitī, m.","finger, toe"],["elephantus, elephantī, m.","elephant"],["exsilium, exsiliī, n.","exile, banishment"],["invidia, invidiae, f.","envy, jealously, hatred"],["rūmor, rūmoris, m.","rumor"],["vīnum, vīnī, n.","wine"],["mediocris, mediocris, mediocre","ordinary, moderate, mediocre"],["cum + subjunctive","when, since, although"],["cum + indicative","when"],["apud (+ ACC.)","among, in the presence of, at the house of"],["semel","a single time, once, once and for all, simultaneously"],["usque","all the way, up (to), even (to), constinuously, always"],["ō, āre, āvī, ātum",""],["ō, ēre, uī, itum",""],["ferō, ferre, tulī, lātum","to bear, carry, bring; suffer, endure, tolerate; say, report"],["adferō, adferre, attulī, allātum","to bring to"],["cōnferō, cōnferre, contulī, collātum","to bring together, compare; confer, bestow; se conferre = to go"],["offerō, offerre, obtulī, oblātum","to offer"],["referō, referre, rettulī, relātum","to carry back, bring back; repeat, answer, report"],["invideō, invidēre, invīdī, invīsum","to be envious; to be jealous of, envy, look at with envy (+ DAT.)"],["occidō, occidere, occidī, occāsum","to fall down, die, set"]];

wheelock32 = [["custōdia, custōdiae, f.","protection, custody"],["exercitus, exercitūs, m.", "army"], ["paupertās, paupertātis, f.", "poverty, humble circumstances"],["dīves, dīves, dīves (gen. dīvitis or dītis)","rich, wealthy"],["pār, pār, pār (gen. paris)","equal"],["pauper, pauper, pauper (gen. pauperis)","of small means, poor"],["dummodo + subjunctive","provided that, so long as"],["longē","far"],["liberē","freely"],["pulchrē","beautifully"],["fortiter","bravely"],["celeriter","quickly"],["ācriter","keenly"],["felīciter","happily"],["sapienter","wisely"],["facile","easily"],["bene","well"],["male","badly"],["multum","much"],["magnopere","greatly"],["parum","little, not very [much]"],["diū","for a long time"],["longius","farther, too far"],["līberius","more freely"],["pulchrius","more beautifully"],["fortius","more bravely"],["celerius","more quickly"],["ācrius","more keenly"],["fēlīcius","more happily"],["sapientius","more easily"],["melius","better"],["peius","worse"],["plūs","more (quantity)"],["magis","more (quality)"],["prius","before, earlier"],["minus","less"],["diūtius","longer"],["diūtissimē","very long"],["prīmum","in the first place"],["prīmō","first, at first"],["minimē","least"],["maximē","most, especially"],["maximē","most"],["plurimum","most, very much"],["pessimē","worst"],["optimē","best"],["longissimē","farthest, very far"],["liberrimē","most, very freely"],["pulcherrimē","most beautifully"],["fortissimē","most bravely"],["celerrimē","most quicly"],["ācerrimē","most keenly"],["fēlīcissimē","most happily"],["sapientissimē","most wisely"],["facillimē","most easily"],["malō, malle, maluī","to want (something) more, instead; prefer"],["volō, velle, voluī","to want, wish, be willing, will"],["nolō, nolle, noluī","to not ... wish, be unwilling"],["pateō, patēre, patuī","to be open, lie open; be accessible, be evident"],["praebeō, praebēre, praebuī, praebitum","to offer, provide"],["promittō, promittere, promīsī, promissum","to promise, send forth"],["ō, ēre, uī, itum",""],["ō, āre, āvī, ātum",""],["ō, ēre, uī, itum",""],["ō, āre, āvī, ātum",""]];

wheelock33 = [["initium, initiī, n.","beginning, commencement"],["ops, opis, f.","help, aid"],["opēs, opum, f.","power, resources, wealth"],["philosophus, philosophī, m.","philosopher"],["philosopha, philosophae, f.","philosopher"],["plēbs, plēbis, f.","the common people, populace, plebeians"],["sãl, alis, m.","salt; wit"],["speculum, speculī, n.","mirror"],["quis, quid after sī, nisi, num and ne","anyone, anything, someone, something"],["candidus, candida, candidum","shining, bright, white; beautiful"],["merus, mera, merum","pure, undiluted"],["suāvis, suāvis, suāve","sweet"],["-ve","or"],["heu","ah! alas!"],["subitō","suddenly"],["recūsō, recūsāre, recūsāvī, recūsātum","to refuse"],["tradō, tradere, tradidī, traditum","to give over, surrender; hand down, transmit, teach"]];

wheelock34 = [["anima, animae, f.","air, breath, soul, spirit"],["remissiō, remissiōnis, f.","letting go, release, relaxation"],["vōx, vōcis, f.","voice, word"],["adversus, adversa, adversum","opposite, adverse"],["tālis, tālis, tāle","such, of such a sxort"],["vae (+ DAT. or ACC.)","alas, woe to"],["arbitror, arbitrāri, arbitrātus sum","to judge, think"],["conor, conāri, conātus sum","to try, attempt"],["crēscō, crēscere, crēvī, crētum","to increase"],["hortor, hortāri, hortātus sum","to encourage, urge"],["fateor, fatēri, fassus sum","to confess, admitt"],["ēgredior, ēgredī, ēgressus sum","to go out"],["loquor, loquī, locutus sum","to say, speak, tell"],["molīor, molīrī, molītus sum","to work at, build, undertake, plan"],["morior, morī, mortuus sum","to die"],["nāscor, nāscī, nātus sum","to be born, spring forth, arise"],["patior, patī, passus sum","to suffer, endure; permit"],["proficīscor, proficīscī, profectus sum","to set out, start"],["rūsticor, rūsticāri, rūsticātus sum","to live in the country"],["sedō, sedēre, sēdī, sessum","to sit"],["sequor, sequi, secutus sum","to follow"],["spectō, spectāre, spectāvī, spectātum","to look at, see"],["ūtor, ūtī, ūsus sum (+ ABL.)","to use; enjoy, experience"]];

wheelock35 = [["aestās, aestātis, f.","summer"],["iānua, iānuae, f.","door"],["pectus, pectoris, n.","breast, heart"],["praemium, praemiī, n.","reward, prize"],["īrātus, īrāta, īrātum","angry"],["antepōnō, antepōnere, antepōsuī, antepōsitum","to put before, prefer"],["fōveō, fōvēre, fōvī, fōtum","to comfort, nurture, cherish"],["ignōscō, ignōscere, ignōvī, ignōtum (+ DAT.)","to grant pardon to, forgive"],["imperō, imperāre, imperāvī, imperātum (+ DAT.)","to give orders to, command"],["mīror, mīrārī, mīrātus sum","to marvel at, admire, wonder"],["noceō, nocēre, nocuī, nocitum (+ DAT.)","to do harm to, harm, injure"],["nūbō, nūbere, nūpsī, nūptum","to cover, veil, + DAT. to be married to, marry"],["parcō, parcere, pepercī, parsurum (+ DAT.)","to spare"],["pāreō, pārēre, pāruī (+ DAT.)","to be obedient to, obey"],["persuādeō, persuādēre, persuāsī, persuāsum (+ DAT.)","to succeed in urging, persuade"],["placeō, placēre, placuī, placitum (+ DAT.)","to be pleasing to, please"],["sapiō, sapīre, sapīvī","to have good tase, have good sense, be wise"],["serviō, servīre, servīvī, servītum (+ DAT.)","TO BE A SLAVE TO, SERVE"],["studeō, studēre, studuī (+ DAT.)","to direct one's zeal to, be eager for, study"],["subrideō, subridēre, subrīsī, subrīsum","to smile (down) upon"],["",""],["",""],["",""],["",""],["",""]];

wheelock36 = [["cupīdo, cupīdinis, f.","desire, passion"],["lēctor, lēctoris, m.","reader"],["lēctrīx, lēctrīcis, f.","reader"],["vinculum, vinculī, n.","bond, chain, fetter"],["cōtīdiē","daily, every day"],["fortasse","perhaps"],"accēdō, accēdere, accessī, accessum","to come to, approach"],"carpō, carpere, carpsī, carptum","to harvest, pluck; seize"],"cogō, cogere, coegī, coactum","to drive or bring together, force, compel"],"contemnō, contemnere, contempsī, contemptum","to despise, scorn"]["curō, curāre, curāvī, curātum","to care for, attend to; heal, cure; take care"],["contundō, contundere, contudī, contunsum","to beat, crush, bruise, destroy"],["dēcernō, dēcernere, dēcrēvī, dēcrētum","to decide, settle, decree"],["exigō, exigere, exēgī, exactum","to drive out, force out, exact, drive through, complete"],["fiō, fierī, factus sum","to occur, happen; become; be made, be done"],["oblectō, oblectoblectāre, oblectāvī, oblectātum","to please, amuse, delight, pass time pleasantly"],["orō, orāre, orāvī, orātum","to speak, plead, be, beseech, entreat, pray"],["requīrō, requīrere, requīsīvī, requīsitum","to seek, ask for; miss, need, require"],["recreō, recreāre, recreāvī, recreātum","to restore, revive; refresh, cheer"],["serenō, serenāre, serenāvī, serenātum","to make clear, brighten; cheer kup, soothe"]];

wheelock37 = [["Athēnae, Athēnārum, f.","Athens"],["domus, domūs (domī), f.","house, home"],["humus, humī, f.","ground, earth, soil"],["iter, itineris, n.","journey, route, road"],["rūs, rūris, n.","the country, countryside"],["Syrācūsae, Syrācūsārum, f.","Syracuse"],["grātus, grāta, grātum","pleasing, agreeable; grateful"],["idōneus, idōnea, idōneum","suitable, fit, appropriate"],["immōtus, immōta, immōtum","unmoved; uknchanged, unrelenting"],["forīs","out of doors, outside"],["eō, īre, iī, itum","to go"],["abeō, abīre, ababiī, abitum","to go away, depart, leave"],["adeō, adīre, adiī, aditum","to go to, approach"],["exeō, exīre, exiī, exitum","to go out exit"],["ineō, inīre, iniī, initum","to go in, enter; enter into, begin"],["obeō, obīre, obiī, boitum","to go up against, mee, die"],["pereō, perīre, periī, peritum","to pass away, be destroyed"],["redeō, redīre, rediī, reditum","to go back, return"],["interficiō, interficere, interfecī, interfectum","to kill, murder"],["licet, licēre, licuit (+ DAT.)","it is permitted (for someone to do something), one may"],["pergrīnor, pergrīnārī, pergrīnātus sum","to travel abroad, wander"],["requiēsco, requiēscere, requiēvī, requiētum","to rest"],["soleō, solēre, solitus sum","to be accustomed"]];

wheelock38 = [["arbor, arboris, f.","tree"],["dignitās, dignitātis, f.","merit, prestige, dignity"],["dolor, doloris, m.","pain, grief"],["odium, odiī, n.","hatred"],["opus, operis, n.","a work, task; deed, accomplishment"],["ōrātiō, ōrātiōnis, f.","speech"],["pēs, pedis, m.","lower leg, foot"],["sator, satōris, m.","sower, planter; begetter, father; founder"],["fīrmus, fīrma, fīrmum","firm, storng, reliable"],["mīrābilis, mīrābilis, mīrābile","amazing, wondrous, remarkable"],["prīstinus, prīstina, prīstinum","ancient; former, previous"],["etsī","even if, although"],["erga (+ ACC.)","toward"],["libenter","with pleasure, gladly"],["impēdiō, impēdīre, impēdīvī, impēdītum","to impede, hinder, prevent"],["metuō, metuere, metuī","to fear, dread; be afraid for (+ DAT.)"],["recognōscō, recognōscere, recognōvī, recognitum","to recognize, recollect"],["suspendō, suspendere, suspendī, suspensum","to hand up, suspend; interrupt"],["vēndō, vēndere, vēndidī, vēnditum","to sell"],["queror, querī, questus sum","to complain, lament"]];

wheelock39 = [["aedificium, aedificiī, n.","building, structure"],["iniūria, iniūriae, f.","injustice, injury, wrong"],["mulier, mulieris, f.","woman"],["transitus, transitūs, m.","passing over, transit, transition"],["ventus, ventī, m.","wind"],["cupidus, cupida, cupidum","desirous, eager, fond (+ GEN.)"],["līberālis, līberālis, līberāle","decent, liberal, generous; of, relating to a free person; worthy of a free man"],["necesse","necessary, inevitable"],["necesse est","it is necessary"],["vetus, vetus, vetus (gen. veteris)","old"],["quasi","as if, as it were"],["ambulō, ambulāre, ambulāvī, ambulātum","to walk"],["experior, experīrī, expertus sum","to try, test"],["lībō, lībāre, lībāvī, lībātum","to pour alibation of, on; pour ritually; sip; touch gently"],["ō, āre, āvī, ātum",""],["oportet, oportēre, oportuit","it is proper, right, necessary"],["oppugnō, oppugnāre, oppugnāvī, oppugnātum","to fight against, attack, assault, assail"],["ōrnō, ōrnāre, ōrnāvī, ōrnātum","to equip, furnish, adorn"],["pernoctō, pernoctpernoctāre, pernoctāvī, pernoctātum","to spend or occupy the night"],["transeō, transīre, transiī, transitum","to go across, cross; pass over, ignore"]];


wheelock40 = [["aes, aeris, n.","bronze"],["dominus, dominī, m.","master (of a household), lord"],["domina, dominae, f.","mistress, lady"],["lācrima, lācrimae, f.","tear"],["mēta, mētae, f.","turning point, goal; limit, boundary"],["monumentum, monumentī, n.","monument"],["nāsus, nāsi, m.","nose"],["saxum, saxī, n.","rock, stone"],["vultus, vultūs, m.","countenance, face"],["iūstus, iūsta, iūstum","just, right"],["tot","so many, as many"],["tot ... quot","as many ... as"],["praeter (+ ACC.)","besides, exceopt; beyond, past"],["nōnne","introduces a question expecting the answer 'yes'"],["num","introduces a question expecting the answer 'no'""],["omnīnō","wholly, entirely, altogether"],["postrēmum","after all, finally; for the last time"],["quīn","indeed, in fact, furthermore"],["explicō, explicāre, explicāvī, explicātum","to unfold; explain; spread out, deploy"],["fatīgō, fatīgāre, fatīgāvī, fatīgātum","to weary, tire out"],["for, fārī, fatus sum","to speak (prophetically), talk, foretell"],["ōpinor, ōpinārī, ōpinatus sum","to suppose"],["reperiō, reperīre, repperī, repertum","to find, discover, learn; get"],["vereor, verērī, veritus sum","to show reverence for, respect; be afraid of, fear"]];

stage = [["ō, āre, āvī, ātum",""],["ō, ēre, uī, itum",""],["a, ae, f.",""],["ō, īre, īvī, ītum",""],["ō, ere, ī, tum",""],["",""],["",""],["",""],["",""],["",""],["",""],["",""],["",""],["",""],["",""],["",""],["",""],["",""],["",""],["",""],["",""],["",""],["",""],["",""]];

*/

function hideBackBox(){
  document.getElementById("backBox").style.display = "none" ;
}

function unHideBackBox(){
  document.getElementById("backBox").style.display = "block" ;
}

function hideProgressBar(){
  document.getElementById("myProgress").style.display = "none" ;
}

function unHideProgressBar(){
  document.getElementById("myProgress").style.display = "block" ;
}

function hideLabel(){
  document.getElementById("label").style.display = "none" ;
}

function unHideLabel(){
  document.getElementById("label").style.display = "block" ;
}

function hideLabelBox(){
  document.getElementById("labelBox").style.display = "none" ;
}

function unHideLabelBox(){
  document.getElementById("labelBox").style.display = "block" ;
}

function hideBox1(){
  document.getElementById("box1").style.display = "none" ;
}

function unHideBox1(){
  document.getElementById("box1").style.display = "block" ;
}

function hideBox2(){
  document.getElementById("box2").style.display = "none" ;
}

function unHideBox2(){
  document.getElementById("box2").style.display = "block" ;
}

function hideDemo(){
  document.getElementById("latin").style.display = "none" ;
}

function unHideDemo(){
  document.getElementById("latin").style.display = "block" ;
}
function hideDemo2(){
  document.getElementById("trans").style.display = "none" ;
}

function unHideDemo2(){
  document.getElementById("trans").style.display = "block" ;
}

hideBox2();
hideDemo();
hideDemo2();
hideBackBox();


function changeBoxColorsTwo(){

  document.getElementById("box1").style.background= "yellow" ;
  document.getElementById("box1").style.borderColor= "black" ;

  document.getElementById("latin").style.background= "black" ;
  document.getElementById("latin").style.borderColor= "white" ;

  document.getElementById("trans").style.background= "white" ;
  document.getElementById("trans").style.borderColor= "black" ;
  document.getElementById("trans").style.color= "black" ;
}


function startGame(){

  //This extracts the user's input
  var x = document.getElementById("labelBox").value;
  //console.log(x);

  hideLabel();
  hideLabelBox();
  hideDemo();
  hideDemo2();


 //This activitates boxes 1 and 2 to start the Latin to English game
  document.getElementById("box1").onclick = function(){startLatinGame()};
  document.getElementById("box2").onclick = function(){giveEnglishAnswerOne()};

  //The activates the Progress Bar
  document.getElementById("myBar").onclick = function(){move()};

//This sets the colors of box 1 for the first game
  document.getElementById("box1").innerHTML = "Let's Go!"
  document.getElementById("box1").style.background = "yellow";
  document.getElementById("box1").style.color = "black";

  //This loads the data into the game
    resetGame();

}

function restartGame(){

  //This sets the colors of box 1 for the first game
    document.getElementById("box1").innerHTML = "Select Chapter"
    document.getElementById("box1").style.background = "yellow";
    document.getElementById("box1").style.color = "black";


  //This extracts the user's input
  //var x = document.getElementById("labelBox").value;
  //console.log(x);

  unHideLabel();
  unHideLabelBox();
  hideProgressBar();
  hideDemo();
  hideDemo2();
  hideBox2();
  unHideBox1();
  hideBackBox();

 //This activitates boxes 1 and 2 to start the Latin to English game
  document.getElementById("box1").onclick = function(){startGame()};
  //document.getElementById("box2").onclick = function(){giveEnglishAnswerOne()};

  //The activates the Progress Bar
  //document.getElementById("myBar").onclick = function(){move()};

//This loads the data into the game
  //resetGame();





}





function startEnglishGame(){


  //document.getElementById("myBar").onclick = function(){move()};
  //This move() function increases the Progress Bar on each click.
  move();
  document.getElementById("myProgress").style.background= "yellow";
  document.getElementById("myProgress").style.borderColor= "white";
  document.getElementById("myBar").style.background= "blue";
  document.getElementById("myBar").style.color= "white";
  document.getElementById("myBar").style.borderColor= "white";

document.getElementById("box1").innerHTML = "Let's Go!"
document.getElementById("box1").style.background = "blue";
document.getElementById("box1").style.color = "white";
document.getElementById("box2").style.background = "blue";
document.getElementById("box2").style.color = "white";
document.getElementById("latin").style.color = "yellow";
document.getElementById("trans").style.color = "blue";

//resetSentence();

if (vocArry.slice(0,1).length ==0){
  document.getElementById("myProgress").style.display = "none" ;
document.getElementById("latin").innerHTML = "finis";
document.getElementById("trans").innerHTML = "The End!";
document.getElementById("box1").innerHTML = "Trick Me Again!"
document.getElementById("box1").style.background = "blue";
document.getElementById("box1").style.color = "white";
document.getElementById("box2").style.color = "black";
document.getElementById("latin").style.color = "white";
document.getElementById("trans").style.borderColor= "black" ;
document.getElementById("trans").style.color = "black";
document.getElementById("box1").onclick = function(){startLatinGame()};
document.getElementById("box2").onclick = function(){giveEnglishAnswerOne()};

resetGame();

document.getElementById("myBar").onclick = function(){move()};

} else {

document.getElementById("box1").innerHTML = "Next!"
removed = vocArry.splice(0,1);

    hideBox1();
    unHideBox2();
    unHideDemo();
    hideDemo2();


    document.getElementById("latin").innerHTML = removed[0][1];
}

}

function giveLatinAnswerOne(){


  unHideBox1();
  hideBox2();
  unHideDemo2();


  document.getElementById("trans").innerHTML = removed[0][0];

}









function startLatinGame(){


unHideBackBox();
  move();

  document.getElementById("myProgress").style.background= "white";
  document.getElementById("myProgress").style.borderColor= "black";
  document.getElementById("myBar").style.background= "yellow";
  document.getElementById("myBar").style.color= "black";
  document.getElementById("myBar").style.borderColor= "black";

  document.getElementById("box1").innerHTML = "Select Chapter"
  document.getElementById("box1").style.background = "yellow";
  document.getElementById("box1").style.color = "black";

//document.getElementById("box1").innerHTML = "Next!"
//document.getElementById("box1").style.background = "blue";
//document.getElementById("box1").style.color = "white";

document.getElementById("box2").style.background = "yellow";
document.getElementById("box2").style.color = "black";

document.getElementById("latin").style.background = "black";
document.getElementById("latin").style.color = "white";

document.getElementById("trans").style.borderColor= "black" ;
document.getElementById("trans").style.background = "white";
document.getElementById("trans").style.color = "black";

//resetSentence();

if (vocArry.slice(0,1).length ==0){
  document.getElementById("myProgress").style.display = "none" ;
document.getElementById("latin").innerHTML = "finis";
document.getElementById("trans").innerHTML = "The End!";
document.getElementById("box1").innerHTML = "Trick Me Again!"
document.getElementById("box1").style.background = "blue";
document.getElementById("box1").style.color = "white";
document.getElementById("box2").style.color = "black";

document.getElementById("latin").style.color = "white";
document.getElementById("trans").style.color = "black";
document.getElementById("box1").onclick = function(){startEnglishGame()};
document.getElementById("box2").onclick = function(){giveLatinAnswerOne()};


resetGame();

document.getElementById("myBar").onclick = function(){move()};

} else {
document.getElementById("box1").innerHTML = "Next!"
removed = vocArry.splice(0,1);

    hideBox1();
    unHideBox2();
    unHideDemo();
    hideDemo2();
    //changeBoxColorsOne();

    document.getElementById("latin").innerHTML = removed[0][0];
}


}

function giveEnglishAnswerOne(){


  unHideBox1();
  hideBox2();
  unHideDemo2();
  //changeBoxColorsTwo();

  document.getElementById("trans").innerHTML = removed[0][1];


}
