//about Alpine.js

/*x-on: は @
@click="someMethod(...)" で使います
x-bind: は :
<div :class="closed ? 'hidden' : ''"> のように css classをつけたり、
 <input type="text" :placeholder="'入力してください'"> のように html の属性に設定したりします。*/

 <div x-data="{ count: 0 }">
    <button x-on:click="count++">カウンタが増えるボタン</button>
    <span x-text="count"></span> 
</div>

