<template>
  <div class="cart-complete-wrap">
    <div class="cart-complete">
      <h3><i class="sui-icon icon-pc-right"></i>商品已成功加入購物車！</h3>
      <div class="goods">
        <div class="left-good">
          <div class="left-pic">
            <router-link :to="`/detail/${skuInfo.id}`">
              <img :src="skuInfo.skuDefaultImg">
            </router-link>
          </div>
          <div class="right-info">
            <p class="title">{{skuInfo.skuDesc}}</p>
            <!-- 以下寫法是錯的.並沒有相對應點選的商品屬性值 -->
            <!-- <p class="attr">顏色：{{skuInfo.skuSaleAttrValueList[0].saleAttrValueName}}</p>
            <p class="attr">版本：{{skuInfo.skuSaleAttrValueList[1].saleAttrValueName}}</p> -->
            <p class="attr">數量：{{$route.query.skuNum}}</p>
          </div>
        </div>
        <div class="right-gocart">
          <router-link :to="`/detail/${skuInfo.id}`">查看商品詳情</router-link>
          <a @click="goShopCart" >去購物車結算 > </a>

        </div>
      </div>
    </div>
  </div>
</template>

<script>
  export default {
    name: 'AddCartSuccess',
    computed:{
      //取得會話存儲的數據
      skuInfo(){
        return JSON.parse(sessionStorage.getItem('SKUNUM'))
      }
    },  
    methods:{
      goShopCart(){
        this.$router.push('/shopcart')
      }
    }
  }
</script>

<style lang="less" scoped>
  .cart-complete-wrap {
    background-color: #f4f4f4;

    .cart-complete {
      width: 1200px;
      margin: 0 auto;

      h3 {
        font-weight: 400;
        font-size: 16px;
        color: #6aaf04;
        padding-top: 15px;
        padding-bottom: 15px;
        margin: 0;

        .icon-pc-right {
          background-color: #fff;
          border: 2px solid #6aaf04;
          padding: 3px;
          margin-right: 8px;
          border-radius: 15px;
        }
      }

      .goods {
        overflow: hidden;
        padding: 10px 0;

        .left-good {
          float: left;

          .left-pic {
            border: 1px solid #dfdfdf;
            width: 60px;
            float: left;
            img {
              width: 60px;
              height: 60px;
            }
          }

          .right-info {
            color: #444;
            float: left;
            margin-left: 10px;

            .title {
              width: 100%;
              line-height: 28px;
              overflow: hidden;
              text-overflow: ellipsis;
              white-space: nowrap;
              font-size: 14px;
            }

            .attr {
              color: #aaa;
            }
          }
        }

        .right-gocart {
          float: right;

          a {
            padding: 7px 36px;
            font-size: 15px;
            line-height: 22px;
            color: #333;
            background-color: #eee;
            text-decoration: none;
            box-sizing: border-box;
            border: 1px solid #e1e1e1;
          }

          a:hover {
            background-color: #f7f7f7;
            border: 1px solid #eaeaea;
          }

          a:active {
            background-color: #e1e1e1;
            border: 1px solid #d5d5d5;
          }

          .btn-danger {
            background-color: #e1251b;
            color: #fff;
          }

          .btn-danger:hover {
            background-color: #e1251b;
          }
        }

      }
    }
  }
</style>

