<template>
  <div class="order-main">
    <div class="container">
      <div class="order-body">
<<<<<<< HEAD
=======
<<<<<<< HEAD
>>>>>>> b3ef431 (no message)
        <!--左侧列表-->
        <div class="order-left">
          <dl>
            <dt><i>·</i> 订单中心</dt>
            <dd>
              <router-link to="/center/myorder">我的订单</router-link>
            </dd>
            <dd>
              <router-link to="/center/grouporder">团购订单</router-link>
            </dd>
            <dd>本地生活订单</dd>
            <dd>我的预售</dd>
            <dd>评价晒单</dd>
            <dd>取消订单记录</dd>
          </dl>
          <dl>
            <dt><i>·</i> 关注中心</dt>
            <dd>关注的商品</dd>
            <dd>关注的店铺</dd>
            <dd>关注的专辑</dd>
            <dd>关注的品牌</dd>
            <dd>关注的活动</dd>
            <dd>浏览历史</dd>
          </dl>
          <dl>
            <dt><i>·</i> 特色业务</dt>
            <dd>我的营业厅</dd>
            <dd>京东通信</dd>
            <dd>定期送</dd>
            <dd>京东代下单</dd>
            <dd>我的回收单</dd>
            <dd>节能补贴</dd>
            <dd>医药服务</dd>
            <dd>流量加油站</dd>
            <dd>黄金托管</dd>
          </dl>
          <dl>
            <dt><i>·</i> 客户服务</dt>
            <dd>返修退换货</dd>
            <dd>价格保护</dd>
            <dd>意见建议</dd>
            <dd>购买咨询</dd>
            <dd>交易纠纷</dd>
            <dd>我的发票</dd>
          </dl>
          <dl>
            <dt><i>·</i> 设置</dt>
            <dd>个人信息</dd>
            <dd>收货地址</dd>
          </dl>
        </div>
        <!-- 右侧内容 -->
        <!-- 路由组件出口的位置 -->
<<<<<<< HEAD
=======
=======
        <!--左側列表-->
        <div class="order-left">
          <dl>
            <dt><i>·</i> 訂單中心</dt>
            <dd>
              <router-link to="/center/myorder">我的訂單</router-link>
            </dd>
            <dd>
              <router-link to="/center/grouporder">團購訂單</router-link>
            </dd>
            <dd>本地生活訂單</dd>
            <dd>我的預售</dd>
            <dd>評價曬單</dd>
            <dd>取消訂單記錄</dd>
          </dl>
          <dl>
            <dt><i>·</i> 關注中心</dt>
            <dd>關注的商品</dd>
            <dd>關注的店鋪</dd>
            <dd>關注的專輯</dd>
            <dd>關注的品牌</dd>
            <dd>關注的活動</dd>
            <dd>流覽歷史</dd>
          </dl>
          <dl>
            <dt><i>·</i> 特色業務</dt>
            <dd>我的營業廳</dd>
            <dd>京東通信</dd>
            <dd>定期送</dd>
            <dd>京東代下單</dd>
            <dd>我的回收單</dd>
            <dd>節能補貼</dd>
            <dd>醫藥服務</dd>
            <dd>流量加油站</dd>
            <dd>黃金託管</dd>
          </dl>
          <dl>
            <dt><i>·</i> 客戶服務</dt>
            <dd>返修退換貨</dd>
            <dd>價格保護</dd>
            <dd>意見建議</dd>
            <dd>購買諮詢</dd>
            <dd>交易糾紛</dd>
            <dd>我的發票</dd>
          </dl>
          <dl>
            <dt><i>·</i> 設置</dt>
            <dd>個人資訊</dd>
            <dd>收貨地址</dd>
          </dl>
        </div>
        <!-- 右側內容 -->
        <!-- 路由組件出口的位置 -->
>>>>>>> 3374661 (no message)
>>>>>>> b3ef431 (no message)
        <router-view></router-view>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "",
};
</script>

