<template>
  <div class="spaceY8">
    <div>
      <h2>Transition Property</h2>
      * transitionNone	transition-property: none;<br/>
      * transitionAll	transition-property: all;<br/>
      * transitionCommon	transition-property: background-color, border-color, color, fill, stroke, opacity, box-shadow, transform, filter, backdrop-filter;<br/>
      * transitionColors	transition-property: background-color, border-color, color, fill, stroke;<br/>
      * transitionOpacity	transition-property: opacity;<br/>
      * transitionShadow	transition-property: box-shadow;<br/>
      * transitionTransform	transition-property: transform;<br/>
    </div>
    <h2>Example: </h2>
    <div>
      <div>w-300 h-50 bgYellow300 transitionCommon easeInOut duration-500 scale-110--hover translateY-10 bgBlue500--hover</div>
      <div class="w-300 h-50 bgYellow300 transitionCommon easeInOut duration-500 scale-110--hover translateY-10 bgBlue500--hover">hover</div>
    </div>
    <div>
      <div>w-300 h-50 bgYellow300 transitionCommon easeInOut duration-200 scale-110--active translateY-10 bgBlue500--active</div>
      <div class="w-300 h-50 bgYellow300 transitionCommon easeInOut duration-200 scale-110--active translateY-10 bgBlue500--active">active</div>
    </div>
    <div>
      <div>w-300 h-50 bgYellow300 transitionAll borderBlue500--focus ringBlue400-2--T60--focus easeInOut duration-200 w-400--focus</div>
      <input class="w-300 h-50 bgYellow300 transitionAll borderBlue500--focus ringBlue400-2--T60--focus easeInOut duration-200 w-400--focus" value="focus"/>
    </div>
  </div>
</template>