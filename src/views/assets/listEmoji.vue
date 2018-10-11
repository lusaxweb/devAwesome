<template>
  <div class="list-emojis">
    <ul>
      <li :key="index" v-for="(emoji, index) in emojis">
        <button @click="copy(emoji.emoji)" class="btn-copy">
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
      {
        emoji: '🐖',
        text: ':pig2:'
      },
      {
        emoji: '🐁',
        text: ':mouse2:'
      },
      {
        emoji: '🐂',
        text: ':ox:'
      },
      {
        emoji: '🐲',
        text: ':dragon_face:'
      },
      {
        emoji: '🐡',
        text: ':blowfish:'
      },
      {
        emoji: '🐊',
        text: ':crocodile:'
      },
      {
        emoji: '🐪',
        text: ':dromedary_camel:'
      },
      {
        emoji: '🐆',
        text: ':leopard:'
      },
      {
        emoji: '🐈',
        text: ':cat2:'
      },
      {
        emoji: '🐩',
        text: ':poodle:'
      },
      {
        emoji: '🐾',
        text: ':paw_prints:'
      },
      {
        emoji: '💐',
        text: ':bouquet:'
      },
      {
        emoji: '🌸',
        text: ':cherry_blossom:'
      },
      {
        emoji: '🌷',
        text: ':tulip:'
      },
      {
        emoji: '🍀',
        text: ':four_leaf_clover:'
      },
      {
        emoji: '🌹',
        text: ':rose:'
      },
      {
        emoji: '🌻',
        text: ':sunflower:'
      },
      {
        emoji: '🌺',
        text: ':hibiscus:'
      },
      {
        emoji: '🍁',
        text: ':maple_leaf:'
      },
      {
        emoji: '🍃',
        text: ':leaves:'
      },
      {
        emoji: '🍂',
        text: ':fallen_leaf:'
      },
      {
        emoji: '🌿',
        text: ':herb:'
      },
      {
        emoji: '🍄',
        text: ':mushroom:'
      },
      {
        emoji: '🌵',
        text: ':cactus:'
      },
      {
        emoji: '🌴',
        text: ':palm_tree:'
      },
      {
        emoji: '🌲',
        text: ':evergreen_tree:'
      },
      {
        emoji: '🌳',
        text: ':deciduous_tree:'
      },
      {
        emoji: '🌰',
        text: ':chestnut:'
      },
      {
        emoji: '🌱',
        text: ':seedling:'
      },
      {
        emoji: '🌼',
        text: ':blossom:'
      },
      {
        emoji: '🌾',
        text: ':ear_of_rice:'
      },
      {
        emoji: '🐚',
        text: ':shell:'
      },
      {
        emoji: '🌐',
        text: ':globe_with_meridians:'
      },
      {
        emoji: '🌞',
        text: ':sun_with_face:'
      },
      {
        emoji: '🌝',
        text: ':full_moon_with_face:'
      },
      {
        emoji: '🌚',
        text: ':new_moon_with_face:'
      },
      {
        emoji: '🌑',
        text: ':new_moon:'
      },
      {
        emoji: '🌒',
        text: ':waxing_crescent_moon:'
      },
      {
        emoji: '🌓',
        text: ':first_quarter_moon:'
      },
      {
        emoji: '🌔',
        text: ':waxing_gibbous_moon:'
      },
      {
        emoji: '🌕',
        text: ':full_moon:'
      },
      {
        emoji: '🌖',
        text: ':waning_gibbous_moon:'
      },
      {
        emoji: '🌗',
        text: ':last_quarter_moon:'
      },
      {
        emoji: '🌘',
        text: ':waning_crescent_moon:'
      },
      {
        emoji: '🌜',
        text: ':last_quarter_moon_with_face:'
      },
      {
        emoji: '🌛',
        text: ':first_quarter_moon_with_face:'
      },
      {
        emoji: '🌔',
        text: ':moon:'
      },
      {
        emoji: '🌍',
        text: ':earth_africa:'
      },
      {
        emoji: '🌎',
        text: ':earth_americas:'
      },
      {
        emoji: '🌏',
        text: ':earth_asia:'
      },
      {
        emoji: '🌋',
        text: ':volcano:'
      },
      {
        emoji: '🌌',
        text: ':milky_way:'
      },
      {
        emoji: '⛅️',
        text: ':partly_sunny:'
      },
      {
        emoji: '🎍',
        text: ':bamboo:'
      },
      {
        emoji: '💝',
        text: ':gift_heart:'
      },
      {
        emoji: '🎎',
        text: ':dolls:'
      },
      {
        emoji: '🎒',
        text: ':school_satchel:'
      },
      {
        emoji: '🎓',
        text: ':mortar_board:'
      },
      {
        emoji: '🎏',
        text: ':flags:'
      },
      {
        emoji: '🎆',
        text: ':fireworks:'
      },
      {
        emoji: '🎇',
        text: ':sparkler:'
      },
      {
        emoji: '🎐',
        text: ':wind_chime:'
      },
      {
        emoji: '🎑',
        text: ':rice_scene:'
      },
      {
        emoji: '🎃',
        text: ':jack_o_lantern:'
      },
      {
        emoji: '👻',
        text: ':ghost:'
      },
      {
        emoji: '🎅',
        text: ':santa:'
      },
      {
        emoji: '🎄',
        text: ':christmas_tree:'
      },
      {
        emoji: '🎁',
        text: ':gift:'
      },
      {
        emoji: '🔔',
        text: ':bell:'
      },
      {
        emoji: '🔕',
        text: ':no_bell:'
      },
      {
        emoji: '🎋',
        text: ':tanabata_tree:'
      },
      {
        emoji: '🎉',
        text: ':tada:'
      },
      {
        emoji: '🎊',
        text: ':confetti_ball:'
      },
      {
        emoji: '🎈',
        text: ':balloon:'
      },
      {
        emoji: '🔮',
        text: ':crystal_ball:'
      },
      {
        emoji: '💿',
        text: ':cd:'
      },
      {
        emoji: '📀',
        text: ':dvd:'
      },
      {
        emoji: '💾',
        text: ':floppy_disk:'
      },
      {
        emoji: '📷',
        text: ':camera:'
      },
      {
        emoji: '📹',
        text: ':video_camera:'
      },
      {
        emoji: '🎥',
        text: ':movie_camera:'
      },
      {
        emoji: '💻',
        text: ':computer:'
      },
      {
        emoji: '📺',
        text: ':tv:'
      },
      {
        emoji: '📱',
        text: ':iphone:'
      },
      {
        emoji: '☎️',
        text: ':telephone: | :phone:'
      },
      {
        emoji: '📞',
        text: ':telephone_receiver:'
      },
      {
        emoji: '📟',
        text: ':pager:'
      },
      {
        emoji: '📠',
        text: ':fax:'
      },
      {
        emoji: '💽',
        text: ':minidisc:'
      },
      {
        emoji: '📼',
        text: ':vhs:'
      },
      {
        emoji: '🔉',
        text: ':sound:'
      },
      {
        emoji: '🔈',
        text: ':speaker:'
      },
      {
        emoji: '🔇',
        text: ':mute:'
      },
      {
        emoji: '📢',
        text: ':loudspeaker:'
      },
      {
        emoji: '📣',
        text: ':mega:'
      },
      {
        emoji: '⌛️',
        text: ':hourglass:'
      },
      {
        emoji: '⏳',
        text: ':hourglass_flowing_sand:'
      },
      {
        emoji: '⏰',
        text: ':alarm_clock:'
      },
      {
        emoji: '⌚️',
        text: ':watch:'
      },
      {
        emoji: '📻',
        text: ':radio:'
      },
      {
        emoji: '📡',
        text: ':satellite:'
      },
      {
        emoji: '➿',
        text: ':loop:'
      },
      {
        emoji: '🔍',
        text: ':mag:'
      },
      {
        emoji: '🔎',
        text: ':mag_right:'
      },
      {
        emoji: '🔓',
        text: ':unlock:'
      },
      {
        emoji: '🔒',
        text: ':lock:'
      },
      {
        emoji: '🔏',
        text: ':lock_with_ink_pen:'
      },
      {
        emoji: '🔐',
        text: ':closed_lock_with_key:'
      },
      {
        emoji: '🔑',
        text: ':key:'
      },
      {
        emoji: '💡',
        text: ':bulb:'
      },
      {
        emoji: '🔦',
        text: ':flashlight:'
      },
      {
        emoji: '🔆',
        text: ':high_brightness:'
      },
      {
        emoji: '🔅',
        text: ':low_brightness:'
      },
      {
        emoji: '🔌',
        text: ':electric_plug:'
      },
      {
        emoji: '🔋',
        text: ':battery:'
      },
      {
        emoji: '📲',
        text: ':calling:'
      },
      {
        emoji: '✉️',
        text: ':email:'
      },
      {
        emoji: '📫',
        text: ':mailbox:'
      },
      {
        emoji: '📮',
        text: ':postbox:'
      },
      {
        emoji: '🛀',
        text: ':bath:'
      },
      {
        emoji: '🛁',
        text: ':bathtub:'
      },
      {
        emoji: '🚿',
        text: ':shower:'
      },
      {
        emoji: '🚽',
        text: ':toilet:'
      },
      {
        emoji: '🔧',
        text: ':wrench:'
      },
      {
        emoji: '🔩',
        text: ':nut_and_bolt:'
      },
      {
        emoji: '🔨',
        text: ':hammer:'
      },
      {
        emoji: '💺',
        text: ':seat:'
      },
      {
        emoji: '💰',
        text: ':moneybag:'
      },
      {
        emoji: '💴',
        text: ':yen:'
      },
      {
        emoji: '💵',
        text: ':dollar:'
      },
      {
        emoji: '💷',
        text: ':pound:'
      },
      {
        emoji: '💶',
        text: ':euro:'
      },
      {
        emoji: '💳',
        text: ':credit_card:'
      },
      {
        emoji: '💸',
        text: ':money_with_wings:'
      },
      {
        emoji: '📧',
        text: ':e-mail:'
      },
      {
        emoji: '📥',
        text: ':inbox_tray:'
      },
      {
        emoji: '📤',
        text: ':outbox_tray:'
      },
      {
        emoji: '✉️',
        text: ':envelope:'
      },
      {
        emoji: '📨',
        text: ':incoming_envelope:'
      },
      {
        emoji: '📯',
        text: ':postal_horn:'
      },
      {
        emoji: '📪',
        text: ':mailbox_closed:'
      },
      {
        emoji: '📬',
        text: ':mailbox_with_mail:'
      },
      {
        emoji: '📭',
        text: ':mailbox_with_no_mail:'
      },
      {
        emoji: '🚪',
        text: ':door:'
      },
      {
        emoji: '🚬',
        text: ':smoking:'
      },
      {
        emoji: '💣',
        text: ':bomb:'
      },
      {
        emoji: '🔫',
        text: ':gun:'
      },
      {
        emoji: '🔪',
        text: ':hocho:'
      },
      {
        emoji: '💊',
        text: ':pill:'
      },
      {
        emoji: '💉',
        text: ':syringe:'
      },
      {
        emoji: '📄',
        text: ':page_facing_up:'
      },
      {
        emoji: '📃',
        text: ':page_with_curl:'
      },
      {
        emoji: '📑',
        text: ':bookmark_tabs:'
      },
      {
        emoji: '📊',
        text: ':bar_chart:'
      },
      {
        emoji: '📈',
        text: ':chart_with_upwards_trend:'
      },
      {
        emoji: '📉',
        text: ':chart_with_downwards_trend:'
      },
      {
        emoji: '📜',
        text: ':scroll:'
      },
      {
        emoji: '📋',
        text: ':clipboard:'
      },
      {
        emoji: '📆',
        text: ':calendar:'
      },
      {
        emoji: '📅',
        text: ':date:'
      },
      {
        emoji: '📇',
        text: ':card_index:'
      },
      {
        emoji: '📁',
        text: ':file_folder:'
      },
      {
        emoji: '📂',
        text: ':open_file_folder:'
      },
      {
        emoji: '✂️',
        text: ':scissors:'
      },
      {
        emoji: '📌',
        text: ':pushpin:'
      },
      {
        emoji: '📎',
        text: ':paperclip:'
      },
      {
        emoji: '✒️',
        text: ':black_nib:'
      },
      {
        emoji: '✏️',
        text: ':pencil2:'
      },
      {
        emoji: '📏',
        text: ':straight_ruler:'
      },
      {
        emoji: '📐',
        text: ':triangular_ruler:'
      },
      {
        emoji: '📕',
        text: ':closed_book:'
      },
      {
        emoji: '📗',
        text: ':green_book:'
      },
      {
        emoji: '📘',
        text: ':blue_book:'
      },
      {
        emoji: '📙',
        text: ':orange_book:'
      },
      {
        emoji: '📓',
        text: ':notebook:'
      },
      {
        emoji: '📔',
        text: ':notebook_with_decorative_cover:'
      },
      {
        emoji: '📒',
        text: ':ledger:'
      },
      {
        emoji: '📚',
        text: ':books:'
      },
      {
        emoji: '🔖',
        text: ':bookmark:'
      },
      {
        emoji: '📛',
        text: ':name_badge:'
      },
      {
        emoji: '🔬',
        text: ':microscope:'
      },
      {
        emoji: '🔭',
        text: ':telescope:'
      },
      {
        emoji: '📰',
        text: ':newspaper:'
      },
      {
        emoji: '🏈',
        text: ':football:'
      },
      {
        emoji: '🏀',
        text: ':basketball:'
      },
      {
        emoji: '⚽️',
        text: ':soccer:'
      },
      {
        emoji: '⚾️',
        text: ':baseball:'
      },
      {
        emoji: '🎾',
        text: ':tennis:'
      },
      {
        emoji: '🎱',
        text: ':8ball:'
      },
      {
        emoji: '🏉',
        text: ':rugby_football:'
      },
      {
        emoji: '🎳',
        text: ':bowling:'
      },
      {
        emoji: '⛳️',
        text: ':golf:'
      },
      {
        emoji: '🚵',
        text: ':mountain_bicyclist:'
      },
      {
        emoji: '🚴',
        text: ':bicyclist:'
      },
      {
        emoji: '🏇',
        text: ':horse_racing:'
      },
      {
        emoji: '🏂',
        text: ':snowboarder:'
      },
      {
        emoji: '🏊',
        text: ':swimmer:'
      },
      {
        emoji: '🏄',
        text: ':surfer:'
      },
      {
        emoji: '🎿',
        text: ':ski:'
      },
      {
        emoji: '♠️',
        text: ':spades:'
      },
      {
        emoji: '♥️',
        text: ':hearts:'
      },
      {
        emoji: '♣️',
        text: ':clubs:'
      },
      {
        emoji: '♦️',
        text: ':diamonds:'
      },
      {
        emoji: '💎',
        text: ':gem:'
      },
      {
        emoji: '💍',
        text: ':ring:'
      },
      {
        emoji: '🏆',
        text: ':trophy:'
      },
      {
        emoji: '🎼',
        text: ':musical_score:'
      },
      {
        emoji: '🎹',
        text: ':musical_keyboard:'
      },
      {
        emoji: '🎻',
        text: ':violin:'
      },
      {
        emoji: '👾',
        text: ':space_invader:'
      },
      {
        emoji: '🎮',
        text: ':video_game:'
      },
      {
        emoji: '🃏',
        text: ':black_joker:'
      },
      {
        emoji: '🎴',
        text: ':flower_playing_cards:'
      },
      {
        emoji: '🎲',
        text: ':game_die:'
      },
      {
        emoji: '🎯',
        text: ':dart:'
      },
      {
        emoji: '🀄️',
        text: ':mahjong:'
      },
      {
        emoji: '🎬',
        text: ':clapper:'
      },
      {
        emoji: '📝',
        text: ':memo: | :pencil:'
      },
      {
        emoji: '📖',
        text: ':book:'
      },
      {
        emoji: '🎨',
        text: ':art:'
      },
      {
        emoji: '🎤',
        text: ':microphone:'
      },
      {
        emoji: '🎧',
        text: ':headphones:'
      },
      {
        emoji: '🎺',
        text: ':trumpet:'
      },
      {
        emoji: '🎷',
        text: ':saxophone:'
      },
      {
        emoji: '🎸',
        text: ':guitar:'
      },
      {
        emoji: '👞',
        text: ':shoe:'
      },
      {
        emoji: '👡',
        text: ':sandal:'
      },
      {
        emoji: '👠',
        text: ':high_heel:'
      },
      {
        emoji: '💄',
        text: ':lipstick:'
      },
      {
        emoji: '👢',
        text: ':boot:'
      },
      {
        emoji: '👕',
        text: ':shirt: | :tshirt:'
      },
      {
        emoji: '👔',
        text: ':necktie:'
      },
      {
        emoji: '👚',
        text: ':womans_clothes:'
      },
      {
        emoji: '👗',
        text: ':dress:'
      },
      {
        emoji: '🎽',
        text: ':running_shirt_with_sash:'
      },
      {
        emoji: '👖',
        text: ':jeans:'
      },
      {
        emoji: '👘',
        text: ':kimono:'
      },
      {
        emoji: '👙',
        text: ':bikini:'
      },
      {
        emoji: '🎀',
        text: ':ribbon:'
      },
      {
        emoji: '🎩',
        text: ':tophat:'
      },
      {
        emoji: '👑',
        text: ':crown:'
      },
      {
        emoji: '👒',
        text: ':womans_hat:'
      },
      {
        emoji: '👞',
        text: ':mans_shoe:'
      },
      {
        emoji: '🌂',
        text: ':closed_umbrella:'
      },
      {
        emoji: '💼',
        text: ':briefcase:'
      },
      {
        emoji: '👜',
        text: ':handbag:'
      },
      {
        emoji: '👝',
        text: ':pouch:'
      },
      {
        emoji: '👛',
        text: ':purse:'
      },
      {
        emoji: '👓',
        text: ':eyeglasses:'
      },
      {
        emoji: '🎣',
        text: ':fishing_pole_and_fish:'
      },
      {
        emoji: '☕️',
        text: ':coffee:'
      },
      {
        emoji: '🍵',
        text: ':tea:'
      },
      {
        emoji: '🍶',
        text: ':sake:'
      },
      {
        emoji: '🍼',
        text: ':baby_bottle:'
      },
      {
        emoji: '🍺',
        text: ':beer:'
      },
      {
        emoji: '🍻',
        text: ':beers:'
      },
      {
        emoji: '🍸',
        text: ':cocktail:'
      },
      {
        emoji: '🍹',
        text: ':tropical_drink:'
      },
      {
        emoji: '🍷',
        text: ':wine_glass:'
      },
      {
        emoji: '🍴',
        text: ':fork_and_knife:'
      },
      {
        emoji: '🍕',
        text: ':pizza:'
      },
      {
        emoji: '🍔',
        text: ':hamburger:'
      },
      {
        emoji: '🍟',
        text: ':fries:'
      },
      {
        emoji: '🍗',
        text: ':poultry_leg:'
      },
      {
        emoji: '🍖',
        text: ':meat_on_bone:'
      },
      {
        emoji: '🍝',
        text: ':spaghetti:'
      },
      {
        emoji: '🍛',
        text: ':curry:'
      },
      {
        emoji: '🍤',
        text: ':fried_shrimp:'
      },
      {
        emoji: '🍱',
        text: ':bento:'
      },
      {
        emoji: '🍣',
        text: ':sushi:'
      },
      {
        emoji: '🍥',
        text: ':fish_cake:'
      },
      {
        emoji: '🍙',
        text: ':rice_ball:'
      },
      {
        emoji: '🍘',
        text: ':rice_cracker:'
      },
      {
        emoji: '🍚',
        text: ':rice:'
      },
      {
        emoji: '🍜',
        text: ':ramen:'
      },
      {
        emoji: '🍲',
        text: ':stew:'
      },
      {
        emoji: '🍢',
        text: ':oden:'
      },
      {
        emoji: '🍡',
        text: ':dango:'
      },
      {
        emoji: '🥚',
        text: ':egg:'
      },
      {
        emoji: '🍞',
        text: ':bread:'
      },
      {
        emoji: '🍩',
        text: ':doughnut:'
      },
      {
        emoji: '🍮',
        text: ':custard:'
      },
      {
        emoji: '🍦',
        text: ':icecream:'
      },
      {
        emoji: '🍨',
        text: ':ice_cream:'
      },
      {
        emoji: '🍧',
        text: ':shaved_ice:'
      },
      {
        emoji: '🎂',
        text: ':birthday:'
      },
      {
        emoji: '🍰',
        text: ':cake:'
      },
      {
        emoji: '🍧',
        text: ':shaved_ice:'
      },
      {
        emoji: '🎂',
        text: ':birthday:'
      },
      {
        emoji: '🍰',
        text: ':cake:'
      },
      {
        emoji: '🍪',
        text: ':cookie:'
      },
      {
        emoji: '🍫',
        text: ':chocolate_bar:'
      },
      {
        emoji: '🍬',
        text: ':candy:'
      },
      {
        emoji: '🍭',
        text: ':lollipop:'
      },
      {
        emoji: '🍯',
        text: ':honey_pot:'
      },
      {
        emoji: '🍎',
        text: ':apple:'
      },
      {
        emoji: '🍏',
        text: ':green_apple:'
      },
      {
        emoji: '🍊',
        text: ':tangerine:'
      },
      {
        emoji: '🍋',
        text: ':lemon:'
      },
      {
        emoji: '🍒',
        text: ':cherries:'
      },
      {
        emoji: '🍇',
        text: ':grapes:'
      },
      {
        emoji: '🍉',
        text: ':watermelon:'
      },
      {
        emoji: '🍓',
        text: ':strawberry:'
      },
      {
        emoji: '🍑',
        text: ':peach:'
      },
      {
        emoji: '🍈',
        text: ':melon:'
      },
      {
        emoji: '🍌',
        text: ':banana:'
      },
      {
        emoji: '🍐',
        text: ':pear:'
      },
      {
        emoji: '🍍',
        text: ':pineapple:'
      },
      {
        emoji: '🍠',
        text: ':sweet_potato:'
      },
      {
        emoji: '🍆',
        text: ':eggplant:'
      },
      {
        emoji: '🍅',
        text: ':tomato:'
      },
      {
        emoji: '🌽',
        text: ':corn:'
      },
      {
        emoji: '🏠',
        text: ':house:'
      },
      {
        emoji: '🏡',
        text: ':house_with_garden:'
      },
      {
        emoji: '🏫',
        text: ':school:'
      },
      {
        emoji: '🏢',
        text: ':office:'
      },
      {
        emoji: '🏣',
        text: ':post_office:'
      },
      {
        emoji: '🏥',
        text: ':hospital:'
      },
      {
        emoji: '🏢',
        text: ':office:'
      },
      {
        emoji: '🏣',
        text: ':post_office:'
      },
      {
        emoji: '🏥',
        text: ':hospital:'
      },
      {
        emoji: '🏦',
        text: ':bank:'
      },
      {
        emoji: '🏪',
        text: ':convenience_store:'
      },
      {
        emoji: '🏩',
        text: ':love_hotel:'
      },
      {
        emoji: '🏨',
        text: ':hotel:'
      },
      {
        emoji: '💒',
        text: ':wedding:'
      },
      {
        emoji: '⛪️',
        text: ':church:'
      },
      {
        emoji: '🏬',
        text: ':department_store:'
      },
      {
        emoji: '🏤',
        text: ':european_post_office:'
      },
      {
        emoji: '🌇',
        text: ':city_sunrise:'
      },
      {
        emoji: '🌆',
        text: ':city_sunset:'
      },
      {
        emoji: '🏯',
        text: ':japanese_castle:'
      },
      {
        emoji: '🏰',
        text: ':european_castle:'
      },
      {
        emoji: '⛺️',
        text: ':tent:'
      },
      {
        emoji: '🏭',
        text: ':factory:'
      },
      {
        emoji: '🗼',
        text: ':tokyo_tower:'
      },
      {
        emoji: '🗾',
        text: ':japan:'
      },
      {
        emoji: '🗻',
        text: ':mount_fuji:'
      },
      {
        emoji: '🌄',
        text: ':sunrise_over_mountains:'
      },
      {
        emoji: '🌅',
        text: ':sunrise:'
      },
      {
        emoji: '🌠',
        text: ':stars:'
      },
      {
        emoji: '🗽',
        text: ':statue_of_liberty:'
      },
      {
        emoji: '🌉',
        text: ':bridge_at_night:'
      },
      {
        emoji: '🎠',
        text: ':carousel_horse:'
      },
      {
        emoji: '🌈',
        text: ':rainbow:'
      },
      {
        emoji: '🎡',
        text: ':ferris_wheel:'
      },
      {
        emoji: '⛲️',
        text: ':fountain:'
      },
      {
        emoji: '🎢',
        text: ':roller_coaster:'
      },
      {
        emoji: '🚢',
        text: ':ship:'
      },
      {
        emoji: '🚤',
        text: ':speedboat:'
      },
      {
        emoji: '⛵️',
        text: ':boat: | :sailboat:'
      },
      {
        emoji: '🚣',
        text: ':rowboat:'
      },
      {
        emoji: '⚓️',
        text: ':anchor:'
      },
      {
        emoji: '🚀',
        text: ':rocket:'
      },
      {
        emoji: '✈️',
        text: ':airplane:'
      },
      {
        emoji: '🚁',
        text: ':helicopter:'
      },
      {
        emoji: '🚀',
        text: ':rocket:'
      },
      {
        emoji: '✈️',
        text: ':airplane:'
      },
      {
        emoji: '🚁',
        text: ':helicopter:'
      },
      {
        emoji: '🚂',
        text: ':steam_locomotive:'
      },
      {
        emoji: '🚊',
        text: ':tram:'
      },
      {
        emoji: '🚞',
        text: ':mountain_railway:'
      },
      {
        emoji: '🚲',
        text: ':bike:'
      },
      {
        emoji: '🚡',
        text: ':aerial_tramway:'
      },
      {
        emoji: '🚟',
        text: ':suspension_railway:'
      },
      {
        emoji: '🚠',
        text: ':mountain_cableway:'
      },
      {
        emoji: '🚜',
        text: ':tractor:'
      },
      {
        emoji: '🚙',
        text: ':blue_car:'
      },
      {
        emoji: '🚘',
        text: ':oncoming_automobile:'
      },
      {
        emoji: '🚗',
        text: ':car: | :red_car:'
      },
      {
        emoji: '🚕',
        text: ':taxi:'
      },
      {
        emoji: '🚖',
        text: ':oncoming_taxi:'
      },
      {
        emoji: '🚛',
        text: ':articulated_lorry:'
      },
      {
        emoji: '🚌',
        text: ':bus:'
      },
      {
        emoji: '🚍',
        text: ':oncoming_bus:'
      },
      {
        emoji: '🚨',
        text: ':rotating_light:'
      },
      {
        emoji: '🚓',
        text: ':police_car:'
      },
      {
        emoji: '🚔',
        text: ':oncoming_police_car:'
      },
      {
        emoji: '🚒',
        text: ':fire_engine:'
      },
      {
        emoji: '🚑',
        text: ':ambulance:'
      },
      {
        emoji: '🚐',
        text: ':minibus:'
      },
      {
        emoji: '🚚',
        text: ':truck:'
      },
      {
        emoji: '🚋',
        text: ':train:'
      },
      {
        emoji: '🚉',
        text: ':station:'
      },
      {
        emoji: '🚆',
        text: ':train2:'
      },
      {
        emoji: '🚅',
        text: ':bullettrain_front:'
      },
      {
        emoji: '🚄',
        text: ':bullettrain_side:'
      },
      {
        emoji: '🚈',
        text: ':light_rail:'
      },
      {
        emoji: '🚝',
        text: ':monorail:'
      },
      {
        emoji: '🚃',
        text: ':railway_car:'
      },
      {
        emoji: '🚎',
        text: ':trolleybus:'
      },
      {
        emoji: '🎫',
        text: ':ticket:'
      },
      {
        emoji: '⛽️',
        text: ':fuelpump:'
      },
      {
        emoji: '🚦',
        text: ':vertical_traffic_light:'
      },
      {
        emoji: '🚥',
        text: ':traffic_light:'
      },
      {
        emoji: '⚠️',
        text: ':warning:'
      },
      {
        emoji: '🚧',
        text: ':construction:'
      },
      {
        emoji: '🔰',
        text: ':beginner:'
      },
      {
        emoji: '🏧',
        text: ':atm:'
      },
      {
        emoji: '🎰',
        text: ':slot_machine:'
      },
      {
        emoji: '🚏',
        text: ':busstop:'
      },
      {
        emoji: '💈',
        text: ':barber:'
      },
      {
        emoji: '♨️',
        text: ':hotsprings:'
      },
      {
        emoji: '🏁',
        text: ':busstop:'
      },
      {
        emoji: '🎌',
        text: ':crossed_flags:'
      },
      {
        emoji: '🏮',
        text: ':izakaya_lantern:'
      },
      {
        emoji: '🗿',
        text: ':moyai:'
      },
      {
        emoji: '🎪',
        text: ':circus_tent:'
      },
      {
        emoji: '🎭',
        text: ':performing_arts:'
      },
      {
        emoji: '📍',
        text: ':round_pushpin:'
      },
      {
        emoji: '🚩',
        text: ':triangular_flag_on_post:'
      },
      {
        emoji: '1️⃣',
        text: ':one:'
      },
      {
        emoji: '2️⃣',
        text: ':two:'
      },
      {
        emoji: '3️⃣',
        text: ':three:'
      },
      {
        emoji: '4️⃣',
        text: ':four:'
      },
      {
        emoji: '5️⃣',
        text: ':five:'
      },
      {
        emoji: '6️⃣',
        text: ':six:'
      },
      {
        emoji: '7️⃣',
        text: ':seven:'
      },
      {
        emoji: '8️⃣',
        text: ':eight:'
      },
      {
        emoji: '9️⃣',
        text: ':nine:'
      },
      {
        emoji: '🔟',
        text: ':keycap_ten:'
      },
      {
        emoji: '🔢',
        text: ':1234:'
      },
      {
        emoji: '0️⃣',
        text: ':zero:'
      },
      {
        emoji: '#️⃣',
        text: ':hash:'
      },
      {
        emoji: '🔣',
        text: ':symbols:'
      },
      {
        emoji: '◀️',
        text: ':arrow_backward:'
      },
      {
        emoji: '⬇️',
        text: ':arrow_down:'
      },
      {
        emoji: '▶️',
        text: ':arrow_forward:'
      },
      {
        emoji: '⬅️',
        text: ':arrow_left:'
      },
      {
        emoji: '🔠',
        text: ':capital_abcd:'
      },
      {
        emoji: '🔡',
        text: ':abcd:'
      },
      {
        emoji: '🔤',
        text: ':abc:'
      },
      {
        emoji: '↙️',
        text: ':arrow_lower_left:'
      },
      {
        emoji: '↘️',
        text: ':arrow_lower_right:'
      },
      {
        emoji: '➡️',
        text: ':arrow_right:'
      },
      {
        emoji: '⬆️',
        text: ':arrow_up:'
      },
      {
        emoji: '↖️',
        text: ':arrow_upper_left:'
      },
      {
        emoji: '↗️',
        text: ':arrow_upper_right:'
      },
      {
        emoji: '⏬',
        text: ':arrow_double_down:'
      },
      {
        emoji: '⏫',
        text: ':arrow_double_up:'
      },
      {
        emoji: '🔽',
        text: ':arrow_down_small:'
      },
      {
        emoji: '⤵️',
        text: ':arrow_heading_down:'
      },
      {
        emoji: '⤴️',
        text: ':arrow_heading_up:'
      },
      {
        emoji: '↩️',
        text: ':leftwards_arrow_with_hook:'
      },
      {
        emoji: '↪️',
        text: ':arrow_right_hook:'
      },
      {
        emoji: '↔️',
        text: ':left_right_arrow:'
      },
      {
        emoji: '↕️',
        text: ':arrow_up_down:'
      },
      {
        emoji: '🔼',
        text: ':arrow_up_small:'
      },
      {
        emoji: '🔃',
        text: ':arrows_clockwise:'
      },
      {
        emoji: '🔄',
        text: ':arrows_counterclockwise:'
      },
      {
        emoji: '⏪',
        text: ':rewind:'
      },
      {
        emoji: '⏩',
        text: ':fast_forward:'
      },
      {
        emoji: 'ℹ️',
        text: ':information_source:'
      },
      {
        emoji: '🆗',
        text: ':ok:'
      },
      {
        emoji: '🔀',
        text: ':twisted_rightwards_arrows:'
      },
      {
        emoji: '🔁',
        text: ':repeat:'
      },
      {
        emoji: '🔂',
        text: ':repeat_one:'
      },
      {
        emoji: '🆕',
        text: ':new:'
      },
      {
        emoji: '🔝',
        text: ':top:'
      },
      {
        emoji: '🆙',
        text: ':up:'
      },
      {
        emoji: '🆒',
        text: ':cool:'
      },
      {
        emoji: '🆓',
        text: ':free:'
      },
      {
        emoji: '🆖',
        text: ':ng:'
      },
      {
        emoji: '🎦',
        text: ':cinema:'
      },
      {
        emoji: '🈁',
        text: ':koko:'
      },
      {
        emoji: '📶',
        text: ':signal_strength:'
      },
      {
        emoji: '🈹',
        text: ':u5272:'
      },
      {
        emoji: '🈴',
        text: ':u5408:'
      },
      {
        emoji: '🈺',
        text: ':u55b6:'
      },
      {
        emoji: '🈯️',
        text: ':u6307:'
      },
      {
        emoji: '🈷️',
        text: ':u6708:'
      },
      {
        emoji: '🈶',
        text: ':u6709:'
      },
      {
        emoji: '🈵',
        text: ':u6e80:'
      },
      {
        emoji: '🈚️',
        text: ':u7121:'
      },
      {
        emoji: '🈸',
        text: ':u7533:'
      },
      {
        emoji: '🈳',
        text: ':u7a7a:'
      },
      {
        emoji: '🈲',
        text: ':u7981:'
      },
      {
        emoji: '🈂️',
        text: ':sa:'
      },
      {
        emoji: '🚻',
        text: ':restroom:'
      },
      {
        emoji: '🚹',
        text: ':mens:'
      },
      {
        emoji: '🚺',
        text: ':womens:'
      },
      {
        emoji: '🚼',
        text: ':baby_symbol:'
      },
      {
        emoji: '🚭',
        text: ':no_smoking:'
      },
      {
        emoji: '🅿️',
        text: ':parking:'
      },
      {
        emoji: '♿️',
        text: ':wheelchair:'
      },
      {
        emoji: '🚇',
        text: ':metro:'
      },
      {
        emoji: '🛄',
        text: ':baggage_claim:'
      },
      {
        emoji: '🉑',
        text: ':accept:'
      },
      {
        emoji: '🚾',
        text: ':wc:'
      },
      {
        emoji: '🚰',
        text: ':potable_water:'
      },
      {
        emoji: '🚮',
        text: ':put_litter_in_its_place:'
      },
      {
        emoji: '㊙️',
        text: ':secret:'
      },
      {
        emoji: '㊗️',
        text: ':congratulations:'
      },
      {
        emoji: 'Ⓜ️',
        text: ':m:'
      },
      {
        emoji: '🛂',
        text: ':passport_control:'
      },
      {
        emoji: '🛅',
        text: ':left_luggage:'
      },
      {
        emoji: '🛃',
        text: ':customs:'
      },
      {
        emoji: '🉐',
        text: ':ideograph_advantage:'
      },
      {
        emoji: '🆑',
        text: ':cl:'
      },
      {
        emoji: '🆘',
        text: ':sos:'
      },
      {
        emoji: '🆔',
        text: ':id:'
      },
      {
        emoji: '🚫',
        text: ':no_entry_sign:'
      },
      {
        emoji: '🔞',
        text: ':underage:'
      },
      {
        emoji: '📵',
        text: ':no_mobile_phones:'
      },
      {
        emoji: '🚯',
        text: ':do_not_litter:'
      },
      {
        emoji: '🚱',
        text: ':non-potable_water:'
      },
      {
        emoji: '🚳',
        text: ':no_bicycles:'
      },
      {
        emoji: '🚷',
        text: ':no_pedestrians:'
      },
      {
        emoji: '🚸',
        text: ':children_crossing:'
      },
      {
        emoji: '⛔️',
        text: ':no_entry:'
      },
      {
        emoji: '✳️',
        text: ':eight_spoked_asterisk:'
      },
      {
        emoji: '✴️',
        text: ':eight_pointed_black_star:'
      },
      {
        emoji: '💟',
        text: ':heart_decoration:'
      },
      {
        emoji: '🆚',
        text: ':vs:'
      },
      {
        emoji: '📳',
        text: ':vibration_mode:'
      },
      {
        emoji: '📴',
        text: ':mobile_phone_off:'
      },
      {
        emoji: '💹',
        text: ':chart:'
      },
      {
        emoji: '💱',
        text: ':currency_exchange:'
      },
      {
        emoji: '♈️',
        text: ':aries:'
      },
      {
        emoji: '♉️',
        text: ':taurus:'
      },
      {
        emoji: '♊️',
        text: ':gemini:'
      },
      {
        emoji: '♋️',
        text: ':cancer:'
      },
      {
        emoji: '♌️',
        text: ':leo:'
      },
      {
        emoji: '♍️',
        text: ':virgo:'
      },
      {
        emoji: '♎️',
        text: ':libra:'
      },
      {
        emoji: '♏️',
        text: ':scorpius:'
      },
      {
        emoji: '♐️',
        text: ':sagittarius:'
      },
      {
        emoji: '♑️',
        text: ':capricorn:'
      },
      {
        emoji: '♒️',
        text: ':aquarius:'
      },
      {
        emoji: '♓️',
        text: ':pisces:'
      },
      {
        emoji: '⛎',
        text: ':ophiuchus:'
      },
      {
        emoji: '🔯',
        text: ':six_pointed_star:'
      },
      {
        emoji: '❎',
        text: ':negative_squared_cross_mark:'
      },
      {
        emoji: '🅰️',
        text: ':a:'
      },
      {
        emoji: '🅱️',
        text: ':b:'
      },
      {
        emoji: '🆎',
        text: ':ab:'
      },
      {
        emoji: '🅾️',
        text: ':o2:'
      },
      {
        emoji: '💠',
        text: ':diamond_shape_with_a_dot_inside:'
      },
      {
        emoji: '♻️',
        text: ':recycle:'
      },
      {
        emoji: '🔚',
        text: ':end:'
      },
      {
        emoji: '🔛',
        text: ':on:'
      },
      {
        emoji: '🔜',
        text: ':soon:'
      },
      {
        emoji: '🕐',
        text: ':clock1:'
      },
      {
        emoji: '🕜',
        text: ':clock130:'
      },
      {
        emoji: '🕙',
        text: ':clock10:'
      },
      {
        emoji: '🕥',
        text: ':clock1030:'
      },
      {
        emoji: '🕚',
        text: ':clock11:'
      },
      {
        emoji: '🕦',
        text: ':clock1130:'
      },
      {
        emoji: '🕛',
        text: ':clock12:'
      },
      {
        emoji: '🕧',
        text: ':clock1230:'
      },
      {
        emoji: '🕑',
        text: ':clock2:'
      },
      {
        emoji: '🕝',
        text: ':clock230:'
      },
      {
        emoji: '🕒',
        text: ':clock3:'
      },
      {
        emoji: '🕞',
        text: ':clock330:'
      },
      {
        emoji: '🕓',
        text: ':clock4:'
      },
      {
        emoji: '🕟',
        text: ':clock430:'
      },
      {
        emoji: '🕔',
        text: ':clock5:'
      },
      {
        emoji: '🕠',
        text: ':clock530:'
      },
      {
        emoji: '🕕',
        text: ':clock6:'
      },
      {
        emoji: '🕡',
        text: ':clock630:'
      },
      {
        emoji: '🕖',
        text: ':clock7:'
      },
      {
        emoji: '🕢',
        text: ':clock730:'
      },
      {
        emoji: '🕗',
        text: ':clock8:'
      },
      {
        emoji: '🕣',
        text: ':clock830:'
      },
      {
        emoji: '🕘',
        text: ':clock9:'
      },
      {
        emoji: '🕤',
        text: ':clock930:'
      },
      {
        emoji: '💲',
        text: ':heavy_dollar_sign:'
      },
      {
        emoji: '©️',
        text: ':copyright:'
      },
      {
        emoji: '®️',
        text: ':registered:'
      },
      {
        emoji: '™️',
        text: ':tm:'
      },
      {
        emoji: '❌',
        text: ':x:'
      },
      {
        emoji: '❗️',
        text: ':heavy_exclamation_mark:'
      },
      {
        emoji: '‼️',
        text: ':bangbang:'
      },
      {
        emoji: '⁉️',
        text: ':interrobang:'
      },
      {
        emoji: '⭕️',
        text: ':o:'
      },
      {
        emoji: '✖️',
        text: ':heavy_multiplication_x:'
      },
      {
        emoji: '➕',
        text: ':heavy_plus_sign:'
      },
      {
        emoji: '➖',
        text: ':heavy_minus_sign:'
      },
      {
        emoji: '➗',
        text: ':heavy_division_sign:'
      },
      {
        emoji: '💮',
        text: ':white_flower:'
      },
      {
        emoji: '💯',
        text: ':100:'
      },
      {
        emoji: '✔️',
        text: ':heavy_check_mark:'
      },
      {
        emoji: '☑️',
        text: ':ballot_box_with_check:'
      },
      {
        emoji: '🔘',
        text: ':radio_button:'
      },
      {
        emoji: '🔗',
        text: ':link:'
      },
      {
        emoji: '➰',
        text: ':curly_loop:'
      },
      {
        emoji: '〰️',
        text: ':wavy_dash:'
      },
      {
        emoji: '〽️',
        text: ':part_alternation_mark:'
      },
      {
        emoji: '🔱',
        text: ':trident:'
      },
      {
        emoji: '✅',
        text: ':white_check_mark:'
      },
      {
        emoji: '🔲',
        text: ':black_square_button:'
      },
      {
        emoji: '🔳',
        text: ':white_square_button:'
      },
      {
        emoji: '⚫️',
        text: ':black_circle:'
      },
      {
        emoji: '⚪️',
        text: ':white_circle:'
      },
      {
        emoji: '🔴',
        text: ':red_circle:'
      },
      {
        emoji: '🔵',
        text: ':large_blue_circle:'
      },
      {
        emoji: '🔷',
        text: ':large_blue_diamond:'
      },
      {
        emoji: '🔶',
        text: ':large_orange_diamond:'
      },
      {
        emoji: '🔹',
        text: ':small_blue_diamond:'
      },
      {
        emoji: '🔸',
        text: ':small_orange_diamond:'
      },
      {
        emoji: '🔺',
        text: ':small_red_triangle:'
      },
      {
        emoji: '🔻',
        text: ':small_red_triangle_down:'
      }

    ]
  }),
  methods: {
    copy (text) {
      // Crea un campo de texto "oculto"
      var aux = document.createElement('input')
      aux.classList.add('no-input')
      // Asigna el contenido del elemento especificado al valor del campo
      aux.setAttribute('value', text)

      // Añade el campo a la página
      document.body.appendChild(aux)

      // Selecciona el contenido del campo
      aux.select()

      // Copia el texto seleccionado
      document.execCommand('copy')

      // Elimina el campo de la página
      document.body.removeChild(aux)

      this.$vs.notify({
        title: 'Emoji copied ',
        text: '( ' + text + ' )',
        color: 'success',
        icon: 'check_circle'
      })
    }
  }
}
</script>
<style lang="stylus">
@require '../../config'
// .no-input
  // position fixed
  // z-index -1
  // opacity 0
  // visibility hidden
.list-emojis
  padding 10px
  ul
    width 100%
    max-width 900px
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
        box-shadow 0px 0px 0px -2px alpha($morado, .6)
        &:hover
          box-shadow 0px 5px 10px -2px alpha($morado, .6)
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
