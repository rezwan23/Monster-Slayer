new Vue({
  el : '#app',
  data:{
    myWidth: 100,
    monsterWidth: 100,
    myDamage:0,
    monsterDamage:0,
    show: false,
    attackLogs:[],
    Player1Name : '',
    Player2Name : '',
    pns : false,
  },
  computed:{
    
  },
  methods:{
    setName: function() {
      if(this.Player1Name != '' && this.Player2Name != ''){
        this.pns = true
      }
    },
    start: function(){
      if(this.show == false)
        this.show = true;
      else{
        this.myWidth = 100;
        this.monsterWidth = 100;
        this.emptyArray(this.attackLogs);
      }
    },
    attack: function(){
      this.myDamage = Math.floor(this.getRandomAttribute(15, 0));
      this.myWidth-=this.myDamage;
      this.attackLogs.push(this.Player1Name + ' hurted '+this.myDamage+'points');
      this.monsterDamage = Math.floor(this.getRandomAttribute(15, 0));
      this.monsterWidth-=this.monsterDamage;
      this.attackLogs.push(this.Player2Name + ' is hurted '+this.monsterDamage+'points');
      if(this.myWidth<=0){
        alert('You Loose!');
        this.start();
      }if(this.monsterWidth<=0){
        alert('You won! Congrats!');
        this.start();
      }
    },
    giveUp:function(){
      alert('You loose!');
      this.myWidth = 100;
      this.monsterWidth = 100;
      this.show = false;
      this.emptyArray(this.attackLogs);
    },
    getRandomAttribute:function(max, min){
      return Math.floor(Math.random()*(max-min)+min);
    },
    spcAttack:function(){
      this.myDamage = Math.floor(this.getRandomAttribute(24, 0));
      this.myWidth-=this.myDamage;
      this.attackLogs.push(this.Player1Name + ' hurted '+this.myDamage+'points');
      this.monsterDamage = Math.floor(this.getRandomAttribute(30, 0));
      this.monsterWidth-=this.monsterDamage;
      this.attackLogs.push(this.Player2Name + ' is hurted '+this.monsterDamage+'points');
      if(this.myWidth<=0){
        alert('You Loose!');
        this.start();
      }if(this.monsterWidth<=0){
        alert('You won! Congrats!');
        this.start();
      }
    },
    emptyArray: function(arr){
      var length = arr.length;
      for(var i = 0; i<length ;i++){
        Vue.set(arr, i, '');
      }
    },
    heal:function(){
      this.myWidth+=Math.floor(this.getRandomAttribute(24, 0));
      if(this.myWidth >= 100){
        this.myWidth = 100;
      }
      this.attackLogs.push('Your health healed to '+this.myWidth+' points');
      this.monsterWidth+=Math.floor(this.getRandomAttribute(24, 0));
      if(this.monsterWidth >= 100){
        this.monsterWidth = 100;
      }
      this.attackLogs.push(this.Player2Name + ' health healed to '+this.myWidth+' points');
    }
  }
});
