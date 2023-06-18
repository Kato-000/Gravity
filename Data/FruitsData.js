const Fruits = `{
    "A1": {
        "name": "リンゴ",
        "weight": 461.1,
        "img": "./img/apple.jpg",
        "explanation": "リンゴ（林檎、学名:Malus domestica, Malus pumila）は、バラ科リンゴ属の落葉高木、またはその果実のこと。植物学上ではセイヨウリンゴと呼ぶ。春、白または薄紅の花が咲く。人との関わりは古く、紀元前から栽培されていたと見られ、16世紀以降に欧米での生産が盛んになり、日本においても平安時代には書物に記述がみられる。現在世界中で生産される品種は数千以上といわれ、栄養価の高い果実は生食されるほか、加工してリンゴ酒、ジャム、ジュース、菓子の材料などに利用されている。西洋美術、特に絵画ではモチーフとして昔からよく扱われる。",
        "wiki": "https://ja.wikipedia.org/wiki/%E3%83%AA%E3%83%B3%E3%82%B4"
    },
    "A2": {
        "name": "パイナップル",
        "weight": 931.4,
        "img": "./img/pineapple.jpg",
        "explanation": "パイナップル（パインアップル、パインナップル、英:Pineapple、学名: Ananas comosus）は、熱帯アメリカ原産のパイナップル科の多年草、またはその肥大した実である。単にパインと略してよばれることもあるほか、漢名は菠蘿（はら、ポーロ）、または鳳梨（ほうり、オンライ、フォンリー）である。中国本土や香港では菠蘿、台湾では鳳梨と表記する。また、植物名としてアナナスとよぶこともあり、果実や可食部のみパイナップルとよんで区別することもある。 「パイナップル」(pineapple)という名前は、本来は松 (pine) の果実 (apple) 、すなわち「松かさ」（松ぼっくり）を指した。",
        "wiki": "https://ja.wikipedia.org/wiki/%E3%83%91%E3%82%A4%E3%83%8A%E3%83%83%E3%83%97%E3%83%AB"
    },
    "A3": {
        "name": "バナナ",
        "weight": 552.9,
        "img": "./img/banana.jpg",
        "explanation": "バナナ（英: Banana、学名 Musa spp.）は、バショウ科バショウ属のうち、果実を食用とする品種群の総称である。また、その果実のこと。別名、甘蕉（かんしょう）、実芭蕉（みばしょう）ともよばれる。東南アジア原産で、いくつかの原種から育種された多年性植物。熱帯～亜熱帯の地域で栽培されるトロピカルフルーツ。種によっては熟すまでは毒を持つものもある。日本では古くは芭蕉と呼ばれた。葉の繊維を主に利用するイトバショウは同属異種。食用果実として非常に重要で、2009年の全世界での年間生産量は生食用バナナが9581万トン、料理用バナナが3581万トンで、総計では1億3262万トンにのぼる。",
        "wiki": "https://ja.wikipedia.org/wiki/%E3%83%90%E3%83%8A%E3%83%8A"
    },
    "A4": {
        "name": "キウイフルーツ",
        "weight": 100,
        "img": "./img/kiwi.jpg",
        "explanation": "キウイフルーツ（英: kiwifruit）は、マタタビ科マタタビ属の雌雄異株の落葉蔓性植物の果実である。また、マタタビ属のActinidia deliciosaを指して特にキウイフルーツともよばれる。温帯の果樹で、秋に果実が実る。商業流通の歴史は浅く、1906年にニュージーランドが新しい果樹のキウイフルーツとして、中国原産のActinidia deliciosaやActinidia chinensisの品種改良に成功、1934年頃から商業栽培を開始し、世界各国で食べられるようになった果物である。「キウイフルーツ」という名称は、ニュージーランドからアメリカ合衆国へ輸出されるようになった際、ニュージーランドのシンボルである鳥の「キーウィ (kiwi)」に因んで1959年に命名された。",
        "wiki": "https://ja.wikipedia.org/wiki/%E3%82%AD%E3%82%A6%E3%82%A4%E3%83%95%E3%83%AB%E3%83%BC%E3%83%84"
    },
    "A5": {
        "name": "パラミツ",
        "weight": 30000,
        "img": "./img/paramitu.jpg",
        "explanation": "パラミツ（ハラミツ、波羅蜜、菠蘿蜜、学名:Artocarpus heterophyllus）はクワ科パンノキ属の常緑高木。英語で、ジャックフルーツ（英: Jack fruit）と呼ばれ、東南アジア、南アジア、アフリカ、ブラジルで果樹などとして栽培されている。東アジアでは台湾南部や中国海南省、広東省、雲南省などで栽培されている。原産はインドからバングラデシュと考えられている。",
        "wiki": "https://ja.wikipedia.org/wiki/%E3%83%91%E3%83%A9%E3%83%9F%E3%83%84"
    },
    "A6": {
        "name": "マンゴスチン",
        "weight": 120,
        "img": "./img/mangosteen.jpg",
        "explanation": "マンゴスチン（英: mangosteen、学名: Garcinia mangostana）は、フクギ属の常緑高木。東南アジアのマレー原産。マレー語、インドネシア語ではマンギス（マレー語: manggis; インドネシア語: manggis）、タイ語ではマンクット（มังคุด）、ベトナム語ではマンクッ（măng cụt）、中国名で「莽吉柿」という。果実は美味で「果物の女王」と称される。フクギ科ではもっとも利用されている種の一つ。リンネの『植物の種』(1753年) で記載された植物の一つでもある。名称にmangosteenとあるが、mango（マンゴー）との関連はない。",
        "wiki": "https://ja.wikipedia.org/wiki/%E3%83%9E%E3%83%B3%E3%82%B4%E3%82%B9%E3%83%81%E3%83%B3"
    },
    "A7": {
        "name": "スイカ",
        "weight": 5000,
        "img": "./img/watermelon.jpg",
        "explanation": "スイカ（西瓜・水瓜、学名: Citrullus lanatus）は、果実を食用にするために栽培されるウリ科のつる性一年草。また、その果実のこと。原産は、熱帯アフリカのサバンナ地帯や砂漠地帯で、紀元前4000年代にはすでに栽培されていたとされる。西瓜の漢字は中国語の西瓜（北京語:シーグァ xīguā）に由来する。日本語のスイカは「西瓜」の唐音である。中国の西方（中央アジア）から伝来した瓜とされるためこの名称が付いた。夏に球形または楕円形の甘味を持つ果実を付け、緑に黒の縞模様のほか、縞がないものや深緑のものなどさまざまな品種がある。果実は園芸分野では果菜（野菜）とされるが、青果市場での取り扱いや、栄養学上の分類では果実的野菜に分類される。",
        "wiki": "https://ja.wikipedia.org/wiki/%E3%82%B9%E3%82%A4%E3%82%AB"
    },
    "A8": {
        "name": "スターフルーツ",
        "weight": 300,
        "img": "./img/starfruit.jpg",
        "explanation": "スターフルーツ（英: star fruit、学名: Averrhoa carambola）は、カタバミ科ゴレンシ属の常緑の木本、またはその果実。和名は五斂子（ごれんし）。独特の形をした果実を食用にする。原産は南インドなどの熱帯アジアで、東南アジア全域のほか、中国南部や台湾、ブラジル、ガイアナやトリニダード・トバゴなどカリブ海周辺、アメリカ合衆国のフロリダ、ハワイなど、熱帯から亜熱帯にかけて広く栽培されている。日本では、沖縄県や宮崎県などで栽培が行われている。和名も英名も、由来は果実の横断面が五稜星型をしているところからきている。中国語でも「五斂子」（ウーリエンズー、wǔliǎnzǐ）というが、現在は「楊桃（羊桃）」（ヤンタオ、yángtáo）が一般的。",
        "wiki": "https://ja.wikipedia.org/wiki/%E3%82%B9%E3%82%BF%E3%83%BC%E3%83%95%E3%83%AB%E3%83%BC%E3%83%84"
    },
    "A9": {
        "name": "モモ",
        "weight": 250,
        "img": "./img/peach.jpg",
        "explanation": "モモ（桃、学名: Prunus persica）はバラ科スモモ属の落葉小高木。また、その果実や花のこと。中国原産。食用・観賞用として世界各地で栽培されている。春には五弁または多重弁の花を咲かせ、夏には水分が多く甘い球形の果実を実らせる。未成熟な果実や種子にはアミグダリンという青酸配糖体が含まれる。観賞用はハナモモという。中国では邪鬼を払う力があるとされた。",
        "wiki": "https://ja.wikipedia.org/wiki/%E3%83%A2%E3%83%A2"
    },
    "A10": {
        "name": "ドラゴンフルーツ",
        "weight": 300,
        "img": "./img/dragonfruit.jpg",
        "explanation": "ドラゴンフルーツ（dragon fruit）、別名ピタヤ（英語: pitaya）は、サボテン科ヒモサボテン属のサンカクサボテン等の果実を指す。メキシコまたは中南米の熱帯雨林原産。赤い果実が目立つ。よく似たサボテンとしてクジャクサボテンや月下美人があるが、これらはサボテン科クジャクサボテン属である。クジャクサボテン属とヒモサボテン属は近縁種であるため、全体の外観や花や果実が似ている。",
        "wiki": "https://ja.wikipedia.org/wiki/%E3%83%89%E3%83%A9%E3%82%B4%E3%83%B3%E3%83%95%E3%83%AB%E3%83%BC%E3%83%84"
    },
    "A11": {
        "name": "イチゴ",
        "weight": 15,
        "img": "./img/strawberry.jpg",
        "explanation": "イチゴ（苺・覆盆子、英: Strawberry、学名: Fragaria)は、バラ科の多年草。一見して種子に見える一粒一粒の痩果(そうか)が付いた花托(花床ともいう)部分が食用として供される。甘みがあるため果物として位置づけられることが多いが、草本性の植物であるので野菜として扱われることもある。通常、可食部の表は赤色（アントシアンによる）だが、白色の品種もある(2009年に品種登録された和田初こい(商品名・初恋の香り)が世界初の白色イチゴとされる)。",
        "wiki": "https://ja.wikipedia.org/wiki/%E3%82%A4%E3%83%81%E3%82%B4"
    },
    "A12": {
        "name": "マンゴー",
        "weight": 250,
        "img": "./img/mango.jpg",
        "explanation": "マンゴー（檬果・芒果、英: Mango、学名: Mangifera indica)は、ウルシ科マンゴー属の果樹、またその果実。別名で、菴羅(あんら)、菴摩羅(あんまら)ともいう。マンゴーの栽培は古く、紀元前のインドで始まっており、仏教では、聖なる樹とされ、ヒンドゥー教では、マンゴーは万物を支配する神「プラジャーパティ」の化身とされている。リンネの『植物の種』(1753年) で記載された植物の一つである。",
        "wiki": "https://ja.wikipedia.org/wiki/%E3%83%9E%E3%83%B3%E3%82%B4%E3%83%BC"
    },
    "A13": {
        "name": "梨",
        "weight": 346.7,
        "img": "./img/nasi.jpg",
        "explanation": "ナシ（梨）は、バラ科ナシ属の植物、もしくは果物として食用にされるその果実のこと。主なものとして、和なし(日本なし、Pyrus pyrifolia var. culta ）、中国なし (P. bretschneideri) 、洋なし(西洋なし、P. communis )の3つがあり、食用として世界中で栽培される。日本語で単に「梨」と言うと通常はこのうちの和なしを指し、本項でもこれについて説明する。他のナシ属はそれぞれの項目を参照のこと。",
        "wiki": "https://ja.wikipedia.org/wiki/%E3%83%8A%E3%82%B7"
    }
}`;

/*
    "A2": {
        "name": "",
        "weight": ,
        "img": "../img/",
        "explanation": "",
        "wiki": ""
    }
*/