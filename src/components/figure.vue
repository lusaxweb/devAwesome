<template>
  <div :class="{'isfooterx': footerx}" class="con-figure">
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 2796.431 2125.188">
      <g id="Group_185" data-name="Group 185" transform="translate(629.061 -193.438)">
        <path id="Path_59" data-name="Path 59" class="cls-1" d="M165.225,200.341c51.961-147.218,415.1-522.025,756.364-216.883S306.393-2.169,507.58,340.3,715.459,786.71,387.828,724.988,113.264,347.564,165.225,200.341Z" transform="translate(1734.188 267.425) rotate(73)"/>
        <path id="Path_60" data-name="Path 60" class="cls-2" d="M162.091,199.064C238.765,67.345,672.054-153.5,785.138-113.7S546.218-33.143,747.4,309.327s8.378,619.5-319.253,557.781S85.416,330.783,162.091,199.064Z" transform="matrix(0.342, 0.94, -0.94, 0.342, 266.621, 117.601)"/>
        <path id="Path_48" data-name="Path 48" class="cls-3" d="M286.227,347.059C376.241,92.026,661.441-51.721,857.341,17.218s-316.63,207.563,21.961,572.3-43.5,865.429-611.067,758.505S196.212,602.1,286.227,347.059Z" transform="translate(744.515 1633.352) rotate(-102)"/>
        <path id="Path_49" data-name="Path 49" class="cls-4" d="M783.246,4987.01c888.833,881.781,728.252-244.539,1410.847,317.44S2168.832,7069.472,1180.832,6514.8-105.587,4105.229,783.246,4987.01Z" transform="translate(-297.499 -4409.471)"/>
        <path id="Path_57" data-name="Path 57" class="cls-5" d="M165.225,200.341C217.186,53.122,649.327-159.1,762.411-119.3S306.393-2.169,507.58,340.3,482.471,839.872,154.84,778.15,113.264,347.564,165.225,200.341Z" transform="matrix(0.391, 0.921, -0.921, 0.391, 299.286, 1293.811)"/>
        <path id="Path_50" data-name="Path 50" class="cls-3" d="M140.912,4989.85c-403.519,852.6,429.635,913.99,597.787,705.3,110.812-137.527,128.395-246.056,244.152-240.692,84.667,7.667,93.333,37.061,387.159,240.692,1066.842,843.308,1369.555-1459.99,424.858-887.168-10.683,6.478-22.4,13.821-34.356,21.558C1146.12,5227.086,891,5180.845,755.35,4744.438s-414.438-103.073-414.438-103.073S257.752,4742.979,140.912,4989.85Z" transform="translate(-660.852 -3697.457)"/>
      </g>
    </svg>
  </div>
</template>
<script>
export default {
  props: {
    footerx: {
      default: false,
      type: Boolean
    }
  }
}
</script>
<style lang="stylus">
.con-figure
  position: absolute;
  top: 200px;
  left: -35%;
  width: 150%;
  height: auto;
  z-index: 100;

.isfooterx
  top: auto !important;
  bottom: 0px !important;
  /* transform: translate(0, 65%); */

.cls-1
  fill: #ff3a4e;

.cls-2
  fill: #ffaf24;

.cls-3
  fill: #28243b;

.cls-4
  fill: #2c2741;

.cls-5
  fill: #603aff;

@media only screen and (max-width: 950px)
  .con-figure
    display none
</style>
