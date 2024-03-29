import { WilTalkDefine } from ".";
import { WIL_IMAGE_ID } from "@/composables/games/wil/enums/image";
import { WIL_SOUND_ID } from "@/composables/games/wil/enums/sound";

export const WIL_TALK_DEFINES_CHPATER4: Array<WilTalkDefine> = [
  [
    {
      background: WIL_IMAGE_ID.BACKGROUND_TRAINING_ROOM,
      bgm: WIL_SOUND_ID.BGM_HOLY_CASLE1,
      right: WIL_IMAGE_ID.CHARACTER_HERO,
      talker: "ヒカル",
      message: [
        "今日の訓練はここまで！","俺は陛下との打ち合わせがあるので、後はよろしくお願いします。",
      ],
    },
    {
      background: WIL_IMAGE_ID.BACKGROUND_TRAINING_ROOM,
      left: WIL_IMAGE_ID.CHARACTER_HOLY_KNIGHTS_SOLDIER,
      talker: "騎士兵",
      message: ["ヒカル、隊長業務もしっかりこなすなあ。"],
    },
    {
      background: WIL_IMAGE_ID.BACKGROUND_TRAINING_ROOM,
      left: WIL_IMAGE_ID.CHARACTER_HOLY_KNIGHTS_SOLDIER,
      right: WIL_IMAGE_ID.CHARACTER_HOLY_KNIGHTS_MAGICIAN,
      talker: "魔導兵",
      message: [
        "なんだ、嫉妬か？",
        "ついこの間まで先輩風吹かせてた相手が上司になったら、そら複雑な気持ちにもなるわな。",
      ],
    },
    {
      background: WIL_IMAGE_ID.BACKGROUND_TRAINING_ROOM,
      left: WIL_IMAGE_ID.CHARACTER_HOLY_KNIGHTS_SOLDIER,
      right: WIL_IMAGE_ID.CHARACTER_HOLY_KNIGHTS_MAGICIAN,
      talker: "騎士兵",
      message: ["...。"],
    },
    {
      background: WIL_IMAGE_ID.BACKGROUND_TRAINING_ROOM,
      left: WIL_IMAGE_ID.CHARACTER_HOLY_KNIGHTS_SOLDIER,
      right: WIL_IMAGE_ID.CHARACTER_HOLY_KNIGHTS_MAGICIAN,
      talker: "魔導兵",
      message: ["黙るなよ。こっちが気を遣うだろ。"],
    },
    {
      background: WIL_IMAGE_ID.BACKGROUND_HOLY_LAND_CASTLE,
      left: WIL_IMAGE_ID.CHARACTER_HERO,
      right: WIL_IMAGE_ID.CHARACTER_HOLY_LAND_EMPEROR,
      talker: "ヒカル",
      message: ["陛下、お待たせしました。"],
    },
    {
      background: WIL_IMAGE_ID.BACKGROUND_HOLY_LAND_CASTLE,
      left: WIL_IMAGE_ID.CHARACTER_HERO,
      right: WIL_IMAGE_ID.CHARACTER_HOLY_LAND_EMPEROR,
      talker: "皇帝",
      message: ["ああ、ヒカル君。わざわざすまないね。話というのは..."],
    },
    {
      background: WIL_IMAGE_ID.BACKGROUND_HOLY_LAND_CASTLE,
      left: WIL_IMAGE_ID.CHARACTER_HERO,
      right: WIL_IMAGE_ID.CHARACTER_HOLY_LAND_EMPEROR,
      talker: "ヒカル",
      message: ["この前の遠征のことですよね。"],
    },
    {
      background: WIL_IMAGE_ID.BACKGROUND_HOLY_LAND_CASTLE,
      left: WIL_IMAGE_ID.CHARACTER_HERO,
      right: WIL_IMAGE_ID.CHARACTER_HOLY_LAND_EMPEROR,
      talker: "皇帝",
      message: ["そうだね。嵐の国で起こったことを改めて聞いておきたくてね。"],
    },
    {
      background: WIL_IMAGE_ID.BACKGROUND_HOLY_LAND_CASTLE,
      left: WIL_IMAGE_ID.CHARACTER_HERO,
      right: WIL_IMAGE_ID.CHARACTER_HOLY_LAND_EMPEROR,
      talker: "ヒカル",
      message: [
        "はい。我々が嵐の国に着いたとき、嵐の国は魔物に襲われていました。",
      ],
    },
    {
      background: WIL_IMAGE_ID.BACKGROUND_HOLY_LAND_CASTLE,
      left: WIL_IMAGE_ID.CHARACTER_HERO,
      right: WIL_IMAGE_ID.CHARACTER_HOLY_LAND_EMPEROR,
      talker: "皇帝",
      message: ["魔物に...？"],
    },
    {
      background: WIL_IMAGE_ID.BACKGROUND_HOLY_LAND_CASTLE,
      left: WIL_IMAGE_ID.CHARACTER_HERO,
      right: WIL_IMAGE_ID.CHARACTER_HOLY_LAND_EMPEROR,
      talker: "ヒカル",
      message: [
        "はい。魔物の撃退後、嵐の国の代理の王と合流したのですが、焔の国が引いた直後に魔物が襲ってきたそうです。",
      ],
    },
    {
      background: WIL_IMAGE_ID.BACKGROUND_HOLY_LAND_CASTLE,
      left: WIL_IMAGE_ID.CHARACTER_HERO,
      right: WIL_IMAGE_ID.CHARACTER_HOLY_LAND_EMPEROR,
      talker: "皇帝",
      message: ["ちょっと待ってくれ。代理の王というのは...？"],
    },
    {
      background: WIL_IMAGE_ID.BACKGROUND_HOLY_LAND_CASTLE,
      left: WIL_IMAGE_ID.CHARACTER_HERO,
      right: WIL_IMAGE_ID.CHARACTER_HOLY_LAND_EMPEROR,
      talker: "ヒカル",
      message: [
        "魔物襲撃によって、王が倒れたらしく、弟君が代理として王の座に座っているようです。",
      ],
    },
    {
      background: WIL_IMAGE_ID.BACKGROUND_HOLY_LAND_CASTLE,
      left: WIL_IMAGE_ID.CHARACTER_HERO,
      right: WIL_IMAGE_ID.CHARACTER_HOLY_LAND_EMPEROR,
      talker: "皇帝",
      message: [
        "そうか...。彼は国民思いの素晴らしい王だったんだが...。おっと、すまない。続けてくれ。",
      ],
    },
    {
      background: WIL_IMAGE_ID.BACKGROUND_HOLY_LAND_CASTLE,
      left: WIL_IMAGE_ID.CHARACTER_HERO,
      right: WIL_IMAGE_ID.CHARACTER_HOLY_LAND_EMPEROR,
      talker: "ヒカル",
      message: [
        "その代理の王が言うには、魔物の現れたタイミングあまりにも良かったことから、焔の国が魔物を使役しているのではないかと。",
      ],
    },
    {
      background: WIL_IMAGE_ID.BACKGROUND_HOLY_LAND_CASTLE,
      left: WIL_IMAGE_ID.CHARACTER_HERO,
      right: WIL_IMAGE_ID.CHARACTER_HOLY_LAND_EMPEROR,
      talker: "皇帝",
      message: [
        "なるほど...。となると、我が国に攻めてきた魔人ももしかすると...。",
      ],
    },
    {
      background: WIL_IMAGE_ID.BACKGROUND_HOLY_LAND_CASTLE,
      left: WIL_IMAGE_ID.CHARACTER_HERO,
      right: WIL_IMAGE_ID.CHARACTER_HOLY_LAND_EMPEROR,
      talker: "ヒカル",
      message: [
        "その可能性は否定できませんね...。それと、その後に焔の国が再び攻めてきたのですが、その際に金の国の兵もいました。ほぼ確実に焔の国と金の国が手を組んでいるかと思われます。",
      ],
    },
    {
      background: WIL_IMAGE_ID.BACKGROUND_HOLY_LAND_CASTLE,
      left: WIL_IMAGE_ID.CHARACTER_HERO,
      right: WIL_IMAGE_ID.CHARACTER_HOLY_LAND_EMPEROR,
      talker: "ヒカル",
      message: [
        "一応、当初の目的である嵐の国との同盟は締結できたのですが、焔の国側の戦力もかなり大きくなっていることが分かりました。報告は以上です。",
      ],
    },
    {
      background: WIL_IMAGE_ID.BACKGROUND_HOLY_LAND_CASTLE,
      left: WIL_IMAGE_ID.CHARACTER_HERO,
      right: WIL_IMAGE_ID.CHARACTER_HOLY_LAND_EMPEROR,
      talker: "皇帝",
      message: ["...なるほど。状況は悪くなっているということか...。"],
    },
    {
      background: WIL_IMAGE_ID.BACKGROUND_HOLY_LAND_CASTLE,
      left: WIL_IMAGE_ID.CHARACTER_HERO,
      right: WIL_IMAGE_ID.CHARACTER_HOLY_LAND_EMPEROR,
      talker: "皇帝",
      message: [
        "じゃあ聖の国で起きたことも話しておこうか。まあ前に話した通りだけどね。",
      ],
    },
    {
      background: WIL_IMAGE_ID.BACKGROUND_HOLY_LAND_CASTLE,
      left: WIL_IMAGE_ID.CHARACTER_HERO,
      right: WIL_IMAGE_ID.CHARACTER_HOLY_LAND_EMPEROR,
      talker: "ヒカル",
      message: ["たしか、三体の魔人が襲ってきて、そのときにザーグさんが...。"],
    },
    {
      background: WIL_IMAGE_ID.BACKGROUND_HOLY_LAND_CASTLE,
      left: WIL_IMAGE_ID.CHARACTER_HERO,
      right: WIL_IMAGE_ID.CHARACTER_HOLY_LAND_EMPEROR,
      talker: "皇帝",
      message: [
        "大体はそんな感じだ。それと後で確認したところ、聖の国で管理していた魔王の上体部が紛失していた...。",
      ],
    },
    {
      background: WIL_IMAGE_ID.BACKGROUND_HOLY_LAND_CASTLE,
      left: WIL_IMAGE_ID.CHARACTER_HERO,
      right: WIL_IMAGE_ID.CHARACTER_HOLY_LAND_EMPEROR,
      talker: "ヒカル",
      message: [
        "そんな！？もし焔の国が魔人を操って聖の国を襲わせていたのだとすると...。",
      ],
    },
    {
      background: WIL_IMAGE_ID.BACKGROUND_HOLY_LAND_CASTLE,
      left: WIL_IMAGE_ID.CHARACTER_HERO,
      right: WIL_IMAGE_ID.CHARACTER_HOLY_LAND_EMPEROR,
      talker: "皇帝",
      message: [
        "その隙に魔王の一部を盗み出した可能性が高い。そうなると、金の国の物と合わせて半分以上が焔の国に集まっていることになる。",
      ],
    },
    {
      background: WIL_IMAGE_ID.BACKGROUND_HOLY_LAND_CASTLE,
      left: WIL_IMAGE_ID.CHARACTER_STORM_SHOOTERS_PRINCE,
      right: WIL_IMAGE_ID.CHARACTER_HOLY_LAND_EMPEROR,
      talker: "ジョット",
      message: ["それなんだが、うちの国で管理してる右足もなくなってた。"],
    },
    {
      background: WIL_IMAGE_ID.BACKGROUND_HOLY_LAND_CASTLE,
      left: WIL_IMAGE_ID.CHARACTER_STORM_SHOOTERS_PRINCE,
      right: WIL_IMAGE_ID.CHARACTER_HERO,
      talker: "ヒカル",
      message: ["あれ、ジョットさん？どうしてここに？"],
    },
    {
      background: WIL_IMAGE_ID.BACKGROUND_HOLY_LAND_CASTLE,
      left: WIL_IMAGE_ID.CHARACTER_STORM_SHOOTERS_PRINCE,
      right: WIL_IMAGE_ID.CHARACTER_HERO,
      talker: "ジョット",
      message: [
        "同盟を締結して、挨拶なしってのは失礼だろ。それと、今言った通り、かなりまずい状況だってことを伝えにな。",
      ],
    },
    {
      background: WIL_IMAGE_ID.BACKGROUND_HOLY_LAND_CASTLE,
      left: WIL_IMAGE_ID.CHARACTER_STORM_SHOOTERS_PRINCE,
      right: WIL_IMAGE_ID.CHARACTER_HOLY_LAND_EMPEROR,
      talker: "皇帝",
      message: ["えーと、君は嵐の国の...。"],
    },
    {
      background: WIL_IMAGE_ID.BACKGROUND_HOLY_LAND_CASTLE,
      left: WIL_IMAGE_ID.CHARACTER_STORM_SHOOTERS_PRINCE,
      right: WIL_IMAGE_ID.CHARACTER_HOLY_LAND_EMPEROR,
      talker: "ジョット",
      message: ["先代の弟で、今は代理で王の座についてるジョットです。"],
    },
    {
      background: WIL_IMAGE_ID.BACKGROUND_HOLY_LAND_CASTLE,
      left: WIL_IMAGE_ID.CHARACTER_STORM_SHOOTERS_PRINCE,
      right: WIL_IMAGE_ID.CHARACTER_HOLY_LAND_EMPEROR,
      talker: "皇帝",
      message: [
        "大変な時にわざわざすまないね、ジョット君。私が聖の国の皇帝だ。",
      ],
    },
    {
      background: WIL_IMAGE_ID.BACKGROUND_HOLY_LAND_CASTLE,
      left: WIL_IMAGE_ID.CHARACTER_STORM_SHOOTERS_PRINCE,
      right: WIL_IMAGE_ID.CHARACTER_HOLY_LAND_EMPEROR,
      talker: "ジョット",
      message: [
        "うちが聖の国の兵を借りている間に魔物が攻めてきたとかで、ご迷惑をおかけしました。",
      ],
    },
    {
      background: WIL_IMAGE_ID.BACKGROUND_HOLY_LAND_CASTLE,
      left: WIL_IMAGE_ID.CHARACTER_STORM_SHOOTERS_PRINCE,
      right: WIL_IMAGE_ID.CHARACTER_HOLY_LAND_EMPEROR,
      talker: "皇帝",
      message: [
        "もう過ぎた話だ。過去のことをとやかく言うより、今は次どう動くかの方が重要だ。",
      ],
    },
    {
      background: WIL_IMAGE_ID.BACKGROUND_HOLY_LAND_CASTLE,
      left: WIL_IMAGE_ID.CHARACTER_HERO,
      right: WIL_IMAGE_ID.CHARACTER_HOLY_LAND_EMPEROR,
      talker: "ヒカル",
      message: [
        "嵐の国で管理していた魔王の一部も盗まれたと仮定すると、残るは氷の国...。",
      ],
    },
    {
      background: WIL_IMAGE_ID.BACKGROUND_HOLY_LAND_CASTLE,
      left: WIL_IMAGE_ID.CHARACTER_HERO,
      right: WIL_IMAGE_ID.CHARACTER_HOLY_LAND_EMPEROR,
      talker: "皇帝",
      message: ["氷の国が襲われ、魔王が復活したら、世界は終わりだ。"],
    },
    {
      background: WIL_IMAGE_ID.BACKGROUND_HOLY_LAND_CASTLE,
      left: WIL_IMAGE_ID.CHARACTER_HERO,
      right: WIL_IMAGE_ID.CHARACTER_HOLY_LAND_EMPEROR,
      talker: "皇帝",
      message: [
        "ヒカル君、今すぐ氷の国へ行ってこのことを伝え、氷の国を守護してきてくれないか？",
      ],
    },
    {
      background: WIL_IMAGE_ID.BACKGROUND_HOLY_LAND_CASTLE,
      left: WIL_IMAGE_ID.CHARACTER_HERO,
      right: WIL_IMAGE_ID.CHARACTER_HOLY_LAND_EMPEROR,
      talker: "ヒカル",
      message: ["でも、聖騎士団の隊長は皇帝のもとを離れるわけには..."],
    },
    {
      background: WIL_IMAGE_ID.BACKGROUND_HOLY_LAND_CASTLE,
      left: WIL_IMAGE_ID.CHARACTER_HERO,
      right: WIL_IMAGE_ID.CHARACTER_HOLY_LAND_EMPEROR,
      talker: "皇帝",
      message: ["今は一国よりも世界のことが優先だ。私のことより氷の国を頼む。"],
    },
    {
      background: WIL_IMAGE_ID.BACKGROUND_HOLY_LAND_CASTLE,
      left: WIL_IMAGE_ID.CHARACTER_HERO,
      right: WIL_IMAGE_ID.CHARACTER_HOLY_LAND_EMPEROR,
      talker: "ヒカル",
      message: ["分かりました。すぐに準備します。"],
    },
    {
      background: WIL_IMAGE_ID.BACKGROUND_HOLY_LAND_CASTLE,
      left: WIL_IMAGE_ID.CHARACTER_HERO,
      right: WIL_IMAGE_ID.CHARACTER_STORM_SHOOTERS_PRINCE,
      talker: "ジョット",
      message: ["俺も行くぜ。氷の国の王様にも挨拶しないといけないしな。"],
    },
    {
      background: WIL_IMAGE_ID.BACKGROUND_ICE_LAND,
      bgm: WIL_SOUND_ID.BGM_ICE_LAND1,
      left: WIL_IMAGE_ID.CHARACTER_HERO,
      talker: "ヒカル",
      message: ["ということで、氷の国の護衛に参りました。"],
    },
    {
      background: WIL_IMAGE_ID.BACKGROUND_ICE_LAND,
      left: WIL_IMAGE_ID.CHARACTER_HERO,
      right: WIL_IMAGE_ID.CHARACTER_ICICLE_GURDIANS_QUEEN,
      talker: "レイナ",
      message: [
        "なるほどね。かなり深刻な状況ね...。で、なんでその子がいるの？",
      ],
    },
    {
      background: WIL_IMAGE_ID.BACKGROUND_ICE_LAND,
      left: WIL_IMAGE_ID.CHARACTER_INFERNITY_SAMURAIS_THUNDER_SPY,
      right: WIL_IMAGE_ID.CHARACTER_ICICLE_GURDIANS_QUEEN,
      talker: "シノブ",
      message: ["...。"],
    },
    {
      background: WIL_IMAGE_ID.BACKGROUND_ICE_LAND,
      left: WIL_IMAGE_ID.CHARACTER_HERO,
      right: WIL_IMAGE_ID.CHARACTER_ICICLE_GURDIANS_QUEEN,
      talker: "ヒカル",
      message: ["一人で残すのも可哀そうだったので。"],
    },
    {
      background: WIL_IMAGE_ID.BACKGROUND_ICE_LAND,
      left: WIL_IMAGE_ID.CHARACTER_HERO,
      right: WIL_IMAGE_ID.CHARACTER_ICICLE_GURDIANS_QUEEN,
      talker: "レイナ",
      message: [
        "...まあいいわ。あなたたちが来てること、お父様にも伝えてくるわ。",
      ],
    },
    { background: WIL_IMAGE_ID.BACKGROUND_ICE_LAND, message: ["数分後"] },
    {
      background: WIL_IMAGE_ID.BACKGROUND_ICE_LAND,
      left: WIL_IMAGE_ID.CHARACTER_HERO,
      right: WIL_IMAGE_ID.CHARACTER_ICE_LAND_KING,
      talker: "フロリア王",
      message: [
        "遠路はるばるご苦労じゃったな。しかし、我が国で管理してる魔王の左腕が盗まれることはありんのじゃ。",
      ],
    },
    {
      background: WIL_IMAGE_ID.BACKGROUND_ICE_LAND,
      left: WIL_IMAGE_ID.CHARACTER_HERO,
      right: WIL_IMAGE_ID.CHARACTER_ICE_LAND_KING,
      talker: "ヒカル",
      message: ["と、言いますと？"],
    },
    {
      background: WIL_IMAGE_ID.BACKGROUND_ICE_LAND,
      left: WIL_IMAGE_ID.CHARACTER_HERO,
      right: WIL_IMAGE_ID.CHARACTER_ICE_LAND_KING,
      talker: "フロリア王",
      message: [
        "魔王の左腕は宝物庫で管理しているんじゃが、その在りかは王族にしか伝えられておらんし、たやすく見つかるような場所にもない。万が一氷の国が壊滅したとしても、盗まれることはまずあり得ない。",
      ],
    },
    {
      background: WIL_IMAGE_ID.BACKGROUND_ICE_LAND,
      left: WIL_IMAGE_ID.CHARACTER_HERO,
      right: WIL_IMAGE_ID.CHARACTER_ICICLE_GURDIANS_QUEEN,
      talker: "レイナ",
      message: [
        "そういことよ。でも焔の国が攻めてくるのはほぼ確実だし、どうせならこの戦力で返り討ちにしてやりましょう。",
      ],
    },
    {
      background: WIL_IMAGE_ID.BACKGROUND_ICE_LAND,
      left: WIL_IMAGE_ID.CHARACTER_STORM_SHOOTERS_PRINCE,
      right: WIL_IMAGE_ID.CHARACTER_ICICLE_GURDIANS_QUEEN,
      talker: "ジョット",
      message: ["そうだな。焔の国の戦力を削ぐ良い機会だ。"],
    },
    {
      background: WIL_IMAGE_ID.BACKGROUND_ICE_LAND,
      left: WIL_IMAGE_ID.CHARACTER_HERO,
      right: WIL_IMAGE_ID.CHARACTER_ICICLE_GURDIANS_QUEEN,
      talker: "ヒカル",
      message: [
        "でも、自国の防衛もあるのであんまり長くはいられないです。せいぜい一週間といったところですかね。",
      ],
    },
    {
      background: WIL_IMAGE_ID.BACKGROUND_ICE_LAND,
      left: WIL_IMAGE_ID.CHARACTER_HERO,
      right: WIL_IMAGE_ID.CHARACTER_ICICLE_GURDIANS_QUEEN,
      talker: "レイナ",
      message: [
        "そうね。それでよろしく頼むわ。じゃあ折角だし、その間うちの訓練に混ざっていきなさい。",
      ],
    },
    {
      background: WIL_IMAGE_ID.BACKGROUND_ICE_LAND,
      left: WIL_IMAGE_ID.CHARACTER_HERO,
      right: WIL_IMAGE_ID.CHARACTER_ICICLE_GURDIANS_QUEEN,
      talker: "ヒカル",
      message: ["え。"],
    },
    {
      background: WIL_IMAGE_ID.BACKGROUND_ICE_LAND,
      left: WIL_IMAGE_ID.CHARACTER_STORM_SHOOTERS_PRINCE,
      right: WIL_IMAGE_ID.CHARACTER_HERO,
      talker: "ジョット",
      message: ["お、大変だな。"],
    },
    {
      background: WIL_IMAGE_ID.BACKGROUND_ICE_LAND,
      left: WIL_IMAGE_ID.CHARACTER_STORM_SHOOTERS_PRINCE,
      right: WIL_IMAGE_ID.CHARACTER_ICICLE_GURDIANS_QUEEN,
      talker: "レイナ",
      message: ["ジョット、当然あなたもやるのよ？"],
    },
    {
      background: WIL_IMAGE_ID.BACKGROUND_ICE_LAND,
      left: WIL_IMAGE_ID.CHARACTER_STORM_SHOOTERS_PRINCE,
      right: WIL_IMAGE_ID.CHARACTER_ICICLE_GURDIANS_QUEEN,
      talker: "ジョット",
      message: ["げ。"],
    },
  ],
  [
    {
      background: WIL_IMAGE_ID.BACKGROUND_ICE_LAND,
      bgm: WIL_SOUND_ID.BGM_ICE_LAND1,
      left: WIL_IMAGE_ID.CHARACTER_HERO,
      talker: "ヒカル",
      message: ["結局、一週間何も起こりませんでしたね。"],
    },
    {
      background: WIL_IMAGE_ID.BACKGROUND_ICE_LAND,
      left: WIL_IMAGE_ID.CHARACTER_HERO,
      right: WIL_IMAGE_ID.CHARACTER_STORM_SHOOTERS_PRINCE,
      talker: "ジョット",
      message: [
        "そうだな。そもそも、焔の国が魔物を使って魔王の五体を集めてるってのが推測違いだったのかもな。",
      ],
    },
    {
      background: WIL_IMAGE_ID.BACKGROUND_ICE_LAND,
      left: WIL_IMAGE_ID.CHARACTER_HERO,
      right: WIL_IMAGE_ID.CHARACTER_ICICLE_GURDIANS_QUEEN,
      talker: "レイナ",
      message: ["長いこと足止めして悪かったわね。おかげで良い訓練になったわ。"],
    },
    {
      background: WIL_IMAGE_ID.BACKGROUND_ICE_LAND,
      left: WIL_IMAGE_ID.CHARACTER_HERO,
      right: WIL_IMAGE_ID.CHARACTER_ICICLE_GURDIANS_QUEEN,
      talker: "ヒカル",
      message: ["いえ、こちらこそありがとうございました。"],
    },
    {
      background: WIL_IMAGE_ID.BACKGROUND_ICE_LAND,
      left: WIL_IMAGE_ID.CHARACTER_HERO_WORRIERED,
      right: WIL_IMAGE_ID.CHARACTER_ICICLE_GURDIANS_QUEEN,
      talker: "ヒカル",
      message: ["(もうやりたくない...。)"],
    },
    {
      background: WIL_IMAGE_ID.BACKGROUND_ICE_LAND,
      left: WIL_IMAGE_ID.CHARACTER_HERO,
      right: WIL_IMAGE_ID.CHARACTER_ICICLE_GURDIANS_QUEEN,
      talker: "ヒカル",
      message: ["じゃあそろそろ行きますね。"],
    },
    {
      background: WIL_IMAGE_ID.BACKGROUND_ICE_LAND,
      left: WIL_IMAGE_ID.CHARACTER_ICICLE_GURDIANS_DEFENDER,
      talker: "守護兵",
      message: ["敵！敵来た！"],
    },
    {
      background: WIL_IMAGE_ID.BACKGROUND_ICE_LAND,
      left: WIL_IMAGE_ID.CHARACTER_ICICLE_GURDIANS_DEFENDER,
      right: WIL_IMAGE_ID.CHARACTER_ICICLE_GURDIANS_QUEEN_SURPRISED,
      talker: "レイナ",
      message: ["何ですって！？"],
    },
    {
      background: WIL_IMAGE_ID.BACKGROUND_ICE_LAND,
      left: WIL_IMAGE_ID.CHARACTER_HERO,
      right: WIL_IMAGE_ID.CHARACTER_ICICLE_GURDIANS_QUEEN,
      talker: "ヒカル",
      message: ["ちょうど良いタイミングでしたね。返り討ちにしましょう！"],
    },
    {
      background: WIL_IMAGE_ID.BACKGROUND_ICE_FIELD,
      bgm: WIL_SOUND_ID.BGM_SNOWSTORM,
      right: WIL_IMAGE_ID.CHARACTER_INFERUNITY_SAMURAIS_WATER_SOLDIER,
      talker: "スイゲツ",
      message: [
        "あれぇ？一週間もすれば守りが薄くなるって聞いてたんだけどなぁ。",
      ],
    },
    {
      background: WIL_IMAGE_ID.BACKGROUND_ICE_FIELD,
      left: WIL_IMAGE_ID.CHARACTER_HERO,
      right: WIL_IMAGE_ID.CHARACTER_INFERUNITY_SAMURAIS_WATER_SOLDIER,
      talker: "ヒカル",
      message: ["スイゲツ！"],
    },
    {
      background: WIL_IMAGE_ID.BACKGROUND_ICE_FIELD,
      left: WIL_IMAGE_ID.CHARACTER_HERO,
      right: WIL_IMAGE_ID.CHARACTER_INFERUNITY_SAMURAIS_WATER_SOLDIER,
      talker: "スイゲツ",
      message: [
        "これはこれはこの間の。",
        "おやぁ？シノブちゃんもいるねぇ。生きてたんだ。",
      ],
    },
    {
      background: WIL_IMAGE_ID.BACKGROUND_ICE_FIELD,
      left: WIL_IMAGE_ID.CHARACTER_INFERNITY_SAMURAIS_THUNDER_SPY,
      right: WIL_IMAGE_ID.CHARACTER_INFERUNITY_SAMURAIS_WATER_SOLDIER,
      talker: "シノブ",
      message: ["...。"],
    },
    {
      background: WIL_IMAGE_ID.BACKGROUND_ICE_FIELD,
      left: WIL_IMAGE_ID.CHARACTER_INFERNITY_SAMURAIS_THUNDER_SPY,
      right: WIL_IMAGE_ID.CHARACTER_INFERUNITY_SAMURAIS_WATER_SOLDIER,
      talker: "スイゲツ",
      message: [
        "あの時はごめんねぇ。こっちも必死だったからさ。こっちに帰ってきて、一緒にこいつらをヤろうよ。",
      ],
    },
    {
      background: WIL_IMAGE_ID.BACKGROUND_ICE_FIELD,
      left: WIL_IMAGE_ID.CHARACTER_INFERNITY_SAMURAIS_THUNDER_SPY,
      right: WIL_IMAGE_ID.CHARACTER_INFERUNITY_SAMURAIS_WATER_SOLDIER,
      talker: "シノブ",
      message: [
        "それはできません。この人たちは私の命を救ってくれました。恩を仇で返すわけにはいきません。",
      ],
    },
    {
      background: WIL_IMAGE_ID.BACKGROUND_ICE_FIELD,
      left: WIL_IMAGE_ID.CHARACTER_INFERNITY_SAMURAIS_THUNDER_SPY,
      right: WIL_IMAGE_ID.CHARACTER_INFERUNITY_SAMURAIS_WATER_SOLDIER,
      talker: "シノブ",
      message: ["それに、もう...殺しはしたくありません。"],
    },
    {
      background: WIL_IMAGE_ID.BACKGROUND_ICE_FIELD,
      left: WIL_IMAGE_ID.CHARACTER_INFERNITY_SAMURAIS_THUNDER_SPY,
      right: WIL_IMAGE_ID.CHARACTER_INFERUNITY_SAMURAIS_WATER_SOLDIER,
      talker: "スイゲツ",
      message: [
        "あららぁ。見ない間にぬるくなっちゃたねぇ。お兄ちゃんが見たら悲しむよぉ。",
      ],
    },
    {
      background: WIL_IMAGE_ID.BACKGROUND_ICE_FIELD,
      left: WIL_IMAGE_ID.CHARACTER_INFERNITY_SAMURAIS_THUNDER_SPY,
      right: WIL_IMAGE_ID.CHARACTER_INFERUNITY_SAMURAIS_WATER_SOLDIER,
      talker: "シノブ",
      message: ["兄様は関係ありません。これは私の意思ですから。"],
    },
    {
      background: WIL_IMAGE_ID.BACKGROUND_ICE_FIELD,
      left: WIL_IMAGE_ID.CHARACTER_INFERNITY_SAMURAIS_THUNDER_SPY,
      right: WIL_IMAGE_ID.CHARACTER_INFERUNITY_SAMURAIS_WATER_SOLDIER,
      talker: "スイゲツ",
      message: [
        "そう。じゃあもう敵になっちゃったてことで、みんな一緒にヤるね。",
      ],
    },
  ],
  [
    {
      background: WIL_IMAGE_ID.BACKGROUND_ICE_FIELD,
      bgm: WIL_SOUND_ID.BGM_SNOWSTORM,
      right: WIL_IMAGE_ID.CHARACTER_INFERUNITY_SAMURAIS_WATER_SOLDIER,
      talker: "スイゲツ",
      message: [
        "へぇ...。前より強くなってるねぇ...。それに、多勢に無勢だ...。まあ時間も稼いだことだし、そろそろ引きますか...。",
      ],
    },
    {
      background: WIL_IMAGE_ID.BACKGROUND_ICE_FIELD,
      left: WIL_IMAGE_ID.CHARACTER_STORM_SHOOTERS_PRINCE,
      right: WIL_IMAGE_ID.CHARACTER_INFERUNITY_SAMURAIS_WATER_SOLDIER,
      talker: "ジョット",
      message: ["待ちやがれ！"],
    },
    {
      background: WIL_IMAGE_ID.BACKGROUND_ICE_FIELD,
      left: WIL_IMAGE_ID.CHARACTER_STORM_SHOOTERS_PRINCE,
      right: WIL_IMAGE_ID.CHARACTER_ICICLE_GURDIANS_QUEEN,
      talker: "レイナ",
      message: [
        "やめておきましょう。それより、時間を稼いだというのが気になるわ。",
      ],
    },
    {
      background: WIL_IMAGE_ID.BACKGROUND_ICE_LAND,
      bgm: WIL_SOUND_ID.BGM_ICE_LAND1,
      left: WIL_IMAGE_ID.CHARACTER_ICICLE_GURDIANS_QUEEN,
      talker: "レイナ",
      message: ["お父様、ご無事でしょうか！？"],
    },
    {
      background: WIL_IMAGE_ID.BACKGROUND_ICE_LAND,
      left: WIL_IMAGE_ID.CHARACTER_ICICLE_GURDIANS_QUEEN,
      right: WIL_IMAGE_ID.CHARACTER_ICE_LAND_KING,
      talker: "フロリア王",
      message: [
        "おお、レイナ。さっき、焔の国の者が来て、宝物庫の方に向かって行ってしもうた。",
        "レイナ、皆を案内し、撃退するのじゃ！",
      ],
    },
    {
      background: WIL_IMAGE_ID.BACKGROUND_ICE_LAND,
      left: WIL_IMAGE_ID.CHARACTER_ICICLE_GURDIANS_QUEEN,
      right: WIL_IMAGE_ID.CHARACTER_ICE_LAND_KING,
      talker: "レイナ",
      message: ["分かりました。みんな付いてきて！"],
    },
    {
      background: WIL_IMAGE_ID.BACKGROUND_ICE_LAND_STORE,
      right: WIL_IMAGE_ID.CHARACTER_ICICLE_GURDIANS_QUEEN,
      talker: "レイナ",
      message: ["ここが宝物庫よ。"],
    },
    {
      background: WIL_IMAGE_ID.BACKGROUND_ICE_LAND_STORE,
      left: WIL_IMAGE_ID.CHARACTER_STORM_SHOOTERS_PRINCE,
      right: WIL_IMAGE_ID.CHARACTER_ICICLE_GURDIANS_QUEEN,
      talker: "ジョット",
      message: ["魔王の左腕は無事みたいだな。"],
    },
    {
      background: WIL_IMAGE_ID.BACKGROUND_ICE_LAND_STORE,
      left: WIL_IMAGE_ID.CHARACTER_HERO,
      talker: "ヒカル",
      message: ["(ここが宝物庫？でも、人の気配はしない...)"],
    },
    {
      background: WIL_IMAGE_ID.BACKGROUND_ICE_LAND_STORE,
      left: WIL_IMAGE_ID.CHARACTER_HERO,
      talker: "ヒカル",
      message: ["まさか！？"],
    },
    {
      background: WIL_IMAGE_ID.BACKGROUND_ICE_LAND_STORE,
      sound: WIL_SOUND_ID.SE_SLASH,
      left: WIL_IMAGE_ID.CHARACTER_HERO,
      right: WIL_IMAGE_ID.CHARACTER_ICE_LAND_KING,
      message: ["ヒカルはフロリア王を斬りつけた。"],
    },
    {
      background: WIL_IMAGE_ID.BACKGROUND_ICE_LAND_STORE,
      left: WIL_IMAGE_ID.CHARACTER_HERO,
      right: WIL_IMAGE_ID.CHARACTER_ICE_LAND_KING,
      talker: "フロリア王",
      message: ["うぅ...。"],
    },
    {
      background: WIL_IMAGE_ID.BACKGROUND_ICE_LAND_STORE,
      left: WIL_IMAGE_ID.CHARACTER_HERO,
      right: WIL_IMAGE_ID.CHARACTER_ICICLE_GURDIANS_QUEEN,
      talker: "レイナ",
      message: ["ヒカル、お父様に何するのよ！？"],
    },
    {
      background: WIL_IMAGE_ID.BACKGROUND_ICE_LAND_STORE,
      left: WIL_IMAGE_ID.CHARACTER_HERO,
      right: WIL_IMAGE_ID.CHARACTER_ICICLE_GURDIANS_QUEEN,
      talker: "ヒカル",
      message: ["そいつは偽物です！"],
    },
    {
      background: WIL_IMAGE_ID.BACKGROUND_ICE_LAND_STORE,
      left: WIL_IMAGE_ID.CHARACTER_HERO,
      right: WIL_IMAGE_ID.CHARACTER_ICE_LAND_KING,
      talker: "フロリア王？",
      message: ["ばれたか。"],
    },
    {
      background: WIL_IMAGE_ID.BACKGROUND_ICE_LAND_STORE_EMPTY,
      left: WIL_IMAGE_ID.CHARACTER_HERO,
      right: WIL_IMAGE_ID.CHARACTER_INFERNITY_SAMURAIS_SAND_SPY,
      talker: "サジン",
      message: [
        "まあいい。宝物庫までの案内、助かった。",
        "魔王の左腕も手に入ったし、逃げさせてもらう。",
      ],
    },
    {
      background: WIL_IMAGE_ID.BACKGROUND_ICE_LAND_STORE_EMPTY,
      left: WIL_IMAGE_ID.CHARACTER_HERO,
      right: WIL_IMAGE_ID.CHARACTER_INFERNITY_SAMURAIS_SAND_SPY,
      talker: "ヒカル",
      message: ["逃がすか！"],
    },
  ],
  [
    {
      background: WIL_IMAGE_ID.BACKGROUND_ICE_LAND_STORE_EMPTY,
      left: WIL_IMAGE_ID.CHARACTER_HERO,
      right: WIL_IMAGE_ID.CHARACTER_INFERNITY_SAMURAIS_SAND_SPY,
      talker: "サジン",
      message: ["さすがに厳しいな。奥の手を使わせてもらおう。"],
    },
    {
      background: WIL_IMAGE_ID.BACKGROUND_ICE_LAND_STORE_EMPTY,
      sound: WIL_SOUND_ID.SE_MONSTER,
      left: WIL_IMAGE_ID.CHARACTER_DARK_MONSTER_WIND_DEMON,
      right: WIL_IMAGE_ID.CHARACTER_DARK_MONSTER_SOIL_DEMON,
      message: [""],
    },
    {
      background: WIL_IMAGE_ID.BACKGROUND_ICE_LAND_STORE_EMPTY,
      sound: WIL_SOUND_ID.SE_MONSTER,
      right: WIL_IMAGE_ID.CHARACTER_DARK_MONSTER_FIRE_DEMON,
      message: [""],
    },
    {
      background: WIL_IMAGE_ID.BACKGROUND_ICE_LAND_STORE_EMPTY,
      left: WIL_IMAGE_ID.CHARACTER_HERO,
      right: WIL_IMAGE_ID.CHARACTER_DARK_MONSTER_FIRE_DEMON,
      talker: "ヒカル",
      message: ["魔人！？"],
    },
    {
      background: WIL_IMAGE_ID.BACKGROUND_ICE_LAND_STORE_EMPTY,
      left: WIL_IMAGE_ID.CHARACTER_HERO,
      right: WIL_IMAGE_ID.CHARACTER_INFERNITY_SAMURAIS_SAND_SPY,
      talker: "サジン",
      message: ["さらばだ。お前はもう帰ってくるな。"],
    },
    {
      background: WIL_IMAGE_ID.BACKGROUND_ICE_LAND_STORE_EMPTY,
      left: WIL_IMAGE_ID.CHARACTER_HERO,
      talker: "ヒカル",
      message: ["...？"],
    },
    {
      background: WIL_IMAGE_ID.BACKGROUND_ICE_LAND_STORE_EMPTY,
      left: WIL_IMAGE_ID.CHARACTER_INFERNITY_SAMURAIS_THUNDER_SPY,
      talker: "シノブ",
      message: ["...。"],
    },
    {
      background: WIL_IMAGE_ID.BACKGROUND_ICE_LAND_STORE_EMPTY,
      right: WIL_IMAGE_ID.CHARACTER_STORM_SHOOTERS_PRINCE,
      talker: "ジョット",
      message: ["おい、ボケっとするな！こいつらを何とかするぞ！"],
    },
  ],
  [
    {
      background: WIL_IMAGE_ID.BACKGROUND_ICE_LAND_STORE_EMPTY,
      bgm: WIL_SOUND_ID.BGM_ICE_LAND1,
      right: WIL_IMAGE_ID.CHARACTER_ICICLE_GURDIANS_QUEEN,
      talker: "レイナ",
      message: ["なんとか倒したわね。"],
    },
    {
      background: WIL_IMAGE_ID.BACKGROUND_ICE_LAND_STORE_EMPTY,
      left: WIL_IMAGE_ID.CHARACTER_HERO,
      right: WIL_IMAGE_ID.CHARACTER_ICICLE_GURDIANS_QUEEN,
      talker: "ヒカル",
      message: ["でも、魔王の左腕が...。"],
    },
    {
      background: WIL_IMAGE_ID.BACKGROUND_ICE_LAND_STORE_EMPTY,
      left: WIL_IMAGE_ID.CHARACTER_HERO,
      right: WIL_IMAGE_ID.CHARACTER_STORM_SHOOTERS_PRINCE,
      talker: "ジョット",
      message: ["たしかにまずいな...。"],
    },
    {
      background: WIL_IMAGE_ID.BACKGROUND_ICE_LAND_STORE_EMPTY,
      left: WIL_IMAGE_ID.CHARACTER_HERO,
      right: WIL_IMAGE_ID.CHARACTER_STORM_SHOOTERS_PRINCE,
      talker: "ヒカル",
      message: ["とりあえず、俺は国に戻って皇帝に伝えに行きます。"],
    },
    {
      background: WIL_IMAGE_ID.BACKGROUND_ICE_LAND_STORE_EMPTY,
      left: WIL_IMAGE_ID.CHARACTER_HERO,
      right: WIL_IMAGE_ID.CHARACTER_INFERNITY_SAMURAIS_THUNDER_SPY,
      talker: "シノブ",
      message: ["待ってください。あの王様は？"],
    },
    {
      background: WIL_IMAGE_ID.BACKGROUND_ICE_LAND_STORE_EMPTY,
      left: WIL_IMAGE_ID.CHARACTER_ICICLE_GURDIANS_QUEEN,
      right: WIL_IMAGE_ID.CHARACTER_INFERNITY_SAMURAIS_THUNDER_SPY,
      talker: "レイナ",
      message: ["そうよ！お父様は！？"],
    },
    {
      background: WIL_IMAGE_ID.BACKGROUND_ICE_LAND_STORE_EMPTY,
      left: WIL_IMAGE_ID.CHARACTER_ICICLE_GURDIANS_QUEEN,
      right: WIL_IMAGE_ID.CHARACTER_INFERNITY_SAMURAIS_THUNDER_SPY,
      talker: "シノブ",
      message: [
        "兄様...あの忍者が変装していたということはどこかに監禁されてるかもしれないです。",
        "手分けして探しましょう。",
      ],
    },
    {
      background: WIL_IMAGE_ID.BACKGROUND_BLACK,
      left: WIL_IMAGE_ID.CHARACTER_HERO,
      talker: "ヒカル",
      message: [
        "数時間後、フロリア王の遺体が見つかった。",
        "レイナさんは、密かに泣き崩れていた。",
      ],
    },
    {
      background: WIL_IMAGE_ID.BACKGROUND_BLACK,
      left: WIL_IMAGE_ID.CHARACTER_HERO,
      talker: "ヒカル",
      message: ["俺は何もできず、そのまま氷の国を発った。"],
    },
  ],
];
