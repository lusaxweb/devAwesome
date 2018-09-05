<template>
  <div class="list-emojis">
    <ul>
      <li :key="index" v-for="(emoji, index) in emojis">
        <button class="btn-copy">
          <i class="material-icons">
            filter_none
          </i>
        </button>
        <span class="emoji">{{ emoji.emoji }}</span>
        <span class="text-emoji">{{emoji.text}}</span>
      </li>
    </ul>
    <!-- {{emojis}} -->
  </div>
</template>
<script>
export default {
  data: () => ({
    emojis: [
      {
        emoji: '😊',
        text: ':blush:'
      },
      {
        emoji: '😃',
        text: ':smiley:'
      },
      {
        emoji: '😏',
        text: ':smirk:'
      },
      {
        emoji: '😍',
        text: ':heart_eyes:'
      },
      {
        emoji: '😘',
        text: ':kissing_heart:'
      },
      {
        emoji: '😚',
        text: ':kissing_closed_eyes:'
      },
      {
        emoji: '😳',
        text: ':flushed:'
      },
      {
        emoji: '😌',
        text: ':relieved:'
      },
      {
        emoji: '😆',
        text: ':satisfied:'
      },
      {
        emoji: '😁',
        text: ':grin:'
      },
      {
        emoji: '😆',
        text: ':satisfied:'
      },
      {
        emoji: '😁',
        text: ':grin:'
      },
      {
        emoji: '😉',
        text: ':wink:'
      },
      {
        emoji: '😜',
        text: ':stuck_out_tongue_winking_eye:'
      },
      {
        emoji: '😝',
        text: ':stuck_out_tongue_closed_eyes:'
      },
      {
        emoji: '😝',
        text: ':stuck_out_tongue_closed_eyes:'
      },
      {
        emoji: '😀',
        text: ':grinning:'
      },
      {
        emoji: '😗',
        text: ':kissing:'
      },
      {
        emoji: '😙',
        text: ':kissing_smiling_eyes:'
      },
      {
        emoji: '😛',
        text: ':stuck_out_tongue:'
      },
      {
        emoji: '😴',
        text: ':sleeping:'
      },
      {
        emoji: '😟',
        text: ':worried:'
      },
      {
        emoji: '😦',
        text: ':frowning:'
      },
      {
        emoji: '😧',
        text: ':anguished:'
      },
      {
        emoji: '😮',
        text: ':open_mouth:'
      },
      {
        emoji: '😬',
        text: ':grimacing:'
      },
      {
        emoji: '😕',
        text: ':confused:'
      },
      {
        emoji: '😯',
        text: ':hushed:'
      },
      {
        emoji: '😑',
        text: ':expressionless:'
      },
      {
        emoji: '😒',
        text: ':unamused:'
      },
      {
        emoji: '😅',
        text: ':sweat_smile:'
      },
      {
        emoji: '😓',
        text: ':sweat:'
      },
      {
        emoji: '😥',
        text: ':disappointed_relieved:'
      },
      {
        emoji: '😩',
        text: ':weary:'
      },
      {
        emoji: '😔',
        text: ':pensive:'
      },
      {
        emoji: '😞',
        text: ':disappointed:'
      },
      {
        emoji: '😖',
        text: ':confounded:'
      },
      {
        emoji: '😨',
        text: ':fearful:'
      },
      {
        emoji: '😰',
        text: ':cold_sweat:'
      },
      {
        emoji: '😣',
        text: ':persevere:'
      },
      {
        emoji: '😢',
        text: ':cry:'
      },
      {
        emoji: '😭',
        text: ':sob:'
      },
      {
        emoji: '😂',
        text: ':joy:'
      },
      {
        emoji: '😲',
        text: ':astonished:'
      },
      {
        emoji: '😲',
        text: ':astonished:'
      },
      {
        emoji: '😭',
        text: ':sob:'
      },
      {
        emoji: '😂',
        text: ':joy:'
      },
      {
        emoji: '😲',
        text: ':astonished:'
      },
      {
        emoji: '😱',
        text: ':scream:'
      },
      {
        emoji: '😫',
        text: ':tired_face:'
      },
      {
        emoji: '😠',
        text: ':angry:'
      },
      {
        emoji: '😡',
        text: ':rage:'
      },
      {
        emoji: '😤',
        text: ':triumph:'
      },
      {
        emoji: '😪',
        text: ':triumph:'
      },
      {
        emoji: '😋',
        text: ':yum:'
      },
      {
        emoji: '😷',
        text: ':mask:'
      },
      {
        emoji: '😷',
        text: ':mask:'
      },
      {
        emoji: '😎',
        text: ':sunglasses:'
      },
      {
        emoji: '😵',
        text: ':dizzy_face:'
      },
      {
        emoji: '👿',
        text: ':imp:'
      },
      {
        emoji: '😈',
        text: ':smiling_imp:'
      },
      {
        emoji: '😐',
        text: ':neutral_face:'
      },
      {
        emoji: '😶',
        text: ':no_mouth:'
      },
      {
        emoji: '😇',
        text: ':innocent:'
      },
      {
        emoji: '👽',
        text: ':alien:'
      },
      {
        emoji: '💛',
        text: ':yellow_heart:'
      },
      {
        emoji: '💙',
        text: ':blue_heart:'
      },
      {
        emoji: '💜',
        text: ':purple_heart:'
      },
      {
        emoji: '❤️',
        text: ':heart:'
      },
      {
        emoji: '💚',
        text: ':green_heart:'
      },
      {
        emoji: '💔',
        text: ':broken_heart:'
      },
      {
        emoji: '💓',
        text: ':heartbeat:'
      },
      {
        emoji: '💗',
        text: ':heartpulse:'
      },
      {
        emoji: '💕',
        text: ':two_hearts:'
      },
      {
        emoji: '💞',
        text: ':revolving_hearts:'
      },
      {
        emoji: '💘',
        text: ':cupid:'
      },
      {
        emoji: '💖',
        text: ':sparkling_heart:'
      },
      {
        emoji: '✨',
        text: ':sparkles:'
      },
      {
        emoji: '⭐️',
        text: ':star:'
      },
      {
        emoji: '🌟',
        text: ':star2:'
      },
      {
        emoji: '💫',
        text: ':dizzy:'
      },
      {
        emoji: '💥',
        text: ':boom:'
      },
      {
        emoji: '💢',
        text: ':anger:'
      },
      {
        emoji: '❗️',
        text: ':exclamation:'
      },
      {
        emoji: '❓',
        text: ':question:'
      },
      {
        emoji: '❕',
        text: ':grey_exclamation:'
      },
      {
        emoji: '❔',
        text: ':grey_question:'
      },
      {
        emoji: '💤',
        text: ':zzz:'
      },
      {
        emoji: '💨',
        text: ':dash:'
      },
      {
        emoji: '💦',
        text: ':sweat_drops:'
      },
      {
        emoji: '🎶',
        text: ':notes:'
      },
      {
        emoji: '🎵',
        text: ':musical_note:'
      },
      {
        emoji: '🔥',
        text: ':fire:'
      },
      {
        emoji: '💩',
        text: ':hankey: | :poop: | :shit:'
      },
      {
        emoji: '👍',
        text: ':+1: | :thumbsup:'
      },
      {
        emoji: '👎',
        text: ':-1: | :thumbsdown:'
      },
      {
        emoji: '👌',
        text: ':ok_hand:'
      },
      {
        emoji: '👊',
        text: ':punch: | :facepunch:'
      },
      {
        emoji: '✊',
        text: ':fist:'
      },
      {
        emoji: '✌️',
        text: ':v:'
      },
      {
        emoji: '👋',
        text: ':wave:'
      },
      {
        emoji: '✋',
        text: ':hand: | :raised_hand:'
      },
      {
        emoji: '👐',
        text: ':open_hands:'
      },
      {
        emoji: '☝️',
        text: ':point_up:'
      },
      {
        emoji: '👇',
        text: ':point_down:'
      },
      {
        emoji: '👈',
        text: ':point_left:'
      },
      {
        emoji: '👉',
        text: ':point_right:'
      },
      {
        emoji: '🙌',
        text: ':raised_hands:'
      },
      {
        emoji: '🙏',
        text: ':pray:'
      },
      {
        emoji: '👆',
        text: ':point_up_2:'
      },
      {
        emoji: '👏',
        text: ':point_up_2:'
      },
      {
        emoji: '💪',
        text: ':muscle:'
      },
      {
        emoji: '🤘',
        text: ':metal:'
      },
      {
        emoji: '🖕',
        text: ':fu:'
      },
      {
        emoji: '🚶',
        text: ':walking:'
      },
      {
        emoji: '🏃',
        text: ':runner: | :running:'
      },
      {
        emoji: '👫',
        text: ':couple:'
      },
      {
        emoji: '👪',
        text: ':family:'
      },
      {
        emoji: '👪',
        text: ':family:'
      },
      {
        emoji: '👬',
        text: ':two_men_holding_hands:'
      },
      {
        emoji: '👭',
        text: ':two_women_holding_hands:'
      },
      {
        emoji: '💃',
        text: ':dancer:'
      },
      {
        emoji: '👯',
        text: ':dancers:'
      },
      {
        emoji: '🙆',
        text: ':ok_woman:'
      },
      {
        emoji: '🙅',
        text: ':no_good:'
      },
      {
        emoji: '💁',
        text: ':information_desk_person:'
      },
      {
        emoji: '🙋',
        text: ':raising_hand:'
      },
      {
        emoji: '👰',
        text: ':bride_with_veil:'
      },
      {
        emoji: '🙎',
        text: ':person_with_pouting_face:'
      },
      {
        emoji: '🙍',
        text: ':person_frowning:'
      },
      {
        emoji: '🙇',
        text: ':bow:'
      },
      {
        emoji: '💑',
        text: ':couple_with_heart:'
      },
      {
        emoji: '💆',
        text: ':massage:'
      },
      {
        emoji: '💇',
        text: ':haircut:'
      },
      {
        emoji: '💅',
        text: ':nail_care:'
      },
      {
        emoji: '👦',
        text: ':boy:'
      },
      {
        emoji: '👧',
        text: ':girl:'
      },
      {
        emoji: '👩',
        text: ':woman:'
      },
      {
        emoji: '👨',
        text: ':man:'
      },
      {
        emoji: '👶',
        text: ':baby:'
      },
      {
        emoji: '👵',
        text: ':older_woman:'
      },
      {
        emoji: '👴',
        text: ':older_woman:'
      },
      {
        emoji: '👴',
        text: ':older_man:'
      },
      {
        emoji: '👱',
        text: ':person_with_blond_hair:'
      },
      {
        emoji: '👲',
        text: ':man_with_gua_pi_mao:'
      },
      {
        emoji: '👳',
        text: ':man_with_turban:'
      },
      {
        emoji: '👷',
        text: ':construction_worker:'
      },
      {
        emoji: '👮',
        text: ':cop:'
      },
      {
        emoji: '👼',
        text: ':angel:'
      },
      {
        emoji: '👸',
        text: ':princess:'
      },
      {
        emoji: '😺',
        text: ':smiley_cat:'
      },
      {
        emoji: '😸',
        text: ':smile_cat:'
      },
      {
        emoji: '😻',
        text: ':heart_eyes_cat:'
      },
      {
        emoji: '😽',
        text: ':kissing_cat:'
      },
      {
        emoji: '😼',
        text: ':smirk_cat:'
      },
      {
        emoji: '🙀',
        text: ':scream_cat:'
      },
      {
        emoji: '😿',
        text: ':crying_cat_face:'
      },
      {
        emoji: '😹',
        text: ':joy_cat:'
      },
      {
        emoji: '😾',
        text: ':pouting_cat:'
      },
      {
        emoji: '👹',
        text: ':japanese_ogre:'
      },
      {
        emoji: '👺',
        text: ':japanese_goblin:'
      },
      {
        emoji: '🙈',
        text: ':see_no_evil:'
      },
      {
        emoji: '🙉',
        text: ':hear_no_evil:'
      },
      {
        emoji: '🙊',
        text: ':speak_no_evil:'
      },
      {
        emoji: '💂',
        text: ':guardsman:'
      },
      {
        emoji: '💀',
        text: ':skull:'
      },
      {
        emoji: '🐾',
        text: ':feet:'
      },
      {
        emoji: '👄',
        text: ':lips:'
      },
      {
        emoji: '💋',
        text: ':kiss:'
      },
      {
        emoji: '💧',
        text: ':droplet:'
      },
      {
        emoji: '👂',
        text: ':ear:'
      },
      {
        emoji: '👀',
        text: ':eyes:'
      },
      {
        emoji: '👃',
        text: ':nose:'
      },
      {
        emoji: '👅',
        text: ':tongue:'
      },
      {
        emoji: '💌',
        text: ':love_letter:'
      },
      {
        emoji: '👤',
        text: ':bust_in_silhouette:'
      },
      {
        emoji: '👥',
        text: ':busts_in_silhouette:'
      },
      {
        emoji: '💬',
        text: ':speech_balloon:'
      },
      {
        emoji: '💭',
        text: ':thought_balloon:'
      },
      {
        emoji: '☀️',
        text: ':sunny:'
      },
      {
        emoji: '☔️',
        text: ':umbrella:'
      },
      {
        emoji: '☁️',
        text: ':cloud:'
      },
      {
        emoji: '❄️',
        text: ':snowflake:'
      },
      {
        emoji: '⛄️',
        text: ':snowman:'
      },
      {
        emoji: '⚡️',
        text: ':zap:'
      },
      {
        emoji: '🌀',
        text: ':cyclone:'
      },
      {
        emoji: '🌁',
        text: ':foggy:'
      },
      {
        emoji: '🌊',
        text: ':ocean:'
      },
      {
        emoji: '🐱',
        text: ':cat:'
      },
      {
        emoji: '🐶',
        text: ':dog:'
      },
      {
        emoji: '🐭',
        text: ':mouse:'
      },
      {
        emoji: '🐹',
        text: ':hamster:'
      },
      {
        emoji: '🐰',
        text: ':rabbit:'
      },
      {
        emoji: '🐺',
        text: ':wolf:'
      },
      {
        emoji: '🐸',
        text: ':frog:'
      },
      {
        emoji: '🐯',
        text: ':tiger:'
      },
      {
        emoji: '🐨',
        text: ':koala:'
      },
      {
        emoji: '🐻',
        text: ':bear:'
      },
      {
        emoji: '🐷',
        text: ':pig:'
      },
      {
        emoji: '🐽',
        text: ':pig_nose:'
      },
      {
        emoji: '🐮',
        text: ':cow:'
      },
      {
        emoji: '🐗',
        text: ':boar:'
      },
      {
        emoji: '🐵',
        text: ':monkey_face:'
      },
      {
        emoji: '🐒',
        text: ':monkey:'
      },
      {
        emoji: '🐴',
        text: ':horse:'
      },
      {
        emoji: '🐎',
        text: ':racehorse:'
      },
      {
        emoji: '🐫',
        text: ':camel:'
      },
      {
        emoji: '🐑',
        text: ':sheep:'
      },
      {
        emoji: '🐘',
        text: ':elephant:'
      },
      {
        emoji: '🐼',
        text: ':panda_face:'
      },
      {
        emoji: '🐍',
        text: ':snake:'
      },
      {
        emoji: '🐦',
        text: ':bird:'
      },
      {
        emoji: '🐤',
        text: ':baby_chick:'
      },
      {
        emoji: '🐥',
        text: ':hatched_chick:'
      },
      {
        emoji: '🐣',
        text: ':hatching_chick:'
      },
      {
        emoji: '🐔',
        text: ':chicken:'
      },
      {
        emoji: '🐧',
        text: ':penguin:'
      },
      {
        emoji: '🐢',
        text: ':turtle:'
      },
      {
        emoji: '🐛',
        text: ':bug:'
      },
      {
        emoji: '🐝',
        text: ':honeybee:'
      },
      {
        emoji: '🐜',
        text: ':ant:'
      },
      {
        emoji: '🐞',
        text: ':beetle:'
      },
      {
        emoji: '🐌',
        text: ':snail:'
      },
      {
        emoji: '🐙',
        text: ':octopus:'
      },
      {
        emoji: '🐠',
        text: ':tropical_fish:'
      },
      {
        emoji: '🐟',
        text: ':fish:'
      },
      {
        emoji: '🐳',
        text: ':whale:'
      },
      {
        emoji: '🐋',
        text: ':whale2:'
      },
      {
        emoji: '🐬',
        text: ':dolphin:'
      },
      {
        emoji: '🐄',
        text: ':cow2:'
      },
      {
        emoji: '🐏',
        text: ':ram:'
      },
      {
        emoji: '🐀',
        text: ':rat:'
      },
      {
        emoji: '🐃',
        text: ':water_buffalo:'
      },
      {
        emoji: '🐅',
        text: ':tiger2:'
      },
      {
        emoji: '🐇',
        text: ':rabbit2:'
      },
      {
        emoji: '🐉',
        text: ':dragon:'
      },
      {
        emoji: '🐐',
        text: ':goat:'
      },
      {
        emoji: '🐓',
        text: ':rooster:'
      },
      {
        emoji: '🐕',
        text: ':dog2:'
      },

    ]
  })
}
</script>
<style lang="stylus">
@require '../../config'
.list-emojis
  padding 10px
  ul
    width 100%
    max-width 800px
    background var(--fondo)
    display flex
    align-items center
    justify-content center
    flex-wrap wrap
    margin auto
    li
      border-radius 10px
      padding 10px
      background var(--fondo2)
      width 70px
      height 70px
      display flex
      align-items center
      justify-content center
      margin 7px
      transition all .2s ease
      font-size 1.5rem
      position relative
      cursor pointer
      z-index 50
      .btn-copy
        position absolute
        right -7px
        top -4px
        width 25px
        height 25px
        border-radius 5px
        background $morado
        color rgb(255,255,255)
        display flex
        align-items center
        justify-content center
        transform scale(.4)
        transition all .2s ease
        opacity 0
        i
          font-size .9rem
          width 100%

      .text-emoji
        position absolute
        font-size .75rem
        bottom -10px
        opacity 0
        transition all .2s ease
        padding 3px 8px
        background $verde
        border-radius 5px
        white-space: nowrap
      .emoji
        transition all .2s ease
      &:hover
        background var(--fondo3)
        transform scale(1.2)
        box-shadow 0px 5px 20px 0px rgba(0,0,0,.1)
        z-index 100
        .text-emoji
          opacity 1
          bottom 0px
        .emoji
          font-size 2rem
          transform translate(-8px, -15px)
        .btn-copy
          transform scale(1)
          opacity 1
</style>
