var time = 0;
let c = [];
var tick = 1/(60*120); //20 Times slower = 20 times more precise
var shape = [];
var iterations = 0

var starting_angles = []
var lengths = []



function setup() {
    createCanvas(2000, 2000);
    stroke(255);
    strokeWeight(1);
    frameRate(144);


    c = [[0, 6.96460348978389, -187.50598665184904],
    [-1, 79.04401807882321, 126.72306842973586],
    [-2, 22.570632074900697, 127.58686973225228],
    [2, -3.1759990201519583, 103.3425091371827],
    [-4, 80.3916354181283, 45.08677832185982],
    [6, -59.21482687672736, 15.037157827254424],
    [5, -55.1476322551272, 21.959353230358875],
    [4, -50.72630051449175, -12.222538956786337],
    [-3, 48.822001783841955, 13.513535379757627],
    [-12, -12.87147320738219, 40.31179539371214],
    [-11, -14.551825758885384, 39.3704858314225],
    [7, -21.34165034029944, 28.15258465444179],
    [3, -25.22507525135593, -20.149183969499354],
    [1, 0.06837018180549304, 30.745458604228826],
    [16, 5.923687463811348, -29.702305538368886],
    [-8, -27.863574372437235, 6.96958393742129],
    [-16, -7.90710869272375, 26.99340034909865],
    [-9, -26.873318513892297, 5.131066223572974],
    [-13, -16.270666591912505, 21.73785250608859],
    [-5, 18.701503195751528, 17.35859529320015],
    [8, 7.812335166199684, -24.166092503323],
    [30, -24.773856034157937, 1.1040280787234866],
    [-17, -15.331413507800933, 16.690150037428662],
    [-10, -10.8252651188511, 19.1401679754834],
    [27, -7.631095098243373, 19.808556927751695],
    [17, -6.2561173210840275, -19.787732967653728],
    [31, -16.27238275158036, 12.120881895684825],
    [21, 13.382172518710247, -14.39432940652192],
    [-35, -14.892817767032694, 12.323663532079573],
    [35, -18.704196148049462, -3.556960918961457],
    [9, -13.297096881609484, -13.038075438827988],
    [-27, -18.545937807386487, 1.0953311732267093],
    [-22, -16.689413036903463, -5.42001314889552],
    [-32, -16.58752626882462, 5.6540295335965425],
    [-21, -7.520553078006576, 15.782062032652604],
    [-30, -12.628326432892047, 11.746999963087443],
    [14, -16.984533290787404, 1.8450114208351636],
    [13, -16.390408270702864, 3.6383069984686007],
    [-31, -15.721904094950784, 5.63713340586698],
    [-26, -15.2190122634019, 4.677650751118257],
    [15, 14.052311726867567, 7.443853643527634],
    [37, -3.514205359023676, -15.452912127033745],
    [20, 11.497271168661573, 9.913786469682487],
    [-14, -3.4994813347793436, 14.650191672401629],
    [-18, -10.087091033013294, 10.96828614915936],
    [12, -13.110461383381839, 6.613550825626884],
    [34, -13.55263689168793, -5.124899902408302],
    [-33, -12.690600645488772, 6.473187089000207],
    [26, -4.807234496007496, 13.376278741700384],
    [29, -14.137789671157686, 0.9765808667467832],
    [32, -13.950573767588882, 1.1047497178934549],
    [-36, -12.211152845630384, 5.59133704054322],
    [11, -3.5248136006787094, -12.720528851095525],
    [33, -12.374067474174833, -3.3346769264402827],
    [-7, -4.250722327380571, 11.893242951662797],
    [-23, -11.529683110162402, -4.356058694253799],
    [-28, -10.004044002910604, 6.258748872038661],
    [-15, 5.517324473218755, 9.537673824875863],
    [-37, -10.602185535866974, 2.823653955733958],
    [36, -7.861239726386143, -6.840335973575103],
    [-40, -8.738724682403573, 5.25528381779819],
    [28, -2.11435887378485, 9.932096931395936],
    [51, -5.159196052530123, 8.218878917296443],
    [-29, -9.24658006971564, 1.3020210341428697],
    [-53, -8.214335351152103, -3.5983531344157083],
    [-34, -8.38758095329812, 2.91533043791108],
    [-51, -6.781898242657901, -5.729493016290184],
    [-24, -5.891472904208037, -6.472525429106462],
    [18, -0.3820513626759674, -8.659145280588387],
    [-6, 1.6582911618872451, -8.12851142497278],
    [38, -4.875463397622098, -6.697050565234922],
    [23, 8.25242118436467, 0.3780383488736198],
    [25, -4.479267836099048, 6.719182021578507],
    [-19, -6.364066532419836, 4.834705474298804],
    [-20, -6.1753683478852945, 4.4296063778359285],
    [56, -6.682249275269722, 3.3415304885561645],
    [10, 3.6174117083276265, -6.4643618769464615],
    [-38, -6.558478291259965, 3.1649453982741407],
    [53, -4.0042126028214495, 5.98767901511881],
    [-54, -6.710809880864434, -2.2938094406824043],
    [-46, -5.5287257953200095, -4.187288935366909],
    [52, 0.7319782735897545, 6.8712363601021735],
    [49, -0.665221719891867, 6.855536177581548],
    [-49, -5.518099910431353, -4.116927567385336],
    [-52, -2.9497433373779267, -6.074327484712737],
    [54, -5.655527754445906, 3.5981778455443454],
    [55, -6.21514103457859, 2.0878163874748488],
    [48, 2.141602462708447, 6.167914365409824],
    [-50, -3.7705218613654496, -5.318893182239905],
    [-25, -5.727600867138652, 2.3556802610453924],
    [-58, -5.576899869142013, -2.543987920197725],
    [46, -3.8013113676142627, 4.633725458024968],
    [22, 4.447540233901774, 3.7918693774607246],
    [44, 3.798810814142354, 4.366055649547288],
    [-39, -5.455275654296214, 1.8218249379456568],
    [-61, -1.9735655779572907, -5.296278918782223],
    [24, 5.4162420951102765, -1.5924736763374001],
    [41, 4.366693259981248, -3.4256757470797177],
    [-41, -5.183139940143846, -1.9259341758239796],
    [45, 5.159758753651186, 1.6375190037001615],
    [-47, -1.5415945733452519, -5.166809801828916],
    [-42, -4.686389499749881, -2.441550237444888],
    [-56, -4.048481768866903, -3.332746639320747],
    [-78, 1.2248256235575137, -4.856088671140482],
    [-63, 0.31187864976391616, -4.943693560590825],
    [-73, 0.8372952620110983, -4.851739665346779],
    [97, 1.7027704559970256, 4.451104321823891],
    [-82, 0.24356570336223332, -4.627511317041053],
    [-98, 4.542171894359926, -0.6032610700268799],
    [-60, -1.7123109473271327, -4.189991266553173],
    [79, -1.0048020145269803, 4.412535468242253],
    [58, -4.508192834136141, -0.2106976320118329],
    [19, 4.206884919479954, -1.494371716953314],
    [-45, -3.6969915839759704, -2.2660770049985803],
    [-57, -2.9820678150592257, -3.1246479484296112],
    [98, 3.957850375146511, 1.2815462771051973],
    [74, 1.299171971477367, 3.9330889646518568],
    [-68, 0.2897101816315275, -4.11491990665683],
    [-71, 1.0928352886044177, -3.9594260115709456],
    [-77, 1.278282328486867, -3.7308367903083024],
    [78, -1.0861141870614888, 3.789645929380417],
    [62, -2.7410312317880847, -2.8105667560538565],
    [47, -0.7534465577756481, 3.8187256045187534],
    [-48, -1.5910869566731125, -3.53198206457453],
    [83, -2.4066010866005163, 2.9222183443725274],
    [-101, 3.2532228043596283, -1.8802184711012315],
    [82, -2.2862208428386372, 2.9148761625208124],
    [73, 2.4606813594768067, 2.6492675535713377],
    [100, 1.2638139896053293, 3.341022708926725],
    [-66, 0.017836877153074415, -3.5373972210057314],
    [57, -3.423648404772643, 0.7468251428380064],
    [-72, 0.9621610751032972, -3.3448740626368507],
    [75, 0.9469893542748898, 3.294395964924237],
    [-64, -1.321486322493798, -3.1539009831768703],
    [-59, -1.854187416040997, -2.857043013513283],
    [40, 0.438297416551804, -3.3624360748585347],
    [-55, -3.0385791456918207, -1.4631744914424583],
    [95, 3.3237761129795804, 0.05534781836607097],
    [-81, -0.5187767459276911, -3.2569722277801945],
    [42, 0.6064944691072199, -3.231541256821048],
    [61, -2.07366369333185, -2.5486608159353388],
    [-74, 1.6770445974440413, -2.824395677651379],
    [-65, -1.2936132078925822, -3.0172702533974207],
    [-83, -1.1225847327093146, -3.0765378805431998],
    [72, 1.410201671696776, 2.8638524064428985],
    [-70, 1.4225354540053945, -2.8245333386816966],
    [-76, -0.0936224190088564, -3.0436495553241754],
    [-97, 1.2635298722840567, -2.7573616399544143],
    [39, -2.1597346363722707, -2.1238559650546756],
    [102, 0.2951981758191031, 2.99945631326935],
    [50, 0.11203145259585634, 2.930760096057916],
    [-75, 0.627034785720496, -2.8645648218169844],
    [-79, 1.0252267280271792, -2.6445631637774003],
    [105, -0.1643091579278495, 2.764079801351511],
    [-44, -1.7645602013019797, -2.1201862457191836],
    [118, 2.592595319238923, -0.7873646861743907],
    [71, 1.3412169269383616, 2.343564972900963],
    [86, -1.6217379208955927, 2.0967630286142214],
    [94, 1.9095337453756374, 1.8039745214873992],
    [59, -2.066511961555122, -1.5844355149922074],
    [-113, 0.57390309640544, 2.416143198739619],
    [-118, 1.9982597242955744, 1.4688880966039926],
    [64, -1.4057803304768075, 2.0373320856555868],
    [-85, -1.5924076475558377, -1.8531116085760098],
    [101, 1.10733325975544, 2.0951834822656767],
    [77, -0.7047400809318445, 2.261707705798267],
    [-91, 0.38557182503593934, 2.2937180561080504],
    [-104, 1.2327293111644944, -1.9382774534213252],
    [-95, 1.859781047360046, 1.3251310978824038],
    [-96, 1.5529380975356903, 1.666643491209522],
    [114, 1.3554430789802967, -1.8195017455357299],
    [119, 2.1925084924942335, -0.5177172471034361],
    [-114, 0.017369087282632617, 2.2144975243661307],
    [-94, 1.8901469566158462, 1.1506597172113335],
    [-99, 1.737246498653606, 1.2942169433545354],
    [-117, 1.1909986371865886, 1.7648207905324127],
    [103, 0.9244681628599855, 1.9159067655180748],
    [-120, 1.9008911438995, 0.7902684489451015],
    [117, 1.9200977438453442, -0.6207455342975187],
    [76, -0.92230761715428, 1.7621228518105456],
    [-93, 1.7625715246662537, 0.9207003206170705],
    [-123, 1.9262721751675669, -0.47329730300136963],
    [121, 1.9094512696298653, 0.5199895478718858],
    [70, 1.6115172338521822, 1.0543868796141134],
    [-119, 1.6182569910884312, 1.0315724363871384],
    [-116, 1.2969549017982878, 1.4031955094646444],
    [90, -0.20622092163865613, 1.8669310607445475],
    [-110, -0.8540748687445194, 1.664157000373288],
    [68, 1.8325093153678007, 0.35484817198430596],
    [-122, 1.8014728954660921, 0.3031514845211582],
    [135, 0.7773249922848484, -1.6019066560988686],
    [-88, -1.0034674337451341, 1.4082616585668735],
    [-115, 0.959284472983635, 1.4271595925219165],
    [80, 0.29074813701320534, 1.672095277216763],
    [113, 0.8611855831140606, -1.413136818898597],
    [-86, -1.0795552251720213, -1.2532027332255673],
    [-102, 1.558359058068259, -0.5339353249129328],
    [60, -0.7145221546546209, -1.4622999990143948],
    [-69, 0.40531089345471677, -1.572410039327469],
    [120, 1.59542441516058, -0.1152184044871379],
    [-43, 1.362664328684155, 0.8371750118856944],
    [87, -0.28193020137646374, 1.5576903679173928],
    [43, 1.517056649834251, 0.3444248988590019],
    [122, 1.5257163876382918, 0.2038838516068795],
    [116, 1.5354116396898196, 0.06766381606650966],
    [140, 1.287625566356502, -0.8228996162266362],
    [132, 0.44566055379346803, -1.4477142765622792],
    [92, 1.506769506691427, -0.1175600821141604],
    [-107, -0.33097518091452915, -1.4746262628890572],
    [139, 1.096526775448105, -0.994689313565145],
    [66, 1.4550777559792825, 0.2597019815855504],
    [91, 1.4203055389192398, -0.37334256880381755],
    [-121, 1.4234828184984822, 0.31311650294361004],
    [-100, 0.1771224058015013, -1.4365805621280074],
    [136, 1.0243104125504974, -1.0001961171662563],
    [-84, -0.8044348895555544, -1.1630277326836502],
    [-80, -0.5442590065669105, -1.2889315138772504],
    [123, 1.280671852472874, 0.540382442849629],
    [88, 0.7205980075739754, -1.1795849115773587],
    [107, -0.31925500446551813, 1.3365059998758648],
    [-140, -0.31127284164787794, 1.3352879221355582],
    [99, 1.1756820790201232, 0.6588739550709751],
    [133, 0.9861042124948124, -0.9169151185518908],
    [115, 1.086344612770692, -0.7900951936009402],
    [137, 0.9667847152033807, -0.9296359622110201],
    [146, 0.259770739193263, -1.3067871182278776],
    [-141, -0.2146345183315761, 1.3119116254366072],
    [125, 1.120194441051471, -0.7036604609961599],
    [145, 0.31778795784961544, -1.2671126605720713],
    [67, 1.028739691842274, -0.8042423545389581],
    [-108, 1.1435255767808477, -0.6290808654531616],
    [-142, 0.4167497837851734, 1.2253110002357879],
    [124, 1.2931101644743002, 0.01727573061928871],
    [-167, 0.03983850787524104, 1.2850022169666855],
    [-109, 0.04449689315967692, 1.2767656253291495],
    [-144, 0.7536849996705057, 0.9943049524076581],
    [84, -1.245842624535968, 0.056436407454017956],
    [166, -0.5533373696275431, -1.1159424304720857],
    [-139, -0.36194407607019496, 1.1809678544953626],
    [-124, 1.2044999557679865, -0.19711625902250574],
    [143, 0.017635596520282903, -1.205604771017853],
    [-143, 0.15145392126542484, 1.1912053715119435],
    [104, -0.20458201382153585, 1.1765284741531996],
    [-125, 1.191256323191225, 0.07293581297802476],
    [85, -0.8542587240143312, 0.8093970651215229],
    [163, -0.9381081056581243, -0.7007417926207883],
    [142, 0.36286658634820346, -1.0861200265402642],
    [167, -0.512147126328218, -1.0070162969402379],
    [147, 0.377616231484472, -1.0642948051627086],
    [138, 0.42107727165809705, -1.0197835819841665],
    [108, -0.16216463497933997, 1.0905886353348848],
    [106, 0.5325824766403658, 0.9521093995631945],
    [-166, -0.09001694138283078, 1.0848747564588752],
    [-127, 0.359852498067182, -1.0226989190709082],
    [-131, -0.9955425944930677, -0.42926550771670136],
    [65, 0.20093414540028454, -1.0553994061646126],
    [-138, -0.393510222105069, 0.9990030046421821],
    [129, 1.0092577643175242, -0.34215448375648244],
    [-162, -0.7022725155857943, 0.7982853681569602],
    [161, -0.6840776989345175, -0.8018805812799092],
    [165, -0.4535252193875632, -0.9487682424141393],
    [128, 0.9506979238571073, -0.43804531432942306],
    [144, 0.6338934517053991, -0.8272765285482319],
    [-105, 0.8923456272643712, -0.5360737783029216],
    [-134, -0.8354255722374544, 0.5896013292512177],
    [89, -0.9912021558880912, -0.19166111025095975],
    [164, -0.5984759871569408, -0.8109999140375077],
    [186, -1.0016299917904992, 0.0238799707360145],
    [-146, 0.9640097453342844, 0.21014886152971285],
    [-145, 0.7104673563914925, 0.6616111130892636],
    [-164, -0.1901868966871494, 0.9417806355799194],
    [150, 0.24682819604011264, -0.9243030429643574],
    [-163, -0.44934406628170553, 0.8424404126472741],
    [-185, -0.6968019188155293, 0.6526142761335558],
    [-147, 0.7959057716877633, 0.5174566467506443],
    [-161, -0.6368884100661447, 0.7024260641805675],
    [185, -0.9183320420789218, -0.17783685485906564],
    [126, 0.9290864068598113, 0.06944793971278787],
    [-159, -0.8341735130677069, 0.4124387298462894],
    [-165, -0.08854458344158128, 0.9236193663619388],
    [156, -0.4966848972479674, -0.7761496859570935],
    [130, 0.5502886896637263, -0.7220169152549838],
    [168, -0.5210588970409233, -0.7362872162824121],
    [-103, 0.15876222351999092, -0.8863798657433072],
    [-67, 0.7085553472142798, -0.5525454203579089],
    [-87, -0.8254938400462839, -0.3295225089742181],
    [-62, 0.0815202263787636, -0.8604527714885727],
    [69, 0.5029441503305447, -0.6853480725206386],
    [-160, -0.6572282995602685, 0.511550881264194],
    [134, 0.3338688403706985, -0.7586888624075901],
    [154, -0.30730145923650887, -0.7662684435838913],
    [157, -0.17020500845361636, -0.7975675578847632],
    [151, -0.0010405599195699722, -0.8047551238992765],
    [63, 0.6087607653934551, -0.5225374624950974],
    [-188, -0.42705313896840125, 0.6776850740877003],
    [-137, -0.16546605821171073, 0.7804147996128945],
    [141, 0.5548245247877026, -0.5671869259037685],
    [-135, -0.6231505048428879, 0.4873692128400649],
    [158, -0.31888836426654116, -0.7172681042471272],
    [93, 0.6848532831407705, 0.3749888307509426],
    [181, -0.6319240939938338, 0.39736112894665554],
    [159, -0.380425769514023, -0.6294391838561624],
    [-180, -0.6930245944767166, 0.23273009287054003],
    [81, -0.5201433382508578, 0.5099724770367781],
    [162, -0.5227715908064198, -0.5048668036789268],
    [160, -0.33284078725521493, -0.6316180090264353],
    [-133, -0.49051291889114274, 0.5062407110533894],
    [-171, 0.6491946624526005, 0.2715012675965457],
    [-157, -0.6907997712168729, 0.12000354563519133],
    [184, -0.6757830375324861, 0.17435156328740642],
    [-184, -0.5665376019673658, 0.40213777736065204],
    [-126, 0.5284857943157284, -0.44733468187149383],
    [-90, 0.2537414479372846, 0.6271215011186548],
    [-192, -0.16387692370680246, 0.6436249058021019],
    [-111, -0.20443798588489692, 0.6312590498603705],
    [149, 0.5160255560886026, -0.4099779544509633],
    [148, 0.31838947458119093, -0.5658056262977867],
    [183, -0.6158952997552447, 0.20189237930806797],
    [187, -0.587089955339552, -0.2599173963963821],
    [-169, 0.23011639635826156, 0.598481755992494],
    [182, -0.5595635735061683, 0.2766890636011715],
    [-92, -0.19770913598584972, -0.5868743648677144],
    [155, 0.039669176722600175, -0.6164158267618295],
    [-89, 0.0033187077081441585, 0.6151978559032337],
    [-128, 0.5439808074249753, -0.277032065078367],
    [-193, 0.0082367111177018, 0.6102714748493246],
    [172, -0.46382640358633365, -0.3820548898540881],
    [-158, -0.5993266514383035, 0.0006117067638041762],
    [190, -0.3607577383309103, -0.46052879181053974],
    [-181, -0.5622408325261747, 0.15291631359872632],
    [-168, 0.0005733322440182875, 0.5820337047935407],
    [131, 0.3280988085454798, -0.47704134780427665],
    [-190, -0.20027228824835222, 0.5389855222891624],
    [-183, -0.4137400375126721, 0.3759312957967548],
    [200, -0.17609652134599346, 0.5279140335778325],
    [-112, -0.13395013683702445, 0.5346496637642776],
    [111, 0.4700398992258912, -0.2875066897511381],
    [-182, -0.5286196615382672, 0.14849404002948813],
    [179, -0.5360140413562584, 0.0974469396303187],
    [180, -0.521046186858, 0.14839577014302857],
    [-189, -0.23649392898077087, 0.478646640811301],
    [169, -0.09813453212559708, -0.5241926909891222],
    [188, -0.4414369065894451, -0.29852018449738443],
    [-132, -0.09278157681070391, 0.5226718652634408],
    [189, -0.31675603652036577, -0.41606127055312686],
    [-186, -0.4374795487045666, 0.2840639864750394],
    [153, -0.2535619576944779, -0.45253656454367586],
    [-136, -0.33296963337101626, 0.39365327278917045],
    [191, -0.48759355986775044, -0.15958414753682176],
    [152, 0.11558708905341097, -0.4992185115473217],
    [-155, -0.4548033239226768, -0.22155361170575494],
    [192, -0.5037682658970197, -0.03574450682837382],
    [-154, -0.4715632176944979, 0.15195974632401588],
    [-191, -0.19314758994526587, 0.45051082511482327],
    [178, -0.44944756898172245, 0.19440753252551776],
    [173, -0.44337772458391805, -0.1550307025205654],
    [127, 0.26871301397536174, -0.38390256329597067],
    [199, 0.024904101813305157, 0.4600350068030132],
    [-106, -0.42577640037712244, 0.1607658381226893],
    [171, -0.08136194049089696, -0.4440222639091217],
    [175, -0.4227805152925805, 0.02898017209256515],
    [-179, -0.34292053127562516, 0.24767200243276954],
    [-148, 0.39122057864926374, 0.11241907696635456],
    [170, -0.01869566899753916, -0.40609262902578463],
    [-170, 0.21632143628602424, 0.3426314655924151],
    [-198, 0.03498380539424062, -0.39937165634387917],
    [-200, -0.3710857457327244, 0.11599384279450486],
    [176, -0.21121366475636882, -0.3181092320214173],
    [174, -0.3653604155054662, -0.04497898254122332],
    [110, -0.012954789895338381, 0.3617023754135727],
    [-172, 0.22986307659047348, 0.2732385195891107],
    [-187, -0.19152911744546522, 0.2944295062272346],
    [-177, -0.3152666869362474, -0.14337117875314487],
    [-174, 0.30252766224100197, 0.11945756724628387],
    [-151, 0.20867122530832227, -0.24542525045864882],
    [-153, -0.24353731338260987, -0.20851646166799553],
    [-149, 0.3078456456763978, 0.07087956712029364],
    [197, 0.21753962376366043, 0.2245520648840053],
    [96, 0.2616147485802246, 0.15282158515030025],
    [-150, -0.25783262694436737, -0.15107684275236388],
    [-175, -0.16399013970324058, -0.2477536638564376],
    [198, 0.21197548427960178, 0.20755527485050407],
    [194, 0.05800225535986647, -0.28409123541231573],
    [-129, -0.21188153793493264, -0.17825574418225265],
    [-197, 0.02077073015752917, -0.27502004688780923],
    [-156, -0.24031496758204246, 0.11288972357392613],
    [177, -0.24660522953647102, -0.09363807208927943],
    [-195, 0.1478042982473342, 0.21102381417327254],
    [195, -0.12062560724236693, -0.21692558685119573],
    [-178, -0.24257252971280957, -0.028820031668569834],
    [-196, 0.08984601038220985, 0.21251801289921068],
    [-176, 0.09851202904310685, -0.20521502930083013],
    [112, 0.011794477593856767, -0.2158113535663804],
    [-194, 0.1229981114218987, 0.17487951871144714],
    [109, 0.061833532139436764, 0.195342962572774],
    [196, 0.042653691880213396, 0.1989354750040606],
    [-130, -0.17604186777675762, 0.0026511570928452466],
    [-173, 0.09654336831901161, -0.14397733937031842],
    [-152, -0.1095531145338015, 0.04685971806984546],
    [193, -0.03495040212656142, 0.09417589572034751],
    [-199, 0.07570096940867471, 0.011639800265059286]];

    

    iterations = (c.length-1)/2;
    for (let i = 0; i < c.length; i++) {
        x = c[i][1]
        y = c[i][2]

        theta = atan(y/x)
        if (x < 0) {
            theta += Math.PI
        } else if (x > 0 && y < 0) {
            theta += 2*Math.PI
        }
        starting_angles.push(theta)
        lengths.push(Math.sqrt(x**2 + y**2))
    }
    console.log(starting_angles)
    console.log(lengths)


}



