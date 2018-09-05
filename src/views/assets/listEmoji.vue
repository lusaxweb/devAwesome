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
      }

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

