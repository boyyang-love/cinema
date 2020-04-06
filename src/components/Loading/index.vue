<template>
  <div class="loading">
    <span></span>
    <span></span>
    <span></span>
    <span></span>
    <span></span>
  </div>
</template>

<script>
export default {
    name:'Loading'
};
</script>

<style scoped>
.loading {
  width: 150px;
  height: 15px;
  margin: 0 auto;
  margin-top: 100px;
  text-align: center;
  position: absolute;
  top: 200px;
  left: 100px;
}
.loading span {
  display: inline-block;
  width: 15px;
  height: 100%;
  margin-right: 5px;
  background: lightgreen;
  animation: load 1.04s ease infinite;
}
.loading span:last-child {
  margin-right: 0px;
}
@keyframes load {
  0% {
    opacity: 1;
  }
  100% {
    opacity: 0;
  }
}
.loading span:nth-child(1) {
  animation-delay: 0.13s;
}
.loading span:nth-child(2) {
  animation-delay: 0.26s;
}
.loading span:nth-child(3) {
  animation-delay: 0.39s;
}
.loading span:nth-child(4) {
  animation-delay: 0.52s;
}
.loading span:nth-child(5) {
  animation-delay: 0.65s;
}

.loading {
  width: 150px;
  height: 15px;
  margin: 0 auto;
  margin-top: 100px;
}
.loading span {
  display: inline-block;
  width: 15px;
  height: 100%;
  margin-right: 5px;
  background: lightgreen;
  transform-origin: right bottom;
  animation: load 1s ease infinite;
}
.loading span:last-child {
  margin-right: 0px;
}
@keyframes load {
  0% {
    opacity: 1;
  }
  100% {
    opacity: 0;
    transform: rotate(90deg);
  }
}
.loading span:nth-child(1) {
  animation-delay: 0.13s;
}
.loading span:nth-child(2) {
  animation-delay: 0.26s;
}
.loading span:nth-child(3) {
  animation-delay: 0.39s;
}
.loading span:nth-child(4) {
  animation-delay: 0.52s;
}
.loading span:nth-child(5) {
  animation-delay: 0.65s;
}
</style>