function draw() {
    background(0);
    translate(1000, 1000);
    

    stroke(255)
    last_x = 0
    last_y = 0
    for (let i = 0; i < c.length; i++) {
        //Base Frequency is 1 rotation every 20 seconds
        frequency = c[i][0] * 2*Math.PI //Don't change this, only change tick speed
        L = lengths[i]

        strokeWeight(L**(1/6))
        theta = (frequency*time)+starting_angles[i]

        x = L * Math.cos(theta)
        y = 1 * L * Math.sin(theta)

        //Drawing vector circle
        strokeWeight(1)
        stroke(50,100,150, 180)
        circle(last_x, last_y, L*2)

        //Drawing vector line
        l = (L/10)
        strokeWeight(L**(1/6))
        stroke(255)
        line(last_x,last_y,x+last_x,y+last_y)
        
        //Draw vector triangle
        beta = Math.sqrt((L-(l*Math.sqrt(3)))**2+(l/2)**2)
        alpha = Math.atan(l/(2*(L-(l*Math.sqrt(3)))))
        fill(255)
        triangle(last_x+x,last_y+y, last_x+beta*Math.cos(theta-alpha), last_y+beta*Math.sin(theta-alpha), last_x+beta*Math.cos(theta+alpha), last_y+beta*Math.sin(theta+alpha))
        noFill()
        
        

        last_x += x
        last_y += y
    }

    update_shape()
    stroke(255,0,0)
    strokeWeight(6)
    point(last_x, last_y)
    stroke(255)
    shape.push([last_x,last_y])
    

    time += tick;
}  

function update_shape() {
    strokeWeight(2)
    stroke(255, 204, 100);
    beginShape()
    noFill()
    for (let i = 0; i < shape.length; i++) {
        vertex(shape[i][0],shape[i][1]);
    }
    endShape()
}