<style lang="less">
.order-main {
  .container {
    margin: 0 auto;
    width: 1200px;

    .order-body {
      padding: 10px;
      color: #333;

      &:after {
        content: "";
        display: block;
        clear: both;
      }

<<<<<<< HEAD
      //左边
=======
<<<<<<< HEAD
      //左边
=======
      //左邊
>>>>>>> 3374661 (no message)
>>>>>>> b3ef431 (no message)
      .order-left {
        float: left;
        width: 16.67%;

        dl {
          line-height: 28px;

          dt {
            font-weight: 700;
            padding: 5px;

            i {
              color: #77b72c;
            }
          }

          dd {
            margin: 0 0 6px;
            border-bottom: 1px solid #ededed;
            text-align: center;
          }
        }
      }

<<<<<<< HEAD
      //右边
=======
<<<<<<< HEAD
      //右边
=======
      //右邊
>>>>>>> 3374661 (no message)
>>>>>>> b3ef431 (no message)
      .order-right {
        float: right;
        width: 83.33%;

<<<<<<< HEAD
        //订单部分
=======
<<<<<<< HEAD
        //订单部分
=======
        //訂單部分
>>>>>>> 3374661 (no message)
>>>>>>> b3ef431 (no message)
        .order-content {
          margin: 0 20px;
          color: #666;

<<<<<<< HEAD
          //标题
=======
<<<<<<< HEAD
          //标题
=======
          //標題
>>>>>>> 3374661 (no message)
>>>>>>> b3ef431 (no message)
          .title {
            margin-bottom: 22px;
            border: 1px solid #ddd;

            h3 {
              padding: 12px 10px;
              font-size: 15px;
              background-color: #f1f1f1;
            }
          }

<<<<<<< HEAD
          //表头
=======
<<<<<<< HEAD
          //表头
=======
          //表頭
>>>>>>> 3374661 (no message)
>>>>>>> b3ef431 (no message)
          .chosetype {
            margin-bottom: 15px;
            color: #666;

            table {
              border: 1px solid #e6e6e6;
              border-collapse: separate;
              border-radius: 2px;
              width: 100%;
              max-width: 100%;
              border-spacing: 0;

              th {
                padding: 6px 8px;
                color: #666;
                font-weight: 700;
                vertical-align: bottom;
                background-color: #f4f4f4;
                line-height: 18px;
                border-bottom: 1px solid #e6e6e6;
                font-size: 12px;
                text-align: left;
              }
            }
          }

<<<<<<< HEAD
          // 表单内容
=======
<<<<<<< HEAD
          // 表单内容
=======
          // 表單內容
>>>>>>> 3374661 (no message)
>>>>>>> b3ef431 (no message)
          .orders {
            font-size: 12px;

            a {
              &:hover {
                color: #4cb9fc;
              }
            }

            table {
              border: 1px solid #e6e6e6;
              border-collapse: collapse;
              border-radius: 2px;
              width: 100%;
              margin-bottom: 18px;
              max-width: 100%;

              th {
                padding: 6px 8px;
                line-height: 18px;
                text-align: left;
                vertical-align: bottom;
                background-color: #f4f4f4;
                font-size: 12px;
                color: #666;

                .pull-right {
                  float: right;
                  cursor: pointer;

                  img {
                    margin-right: 10px;
                    vertical-align: middle;
                  }
                }
              }

              td {
                font-size: 12px;
                color: #666;
                padding: 6px 8px;
                line-height: 18px;
                text-align: left;
                vertical-align: middle;
                border: 1px solid #e6e6e6;

                &.center {
                  text-align: center;
                }

                .typographic {
                  img {
                    float: left;
                    margin-right: 10px;
                  }

                  a {
                    float: left;
                    min-width: 80px;
                    max-width: 250px;
                    color: #e1251b;

                    &.service {
                      color: #666;
                    }
                  }

                  span {
                    float: left;
                    min-width: 80px;
                    max-width: 250px;
                    text-align: center;
                  }
                }
              }
            }
          }

<<<<<<< HEAD
          // 分页
=======
<<<<<<< HEAD
          // 分页
=======
          // 分頁
>>>>>>> 3374661 (no message)
>>>>>>> b3ef431 (no message)
          .choose-order {
            .pagination {
              margin: 38px 0;

              ul {
                font-size: 0;
                display: inline-block;

                li {
                  display: inline-block;
                  padding: 4px 9px;
                  font-size: 14px;
                  border: 1px solid #e0e9ee;

                  &.prev,
                  &.next {
                    background-color: #fafafa;
                  }

                  &.prev {
                    border-right-color: #28a3ef;
                  }

                  &.page {
                    border-color: #28a3ef;
                    border-left: 0;

                    &.actived {
                      background-color: #28a3ef;

                      a {
                        color: #fff;
                      }
                    }
                  }
                }
              }

              div {
                display: inline-block;
                font-size: 14px;
                color: #333;
              }
            }
          }
        }

<<<<<<< HEAD
        // 猜你喜欢
=======
<<<<<<< HEAD
        // 猜你喜欢
=======
        // 猜你喜歡
>>>>>>> 3374661 (no message)
>>>>>>> b3ef431 (no message)
        .like {
          border: 1px solid #ddd;
          margin: 15px 20px;

          .kt {
            border-bottom: 1px solid #ddd;
            background: #f1f1f1;
            color: #666;
            margin: 0;
            padding: 12px;
            font-size: 15px;
          }

          .like-list {
            padding: 15px 11px;
            overflow: hidden;

            .likeItem {
              width: 25%;
              float: left;

              .p-img {
                text-align: left;

                img {
                  width: 167px;
                  height: 123px;
                }
              }

              .attr {
                padding: 0 15px;
              }

              .price {
                padding: 0 15px;
                font-size: 16px;
                color: #c81623;
                margin-bottom: 20px;
              }

              .commit {
                padding: 0 15px;
              }
            }
          }
        }
      }
    }
  }
}
</style>
<<<<<<< HEAD
=======
<<<<<<< HEAD
=======


>>>>>>> 3374661 (no message)
>>>>>>> b3ef431 (no message)
