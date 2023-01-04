<template>
  <div>
    <Header />
    <div>
      <transition name="router-transition">
        <NuxtPage />
      </transition>
    </div>
  </div>
</template>

<style>
/* gridlex */
[class*='grid-'] , [class^='grid'] {
  margin: 0;
}
[class*='col-'] , [class^='col'] {
  padding: 0;
}
html {
  -ms-text-size-adjust: 100%;
  -moz-osx-font-smoothing: grayscale;
  -webkit-font-smoothing: antialiased;
  -webkit-text-size-adjust: 100%;
  box-sizing: border-box;
  color: #939597;
  font-family: 'Noto Sans JP', sans-serif;
  font-size: 16px;
  font-style: normal;
  font-weight: 500;
  letter-spacing: 1px;
  margin: 0;
  word-spacing: 1px;
}
body {
    font-family: 'DM Sans',YakuHanJP_Narrow,'Yu Gothic Medium','Yu Gothic',YuGothic,'Hiragino Sans','Hiragino Kaku Gothic ProN','Noto Sans JP',Meiryo,sans-serif;
    font-size: 1rem;
    font-weight: 500;
    line-height: 1.6;
    position: relative;
    display: flex;
    overflow-x: hidden;
    flex-direction: column;
    letter-spacing: .02em;
    color: #17083e;
    background-color: #fff;
    margin: 0;
}
</style>