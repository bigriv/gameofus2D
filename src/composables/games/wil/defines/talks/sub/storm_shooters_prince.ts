import { WilTalkDefine } from "@/composables/games/wil/defines/talks/index";
import { WIL_IMAGE_ID } from "@/composables/games/wil/enums/image";
import { WIL_SOUND_ID } from "@/composables/games/wil/enums/sound";

export const WIL_SUB_TALK_DEFINES_STORM_SHOOTERS_PRINCE: Array<WilTalkDefine> =
  [
    [
      {
        background: WIL_IMAGE_ID.BACKGROUND_BLACK,
        talker: "サブイベント",
        message: ["古き日の記憶"],
      },
      {
        background: WIL_IMAGE_ID.BACKGROUND_STORM_LAND_CASTLE,
        bgm: WIL_SOUND_ID.BGM_VILLAGE1,
        left: WIL_IMAGE_ID.CHARACTER_ICICLE_GURDIANS_QUEEN,
        right: WIL_IMAGE_ID.CHARACTER_STORM_SHOOTERS_PRINCE,
        talker: "ジョット",
        message: [
          "お前がこの国に来ると、兄貴と三人で遊んでた時のことを思い出すよ...。",
        ],
      },
      {
        background: WIL_IMAGE_ID.BACKGROUND_STORM_LAND_CASTLE,
        left: WIL_IMAGE_ID.CHARACTER_ICICLE_GURDIANS_QUEEN,
        right: WIL_IMAGE_ID.CHARACTER_STORM_SHOOTERS_PRINCE,
        talker: "レイナ",
        message: ["そうね...。"],
      },
      {
        background: WIL_IMAGE_ID.BACKGROUND_STORM_LAND_CASTLE,
        left: WIL_IMAGE_ID.CHARACTER_HERO,
        right: WIL_IMAGE_ID.CHARACTER_STORM_SHOOTERS_PRINCE,
        talker: "ヒカル",
        message: ["ジョットさんのお兄さんってどんな方だったんですか？"],
      },
      {
        background: WIL_IMAGE_ID.BACKGROUND_STORM_LAND_CASTLE,
        left: WIL_IMAGE_ID.CHARACTER_HERO,
        right: WIL_IMAGE_ID.CHARACTER_STORM_SHOOTERS_PRINCE,
        talker: "ジョット",
        message: ["優しくて強くて、理想の兄貴だったな。"],
      },
      {
        background: WIL_IMAGE_ID.BACKGROUND_STORM_LAND_CASTLE,
        left: WIL_IMAGE_ID.CHARACTER_ICICLE_GURDIANS_QUEEN,
        right: WIL_IMAGE_ID.CHARACTER_STORM_SHOOTERS_PRINCE,
        talker: "レイナ",
        message: [
          "でも、ちょっと抜けてるところがあったわね。たしか、折り紙でリンゴを折ると言って青色の紙を使ってわ。",
        ],
      },
      {
        background: WIL_IMAGE_ID.BACKGROUND_STORM_LAND_CASTLE,
        left: WIL_IMAGE_ID.CHARACTER_ICICLE_GURDIANS_QUEEN,
        right: WIL_IMAGE_ID.CHARACTER_STORM_SHOOTERS_PRINCE,
        talker: "ジョット",
        message: [
          "それはお前だろ。たしか、おにごっこしたとき、自分が鬼なのに逃げ回ってたよな。",
        ],
      },
      {
        background: WIL_IMAGE_ID.BACKGROUND_STORM_LAND_CASTLE,
        left: WIL_IMAGE_ID.CHARACTER_ICICLE_GURDIANS_QUEEN,
        right: WIL_IMAGE_ID.CHARACTER_STORM_SHOOTERS_PRINCE,
        talker: "レイナ",
        message: ["それはあなたでしょ？"],
      },
      {
        background: WIL_IMAGE_ID.BACKGROUND_STORM_LAND_CASTLE,
        left: WIL_IMAGE_ID.CHARACTER_ICICLE_GURDIANS_QUEEN,
        right: WIL_IMAGE_ID.CHARACTER_STORM_SHOOTERS_PRINCE,
        talker: "レイナ",
        message: [
          "そういえば、三人で砂のお城を作った時に浮かせようって言って持ち上げたら崩れちゃったことがあったわ！",
        ],
      },
      {
        background: WIL_IMAGE_ID.BACKGROUND_STORM_LAND_CASTLE,
        left: WIL_IMAGE_ID.CHARACTER_ICICLE_GURDIANS_QUEEN,
        right: WIL_IMAGE_ID.CHARACTER_STORM_SHOOTERS_PRINCE,
        talker: "ジョット",
        message: ["それはお前が言い出して俺が持ち上げたんだよ..。"],
      },
      {
        background: WIL_IMAGE_ID.BACKGROUND_STORM_LAND_CASTLE,
        left: WIL_IMAGE_ID.CHARACTER_HERO_SMILE,
        right: WIL_IMAGE_ID.CHARACTER_STORM_SHOOTERS_PRINCE,
        talker: "ヒカル",
        message: ["(エピソードがほほえましすぎる...。)"],
      },
    ],
    [
      {
        background: WIL_IMAGE_ID.BACKGROUND_BLACK,
        talker: "サブイベント",
        message: ["謎の視線"],
      },
      {
        background: WIL_IMAGE_ID.BACKGROUND_STORM_LAND_INSIDE,
        bgm: WIL_SOUND_ID.BGM_WINDBLOW,
        right: WIL_IMAGE_ID.CHARACTER_STORM_SHOOTERS_PRINCE,
        talker: "ジョット",
        message: ["ふぅ...。今日の訓練はこの辺にしておくか。"],
      },
      {
        background: WIL_IMAGE_ID.BACKGROUND_STORM_LAND_INSIDE,
        right: WIL_IMAGE_ID.CHARACTER_STORM_SHOOTERS_PRINCE,
        talker: "ジョット",
        message: ["...誰だ！"],
      },
      {
        background: WIL_IMAGE_ID.BACKGROUND_STORM_LAND_INSIDE,
        sound: WIL_SOUND_ID.SE_ARROW,
        right: WIL_IMAGE_ID.CHARACTER_STORM_SHOOTERS_PRINCE,
        message: ["ジョットは矢を放った。"],
      },
      {
        background: WIL_IMAGE_ID.BACKGROUND_STORM_LAND_INSIDE,
        right: WIL_IMAGE_ID.CHARACTER_STORM_SHOOTERS_PRINCE,
        talker: "ジョット",
        message: ["気のせいか？"],
      },
      {
        background: WIL_IMAGE_ID.BACKGROUND_STORM_LAND_INSIDE,
        left: WIL_IMAGE_ID.CHARACTER_STORM_SHOOTERS_ARCHER,
        right: WIL_IMAGE_ID.CHARACTER_STORM_SHOOTERS_PRINCE,
        talker: "火弓兵",
        message: ["ジョット様、どうかされましたか？"],
      },
      {
        background: WIL_IMAGE_ID.BACKGROUND_STORM_LAND_INSIDE,
        left: WIL_IMAGE_ID.CHARACTER_STORM_SHOOTERS_ARCHER,
        right: WIL_IMAGE_ID.CHARACTER_STORM_SHOOTERS_PRINCE,
        talker: "ジョット",
        message: ["ああ、さっき不穏な目線を感じたんだ。気を付けてくれ。"],
      },
      {
        background: WIL_IMAGE_ID.BACKGROUND_STORM_LAND_INSIDE,
        left: WIL_IMAGE_ID.CHARACTER_STORM_SHOOTERS_ARCHER,
        right: WIL_IMAGE_ID.CHARACTER_STORM_SHOOTERS_PRINCE,
        talker: "火弓兵",
        message: ["承知しました。警戒を強めます。"],
      },
      {
        background: WIL_IMAGE_ID.BACKGROUND_STORM_LAND_INSIDE,
        left: WIL_IMAGE_ID.CHARACTER_STORM_SHOOTERS_ARCHER,
        right: WIL_IMAGE_ID.CHARACTER_STORM_SHOOTERS_PRINCE,
        talker: "火弓兵",
        message: [
          "...危なかった。ジョット様親衛隊である私の監視が気づかれるところだった。しかし、私の視線に気づくジョット様、素敵です...。",
        ],
      },
      {
        background: WIL_IMAGE_ID.BACKGROUND_STORM_LAND_INSIDE,
        left: WIL_IMAGE_ID.CHARACTER_STORM_SHOOTERS_ARCHER,
        right: WIL_IMAGE_ID.CHARACTER_STORM_SHOOTERS_PRINCE,
        talker: "ジョット",
        message: ["ん？何か言ったか？"],
      },
      {
        background: WIL_IMAGE_ID.BACKGROUND_STORM_LAND_INSIDE,
        left: WIL_IMAGE_ID.CHARACTER_STORM_SHOOTERS_ARCHER,
        right: WIL_IMAGE_ID.CHARACTER_STORM_SHOOTERS_PRINCE,
        talker: "火弓兵",
        message: ["いえ、なんでもありません。"],
      },
      {
        background: WIL_IMAGE_ID.BACKGROUND_BLACK,
        left: WIL_IMAGE_ID.CHARACTER_STORM_SHOOTERS_ARCHER,
        message: ["ジョット親衛隊、隊員1名。非公認組織。"],
      },
    ],
    [
      {
        background: WIL_IMAGE_ID.BACKGROUND_BLACK,
        talker: "サブイベント",
        message: ["察する男"],
      },
      {
        background: WIL_IMAGE_ID.BACKGROUND_ICE_LAND,
        bgm: WIL_SOUND_ID.BGM_VILLAGE1,
        left: WIL_IMAGE_ID.CHARACTER_HERO,
        right: WIL_IMAGE_ID.CHARACTER_ICICLE_GURDIANS_QUEEN,
        talker: "ヒカル",
        message: ["レイナさん、この技なんですが...。"],
      },
      {
        background: WIL_IMAGE_ID.BACKGROUND_ICE_LAND,
        left: WIL_IMAGE_ID.CHARACTER_HERO,
        right: WIL_IMAGE_ID.CHARACTER_ICICLE_GURDIANS_QUEEN,
        talker: "レイナ",
        message: ["それなら、もっとこうした方が良いんじゃない？"],
      },
      {
        background: WIL_IMAGE_ID.BACKGROUND_ICE_LAND,
        right: WIL_IMAGE_ID.CHARACTER_STORM_SHOOTERS_PRINCE,
        talker: "ジョット",
        message: ["あいつら、また一緒に訓練してるのか。"],
      },
      {
        background: WIL_IMAGE_ID.BACKGROUND_ICE_LAND,
        left: WIL_IMAGE_ID.CHARACTER_HERO,
        right: WIL_IMAGE_ID.CHARACTER_ICICLE_GURDIANS_QUEEN,
        talker: "ヒカル",
        message: [
          "なるほど！これなら後隙も少なくなりますね。やっぱりレイナさんに相談して良かった。",
        ],
      },
      {
        background: WIL_IMAGE_ID.BACKGROUND_ICE_LAND,
        left: WIL_IMAGE_ID.CHARACTER_HERO,
        right: WIL_IMAGE_ID.CHARACTER_ICICLE_GURDIANS_QUEEN_SHY,
        talker: "レイナ",
        message: ["そ、そう？いつでも相談に乗るわよ。"],
      },
      {
        background: WIL_IMAGE_ID.BACKGROUND_ICE_LAND,
        right: WIL_IMAGE_ID.CHARACTER_STORM_SHOOTERS_PRINCE,
        talker: "ジョット",
        message: ["あいつ、昔と雰囲気変わったな。ヒカルと話してるときは特に。"],
      },
      {
        background: WIL_IMAGE_ID.BACKGROUND_ICE_LAND,
        right: WIL_IMAGE_ID.CHARACTER_STORM_SHOOTERS_PRINCE_SURPIRSED,
        talker: "ジョット",
        message: ["まさか、レイナの奴、ヒカルのことを...！？"],
      },
      {
        background: WIL_IMAGE_ID.BACKGROUND_ICE_LAND,
        left: WIL_IMAGE_ID.CHARACTER_HERO,
        right: WIL_IMAGE_ID.CHARACTER_ICICLE_GURDIANS_QUEEN_SHY,
        talker: "レイナ",
        message: [
          "そ、そうよ！あなた、お昼はまだでしょう？良かったら一緒に...なんて...。",
        ],
      },
      {
        background: WIL_IMAGE_ID.BACKGROUND_ICE_LAND,
        left: WIL_IMAGE_ID.CHARACTER_HERO_SMILE,
        right: WIL_IMAGE_ID.CHARACTER_ICICLE_GURDIANS_QUEEN_SHY,
        talker: "ヒカル",
        message: ["いいんですか？あ、でも王族の食事の席に同席するなんて...。"],
      },
      {
        background: WIL_IMAGE_ID.BACKGROUND_ICE_LAND,
        left: WIL_IMAGE_ID.CHARACTER_HERO_SMILE,
        right: WIL_IMAGE_ID.CHARACTER_ICICLE_GURDIANS_QUEEN_SHY,
        talker: "レイナ",
        message: ["私があ、あなたに合わせるわ。"],
      },
      {
        background: WIL_IMAGE_ID.BACKGROUND_ICE_LAND,
        left: WIL_IMAGE_ID.CHARACTER_HERO,
        right: WIL_IMAGE_ID.CHARACTER_ICICLE_GURDIANS_QUEEN_SHY,
        talker: "ヒカル",
        message: [
          "すみません、レイナさんに気を遣わせちゃって...。",
          "じゃあ冷えちゃったので暖かいものでも食べましょうか。",
        ],
      },
      {
        background: WIL_IMAGE_ID.BACKGROUND_ICE_LAND,
        left: WIL_IMAGE_ID.CHARACTER_HERO,
        right: WIL_IMAGE_ID.CHARACTER_ICICLE_GURDIANS_QUEEN_SHY,
        talker: "レイナ",
        message: ["わ、私はちょっと暑いから、冷たいものでも食べようかしら。"],
      },
      {
        background: WIL_IMAGE_ID.BACKGROUND_ICE_LAND,
        right: WIL_IMAGE_ID.CHARACTER_STORM_SHOOTERS_PRINCE,
        talker: "ジョット",
        message: [
          "これは間違いないな。ヒカルの奴、厄介な女を...。",
          "まあ口を突っ込むのは野暮か。",
          "頑張れよ、レイナ。",
        ],
      },
    ],
    [
      {
        background: WIL_IMAGE_ID.BACKGROUND_BLACK,
        talker: "サブイベント",
        message: ["平和になったら"],
      },
      {
        background: WIL_IMAGE_ID.BACKGROUND_HOLY_LAND_SHODDY_OUTSIDE_NIGHT,
        bgm: WIL_SOUND_ID.BGM_NIGHT,
        left: WIL_IMAGE_ID.CHARACTER_STORM_SHOOTERS_PRINCE,
        talker: "ジョット",
        message: ["..."],
      },
      {
        background: WIL_IMAGE_ID.BACKGROUND_HOLY_LAND_SHODDY_OUTSIDE_NIGHT,
        left: WIL_IMAGE_ID.CHARACTER_STORM_SHOOTERS_PRINCE,
        right: WIL_IMAGE_ID.CHARACTER_HERO,
        talker: "ヒカル",
        message: ["ジョットさん、ボーっとして、どうしたんですか？"],
      },
      {
        background: WIL_IMAGE_ID.BACKGROUND_HOLY_LAND_SHODDY_OUTSIDE_NIGHT,
        left: WIL_IMAGE_ID.CHARACTER_STORM_SHOOTERS_PRINCE,
        right: WIL_IMAGE_ID.CHARACTER_HERO,
        talker: "ジョット",
        message: ["いや、焔の国との戦いが終わった後のことを考えてたんだよ。"],
      },
      {
        background: WIL_IMAGE_ID.BACKGROUND_HOLY_LAND_SHODDY_OUTSIDE_NIGHT,
        left: WIL_IMAGE_ID.CHARACTER_STORM_SHOOTERS_PRINCE,
        right: WIL_IMAGE_ID.CHARACTER_HERO,
        talker: "ヒカル",
        message: ["戦いが終わった後？"],
      },
      {
        background: WIL_IMAGE_ID.BACKGROUND_HOLY_LAND_SHODDY_OUTSIDE_NIGHT,
        left: WIL_IMAGE_ID.CHARACTER_STORM_SHOOTERS_PRINCE,
        right: WIL_IMAGE_ID.CHARACTER_HERO,
        talker: "ジョット",
        message: [
          "そう。昔、兄貴が教えてくれたんだよ。",
          "何かを成し遂げるときは、終わった後にどうなっていたいかを考えるといいって。",
        ],
      },
      {
        background: WIL_IMAGE_ID.BACKGROUND_HOLY_LAND_SHODDY_OUTSIDE_NIGHT,
        left: WIL_IMAGE_ID.CHARACTER_STORM_SHOOTERS_PRINCE,
        right: WIL_IMAGE_ID.CHARACTER_HERO,
        talker: "ヒカル",
        message: ["それで、ジョットさんは何を考えてたんですか？"],
      },
      {
        background: WIL_IMAGE_ID.BACKGROUND_HOLY_LAND_SHODDY_OUTSIDE_NIGHT,
        left: WIL_IMAGE_ID.CHARACTER_STORM_SHOOTERS_PRINCE,
        right: WIL_IMAGE_ID.CHARACTER_HERO,
        talker: "ジョット",
        message: [
          "それが、全く思い浮かばなくてな...。",
          "平和な世界を取り戻せたとして、俺には兄貴の治めない嵐の国は考えられねえんだ。",
        ],
      },
      {
        background: WIL_IMAGE_ID.BACKGROUND_HOLY_LAND_SHODDY_OUTSIDE_NIGHT,
        left: WIL_IMAGE_ID.CHARACTER_STORM_SHOOTERS_PRINCE,
        right: WIL_IMAGE_ID.CHARACTER_HERO,
        talker: "ヒカル",
        message: ["お兄さんはどんな王様だったんですか？"],
      },
      {
        background: WIL_IMAGE_ID.BACKGROUND_HOLY_LAND_SHODDY_OUTSIDE_NIGHT,
        left: WIL_IMAGE_ID.CHARACTER_STORM_SHOOTERS_PRINCE,
        right: WIL_IMAGE_ID.CHARACTER_HERO,
        talker: "ジョット",
        message: [
          "結構無茶苦茶な王様だったな。",
          "国民の意見を聞くって言ってた割に、案を聞き入れるには兄貴との勝負に勝たないといけなかったし、国中の女を集めてパーティを開いたこともあったよ。",
        ],
      },
      {
        background: WIL_IMAGE_ID.BACKGROUND_HOLY_LAND_SHODDY_OUTSIDE_NIGHT,
        left: WIL_IMAGE_ID.CHARACTER_STORM_SHOOTERS_PRINCE,
        right: WIL_IMAGE_ID.CHARACTER_HERO_WORRIERED,
        talker: "ヒカル",
        message: ["それっていい王様...？"],
      },
      {
        background: WIL_IMAGE_ID.BACKGROUND_HOLY_LAND_SHODDY_OUTSIDE_NIGHT,
        left: WIL_IMAGE_ID.CHARACTER_STORM_SHOOTERS_PRINCE,
        right: WIL_IMAGE_ID.CHARACTER_HERO,
        talker: "ジョット",
        message: [
          "はは。そうなるよな。俺もそう思ってた。",
          "でも、強い意思のあるやつとの勝負にはわざと負けて案を聞き入れてたし、パーティを開いたのも兄貴と戦って勝てないような人を集めて、腹を割って話せる場所を設けてただけだったんだよ。",
        ],
      },
      {
        background: WIL_IMAGE_ID.BACKGROUND_HOLY_LAND_SHODDY_OUTSIDE_NIGHT,
        left: WIL_IMAGE_ID.CHARACTER_STORM_SHOOTERS_PRINCE,
        right: WIL_IMAGE_ID.CHARACTER_HERO,
        talker: "ジョット",
        message: [
          "無茶なやり方だったけど、ちゃんと意味があった。",
          "俺はどっちかというと堅実な方だから、そんなやり方はできない。兄貴のいた嵐の国は、もう作れねえんだ。",
        ],
      },
      {
        background: WIL_IMAGE_ID.BACKGROUND_HOLY_LAND_SHODDY_OUTSIDE_NIGHT,
        left: WIL_IMAGE_ID.CHARACTER_STORM_SHOOTERS_PRINCE,
        right: WIL_IMAGE_ID.CHARACTER_HERO,
        talker: "ヒカル",
        message: ["ジョットは嵐の国をどうしたいの？"],
      },
      {
        background: WIL_IMAGE_ID.BACKGROUND_HOLY_LAND_SHODDY_OUTSIDE_NIGHT,
        left: WIL_IMAGE_ID.CHARACTER_STORM_SHOOTERS_PRINCE,
        right: WIL_IMAGE_ID.CHARACTER_HERO,
        talker: "ジョット",
        message: [
          "おい、タメ口...まあいいか。",
          "兄貴がいたときみたいに、国民が政治に口出せて、全員で国政を改善していける。そんな国かな。",
          "その先に、国民の笑顔が見える気がする。",
        ],
      },
      {
        background: WIL_IMAGE_ID.BACKGROUND_HOLY_LAND_SHODDY_OUTSIDE_NIGHT,
        left: WIL_IMAGE_ID.CHARACTER_STORM_SHOOTERS_PRINCE,
        right: WIL_IMAGE_ID.CHARACTER_HERO,
        talker: "ヒカル",
        message: [
          "なら、お兄さんと同じじゃなくたっていいじゃないかな？",
          "堅実なやり方で国民の話を聞いて国を作っていけばいい。俺はそう思うな。",
        ],
      },
      {
        background: WIL_IMAGE_ID.BACKGROUND_HOLY_LAND_SHODDY_OUTSIDE_NIGHT,
        left: WIL_IMAGE_ID.CHARACTER_STORM_SHOOTERS_PRINCE,
        right: WIL_IMAGE_ID.CHARACTER_HERO,
        talker: "ジョット",
        message: ["そうか。そうだな。"],
      },
      {
        background: WIL_IMAGE_ID.BACKGROUND_HOLY_LAND_SHODDY_OUTSIDE_NIGHT,
        left: WIL_IMAGE_ID.CHARACTER_STORM_SHOOTERS_PRINCE,
        right: WIL_IMAGE_ID.CHARACTER_HERO,
        talker: "ジョット",
        message: [
          "よし、決めた！",
          "世界が平和になったら、俺が嵐の国を治める。",
          "で、俺らしい堅実なやり方で、兄貴よりも良い国を作ってやる！",
        ],
      },
      {
        background: WIL_IMAGE_ID.BACKGROUND_HOLY_LAND_SHODDY_OUTSIDE_NIGHT,
        left: WIL_IMAGE_ID.CHARACTER_STORM_SHOOTERS_PRINCE,
        right: WIL_IMAGE_ID.CHARACTER_HERO,
        talker: "ジョット",
        message: ["ヒカル、時間取らせたな。絶対、勝つぞ！"],
      },
      {
        background: WIL_IMAGE_ID.BACKGROUND_HOLY_LAND_SHODDY_OUTSIDE_NIGHT,
        left: WIL_IMAGE_ID.CHARACTER_STORM_SHOOTERS_PRINCE,
        right: WIL_IMAGE_ID.CHARACTER_HERO_SMILE,
        talker: "ヒカル",
        message: ["...うん！"],
      },
      {
        background: WIL_IMAGE_ID.BACKGROUND_HOLY_LAND_SHODDY_OUTSIDE_NIGHT,
        left: WIL_IMAGE_ID.CHARACTER_STORM_SHOOTERS_PRINCE,
        right: WIL_IMAGE_ID.CHARACTER_HERO,
        talker: "ジョット",
        message: ["あと、敬語使えよな。"],
      },
    ],
  ];