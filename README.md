# Vue Use Measure

![NPM License](https://img.shields.io/npm/l/vue-use-measure)

**Lightweight** [Vue](https://vuejs.org/) composable to measure [DOMRect](https://developer.mozilla.org/en-US/docs/Web/API/DOMRect)  boundaries relative to parent component **< 5k** 😎 <br>

![use-measure](https://github-production-user-asset-6210df.s3.amazonaws.com/91323932/271012259-6e026774-5e3c-46c9-b021-707bd83a6503.gif)

## Usage

`npm i vue-use-measure`

```
<script setup>
import {useMeasure} from "vue-use-measure";

const element = ref(null);

onMounted(() => {
  let elementRelativeBoundaries = useMeasure(element.value);
  //todo elementRelativeBoundaries.top, elementRelativeBoundaries.left 
});



</script>


<template>
<div ref="element"/>
</template
```


## Contact
Feel free to ping me 💫
<br>
connect@giladshohat.com

[giladshohat.com](https://giladshohat.com)
