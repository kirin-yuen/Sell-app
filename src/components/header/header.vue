<template>
    <div class="header">
        <div class="content-wrapper">
            <div class="avatar"><img :src="seller.avatar" alt=""></div>
            <div class="content">
                <div class="title">
                    <span class="brand"></span>
                    <span class="name">{{seller.name}}</span>
                </div>
                <div class="description">{{seller.description}} / {{seller.deliveryTime}} 分钟送达</div>
                <div v-if="seller.supports" class="support">
                    <span class="icon" :class="classMap[seller.supports[0].type]"></span>
                    <span class="text">{{seller.supports[0].description}}</span>
                </div>
            </div>
            <div class="support-count" v-if="seller.supports" @click="showDetail">
                <span class="count">{{seller.supports.length}}</span>
                <i class="icon-keyboard_arrow_right"></i>
            </div>
        </div>
        <div class="bulletin-wrapper" @click="showDetail">
            <span class="bulletin-title"></span>
            <span class="bulletin-text">{{seller.bulletin}}</span>
            <i class="icon-keyboard_arrow_right"></i>
        </div>
        <div class="background">
            <img :src="seller.avatar">
        </div>
        <div :class="{detail: detailShow}">
            
        </div>
    </div>
</template>
<script>
export default {
    // props to get data from father component
    props: {
        seller: {
            // type: Object
        }
    },
    created () {
        this.classMap = ['decrease', 'discount', 'special', 'invoice', 'guarantee']
    },
    data () {
        return {
            detailShow: false
        }
    },
    methods: {
        showDetail () {
            this.detailShow = true
        }
    }
}
</script>
<style lang="scss">
@import '../../common/sass/mixin.scss';
.avatar img {
    width: 64px;
    height: 64px;
}

.header {
    position: relative;
    color: white;
    background: rgba(7, 17, 27, 0.5);
    .content-wrapper {
        position: relative;
        padding: 24px 12px 18px 24px;
        .avatar {
            vertical-align: top;
            img {
                border-radius: 2px;
            }
        }
        .avatar,
        .content {
            display: inline-block;
        }
        .content {
            margin-left: 10px;
            .title {
                margin: 2px 0 8px 0;
                .brand {
                    display: inline-block;
                    width: 30px;
                    height: 18px;
                    vertical-align: top;
                    @include bg-image('brand');
                    background-size: 30px 18px;
                    background-repeat: no-repeat;
                }
                .name {
                    margin-left: 6px;
                    font-size: 16px;
                    line-height: 18px;
                    font-weight: bold;
                }
            }
            .description {
                margin-bottom: 10px;
                line-height: 12px;
                font-size: 12px;
            }
            .support {
                .icon {
                    display: inline-block;
                    width: 12px;
                    height: 12px;
                    margin-right: 4px;
                    vertical-align: top;
                    background-size: 12px 12px;
                    background-repeat: no-repeat;
                    &.decrease {
                        @include bg-image('decrease_1');
                    }
                    &.discount {
                        @include bg-image('discount_1');
                    }
                    &.guarantee {
                        @include bg-image('guarantee_1');
                    }
                    &.invoice {
                        @include bg-image('invoice_1');
                    }
                    &.special {
                        @include bg-image('special_1');
                    }
                }
                .text {
                    vertical-align: top;
                    line-height: 12px;
                    font-size: 10px;
                }
            }
        }
        .support-count {
            position: absolute;
            right: 12px;
            bottom: 14px;
            padding: 0 8px;
            height: 24px;
            line-height: 24px;
            border-radius: 14px;
            background: rgba(0, 0, 0, 0.2);
            text-align: center;
            .count {
                vertical-align: top;
                font-size: 10px;
            }
            .icon-keyboard_arrow_right {
                margin-left: 2px;
                line-height: 24px;
                font-size: 10px;
            }
        }
    }
    .bulletin-wrapper {
        position: relative;
        height: 28px;
        line-height: 28px;
        padding: 0 22px 0 12px;
        background: rgba(7, 17, 27, 0.5);
        white-space: nowrap;
        overflow: hidden;
        text-overflow: ellipsis;
        .bulletin-title {
            display: inline-block;
            width: 22px;
            height: 12px;
            background-size: 22px 12px;
            background-repeat: no-repeat;
            @include bg-image('bulletin');
        }
        .bulletin-text {
            margin: 0 4px;
            font-size: 10px;
            vertical-align: top;
        }
        .icon-keyboard_arrow_right {
            position: absolute;
            font-size: 10px;
            right: 12px;
            top: 8px;
        }
    }
    .background {
        position: absolute;
        top: 0;
        left: 0;
        width: 100%;
        height: 100%;
        z-index: -1;
        filter: blur(10px);
        img {
            width: 100%;
            height: 100%;            
        }
    }
    .detail {
        position: fixed;
        top: 0;
        left: 0;
        z-index: 100;
        width: 100%;
        height: 100%;
        overflow: auto;
        background-color: rgba(7,17,27,0.8);

    }
}
</style>
