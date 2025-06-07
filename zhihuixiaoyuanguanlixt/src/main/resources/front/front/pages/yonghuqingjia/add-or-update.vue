<template>
    <view class="content">
        <form class="app-update-pv">
            <view
                    :style='{"boxShadow":"0","backgroundColor":"rgba(255, 255, 255, 0.25)","borderColor":"rgba(228, 232, 230, 1)","margin":"0 0 0px 0","borderWidth":"2rpx","borderStyle":"none none solid none ","height":"100rpx"}'
                    class="cu-form-group">
                <view :style='{"width":"160rpx","fontSize":"28rpx","color":"var(--publicMainColor)","textAlign":"left"}'
                      class="title">请假标题</view>
                <input   disabled
                         :style='{"padding":"0 24rpx","boxShadow":"0px 0px 0px rgba(0, 0, 0, 0.16)","margin":"0","borderColor":"var(--publicMainColor)","backgroundColor":"#fff","color":"#333","textAlign":"left","borderRadius":"0 180rpx 180rpx 0","borderWidth":"4rpx","fontSize":"28rpx","borderStyle":"solid","height":"88rpx"}'
                         :disabled="ro.yonghuqingjiaName" type="text" v-model="ruleForm.yonghuqingjiaName" placeholder="请假标题"></input>
            </view>
<!-- text后缀 -->
            <view
                    :style='{"boxShadow":"0","backgroundColor":"rgba(255, 255, 255, 0.25)","borderColor":"rgba(228, 232, 230, 1)","margin":"0 0 0px 0","borderWidth":"2rpx","borderStyle":"none none solid none ","height":"210rpx"}'
                    class="cu-form-group">
                <view :style='{"width":"160rpx","fontSize":"28rpx","color":"var(--publicMainColor)","textAlign":"left"}'
                      class="title">请假缘由</view>
                <textarea :style='{"padding":"0 24rpx","boxShadow":"0px 0px 0px rgba(0, 0, 0, 0.16)","margin":"0","borderColor":"var(--publicMainColor)","backgroundColor":"#fff","color":"#333","textAlign":"left","borderRadius":"0 180rpx 180rpx 0","borderWidth":"4rpx","fontSize":"28rpx","borderStyle":"solid","height":"88rpx","height":"200rpx"}'
                          :disabled="ro.yonghuqingjiaText" v-model="ruleForm.yonghuqingjiaText" placeholder="请假缘由"/>
            </view>
                <view :style='{"boxShadow":"0","backgroundColor":"rgba(255, 255, 255, 0.25)","borderColor":"rgba(228, 232, 230, 1)","margin":"0 0 0px 0","borderWidth":"2rpx","borderStyle":"none none solid none ","height":"100rpx"}'
                      class="cu-form-group">
                    <view :style='{"width":"160rpx","fontSize":"28rpx","color":"var(--publicMainColor)","textAlign":"left"}'
                          class="title">请假类型</view>
                    <picker @change="yonghuqingjiaTypesChange" :value="yonghuqingjiaTypesIndex" :range="yonghuqingjiaTypesOptions" range-key="indexName">
                        <view
                                :style='{"padding":"0 24rpx","boxShadow":"0px 0px 0px rgba(0, 0, 0, 0.16)","margin":"0","borderColor":"var(--publicMainColor)","backgroundColor":"#fff","color":"#333","textAlign":"left","borderRadius":"0 180rpx 180rpx 0","borderWidth":"4rpx","fontSize":"28rpx","borderStyle":"solid","height":"88rpx"}'
                                class="uni-input">{{ruleForm.yonghuqingjiaTypes?ruleForm.yonghuqingjiaValue:"请选择请假类型"}}</view>
                    </picker>
                </view>
            <view
                    :style='{"boxShadow":"0","backgroundColor":"rgba(255, 255, 255, 0.25)","borderColor":"rgba(228, 232, 230, 1)","margin":"0 0 0px 0","borderWidth":"2rpx","borderStyle":"none none solid none ","height":"100rpx"}'
                    class="cu-form-group">
                <view :style='{"width":"160rpx","fontSize":"28rpx","color":"var(--publicMainColor)","textAlign":"left"}'
                      class="title">请假时间</view>
                <input
                        :style='{"padding":"0 24rpx","boxShadow":"0px 0px 0px rgba(0, 0, 0, 0.16)","margin":"0","borderColor":"var(--publicMainColor)","backgroundColor":"#fff","color":"#333","textAlign":"left","borderRadius":"0 180rpx 180rpx 0","borderWidth":"4rpx","fontSize":"28rpx","borderStyle":"solid","height":"88rpx"}'
                        v-model="ruleForm.yonghuqingjiaTime" placeholder="请假时间" :readonly="ro.yonghuqingjiaTime"
                        @tap="toggleTab('yonghuqingjiaTime')"></input>
            </view>
					                <view
                        :style='{"boxShadow":"0","backgroundColor":"rgba(255, 255, 255, 0.25)","borderColor":"rgba(228, 232, 230, 1)","margin":"0 0 0px 0","borderWidth":"2rpx","borderStyle":"none none solid none ","height":"100rpx"}'
                        class="cu-form-group">
                    <view :style='{"width":"160rpx","fontSize":"28rpx","color":"var(--publicMainColor)","textAlign":"left"}'
                          class="title">请假天数</view>
                    <input   disabled
                             :style='{"padding":"0 24rpx","boxShadow":"0px 0px 0px rgba(0, 0, 0, 0.16)","margin":"0","borderColor":"var(--publicMainColor)","backgroundColor":"#fff","color":"#333","textAlign":"left","borderRadius":"0 180rpx 180rpx 0","borderWidth":"4rpx","fontSize":"28rpx","borderStyle":"solid","height":"88rpx"}'
                             :disabled="ro.yonghuqingjiaNumber" type="number" v-model="ruleForm.yonghuqingjiaNumber" placeholder="请假天数"></input>
                </view>

            <view class="btn">
                <button
                        :style='{"boxShadow":"0 0 16rpx rgba(0,0,0,0) inset","backgroundColor":"var(--publicMainColor)","borderColor":"#409EFF","borderRadius":"8rpx","color":"rgba(255, 255, 255, 1)","borderWidth":"0","width":"70%","fontSize":"32rpx","borderStyle":"solid","height":"80rpx"}'
                        @tap="onSubmitTap" class="bg-red">提交</button>
            </view>
        </form>

					<w-picker mode="dateTime" step="1" :current="false" :hasSecond="false" @confirm="insertTimeConfirm"
                              ref="insertTime" themeColor="#333333"></w-picker>
					<w-picker mode="dateTime" step="1" :current="false" :hasSecond="false" @confirm="yonghuqingjiaTimeConfirm"
                              ref="yonghuqingjiaTime" themeColor="#333333"></w-picker>
					<w-picker mode="dateTime" step="1" :current="false" :hasSecond="false" @confirm="yonghuqingjiaShenheTimeConfirm"
                              ref="yonghuqingjiaShenheTime" themeColor="#333333"></w-picker>
					<w-picker mode="dateTime" step="1" :current="false" :hasSecond="false" @confirm="createTimeConfirm"
                              ref="createTime" themeColor="#333333"></w-picker>


    </view>
</template>

<script>
    import wPicker from "@/components/w-picker/w-picker.vue";

    export default {
        data() {
            return {
                cross: '',
                ro:{
					yonghuId: false,
					yonghuqingjiaName: false,
					yonghuqingjiaText: false,
					yonghuqingjiaTypes: false,
					insertTime: false,
					yonghuqingjiaTime: false,
					yonghuqingjiaNumber: false,
					yonghuqingjiaYesnoTypes: false,
					yonghuqingjiaYesnoText: false,
					yonghuqingjiaShenheTime: false,
					createTime: false,
        },
            ruleForm: {
					yonghuId: '',
					yonghuqingjiaName: '',
					yonghuqingjiaText: '',
					yonghuqingjiaTypes: '',//数字
					yonghuqingjiaValue: '',//数字对应的值
					insertTime: '',
					yonghuqingjiaTime: '',
					yonghuqingjiaNumber: '',
					yonghuqingjiaYesnoTypes: '',//数字
					yonghuqingjiaYesnoValue: '',//数字对应的值
					yonghuqingjiaYesnoText: '',
					yonghuqingjiaShenheTime: '',
					createTime: '',
            },
            // 登陆用户信息
            user: {},
				yonghuqingjiaTypesOptions: [],
							yonghuqingjiaTypesIndex : 0,
				yonghuqingjiaYesnoTypesOptions: [],
							yonghuqingjiaYesnoTypesIndex : 0,

        }
        },
        components: {
            wPicker
        },
        computed: {
            baseUrl() {
                return this.$base.url;
            },
        },
        async onLoad(options) {

		/*下拉框*/
			let yonghuqingjiaTypesParams = {
                page: 1,
                limit: 100,
                dicCode: 'yonghuqingjia_types',
            }
			let yonghuqingjiaTypes = await this.$api.page(`dictionary`, yonghuqingjiaTypesParams);
			this.yonghuqingjiaTypesOptions = yonghuqingjiaTypes.data.list
		/*下拉框*/
			let yonghuqingjiaYesnoTypesParams = {
                page: 1,
                limit: 100,
                dicCode: 'yonghuqingjia_yesno_types',
            }
			let yonghuqingjiaYesnoTypes = await this.$api.page(`dictionary`, yonghuqingjiaYesnoTypesParams);
			this.yonghuqingjiaYesnoTypesOptions = yonghuqingjiaYesnoTypes.data.list


            // 如果是更新操作
            if (options.id) {
                this.ruleForm.id = options.id;
                // 获取信息
                let res = await this.$api.info(`yonghuqingjia`, this.ruleForm.id);
                this.ruleForm = res.data;
            }
            if(options.yonghuqingjiaId){
                this.ruleForm.yonghuqingjiaId = options.yonghuqingjiaId;
            }
            // 跨表
            // this.styleChange()
        },
        methods: {
            // 下拉变化
            yonghuqingjiaTypesChange(e) {
                this.yonghuqingjiaTypesIndex = e.target.value
                this.ruleForm.yonghuqingjiaValue = this.yonghuqingjiaTypesOptions[this.yonghuqingjiaTypesIndex].indexName
                this.ruleForm.yonghuqingjiaTypes = this.yonghuqingjiaTypesOptions[this.yonghuqingjiaTypesIndex].codeIndex
            },
            yonghuqingjiaYesnoTypesChange(e) {
                this.yonghuqingjiaYesnoTypesIndex = e.target.value
                this.ruleForm.yonghuqingjiaYesnoValue = this.yonghuqingjiaYesnoTypesOptions[this.yonghuqingjiaYesnoTypesIndex].indexName
                this.ruleForm.yonghuqingjiaYesnoTypes = this.yonghuqingjiaYesnoTypesOptions[this.yonghuqingjiaYesnoTypesIndex].codeIndex
            },


            // styleChange() {
            // 	this.$nextTick(() => {
            // 		// document.querySelectorAll('.app-update-pv .cu-form-group .uni-yaoxianStyle-yaoxianStyle').forEach(el=>{
            // 		//   el.style.backgroundColor = this.addUpdateForm.yaoxianStyle.content.backgroundColor
            // 		// })
            // 	})
            // },


			// 日期控件
			insertTimeConfirm(val) {
                this.ruleForm.insertTime = val.result;
                this.$forceUpdate();
            },
			// 日期控件
			yonghuqingjiaTimeConfirm(val) {
                this.ruleForm.yonghuqingjiaTime = val.result;
                this.$forceUpdate();
            },
			// 日期控件
			yonghuqingjiaShenheTimeConfirm(val) {
                this.ruleForm.yonghuqingjiaShenheTime = val.result;
                this.$forceUpdate();
            },
			// 日期控件
			createTimeConfirm(val) {
                this.ruleForm.createTime = val.result;
                this.$forceUpdate();
            },




            getUUID() {
                return new Date().getTime();
            },
            async onSubmitTap() {
				if ((!this.ruleForm.yonghuqingjiaName)) {
                    this.$utils.msg(`请假标题不能为空`);
                    return
                }
				if ((!this.ruleForm.yonghuqingjiaText)) {
                    this.$utils.msg(`请假缘由不能为空`);
                    return
                }
				if ((!this.ruleForm.yonghuqingjiaTime)) {
                    this.$utils.msg(`请假时间不能为空`);
                    return
                }
				if ((!this.ruleForm.yonghuqingjiaNumber) && (!this.$validate.isIntNumer(this.ruleForm.yonghuqingjiaNumber)) && this.ruleForm.yonghuqingjiaNumber >0) {
                    this.$utils.msg(`请假天数不能为空，不能小于0 格式为数字`);
                    return
                }
                if (this.ruleForm.id) {
                    await this.$api.update(`yonghuqingjia`, this.ruleForm);
                } else {
                    await this.$api.save(`yonghuqingjia`, this.ruleForm);
                }
                uni.setStorageSync('pingluenStateState', true);
                this.$utils.msgBack('提交成功');
            },
            getDate(type) {
                const date = new Date();
                let year = date.getFullYear();
                let month = date.getMonth() + 1;
                let day = date.getDate();
                if (type === 'start') {
                    year = year - 60;
                } else if (type === 'end') {
                    year = year + 2;
                }
                month = month > 9 ? month : '0' + month;;
                day = day > 9 ? day : '0' + day;
                return `${year}-${month}-${day}`;
            },
            toggleTab(str) {
                this.$refs[str].show();
            }
        }
    }
</script>
<style lang="scss" scoped>
    .container {
        padding: 20upx;
    }

    .content:after {
        position: fixed;
        top: 0;
        right: 0;
        left: 0;
        bottom: 0;
        content: '';
        background-attachment: fixed;
        background-size: cover;
        background-position: center;
    }

    textarea {
        border: 1upx solid #EEEEEE;
        border-radius: 20upx;
        padding: 20upx;
    }

    .title {
        width: 180upx;
    }

    .avator {
        width: 150upx;
        height: 60upx;
    }

    .right-input {
        flex: 1;
        text-align: left;
        padding: 0 24upx;
    }

    .cu-form-group.active {
        justify-content: space-between;
    }

    .cu-form-group .title {
        height: auto;
        line-height:30rpx
    }

    .btn {
        display: flex;
        align-items: center;
        justify-content: center;
        flex-wrap: wrap;
        padding: 20upx 0;
    }

    .cu-form-group {
        padding: 0 24upx;
        background-color: transparent;
        min-height: inherit;
    }

    .cu-form-group+.cu-form-group {
        border: 0;
    }

    .cu-form-group uni-input {
        padding: 0 30upx;
    }

    .uni-input {
        padding: 0 30upx;
    }

    .cu-form-group uni-textarea {
        padding: 30upx;
        margin: 0;
    }

    .cu-form-group uni-picker::after {
        line-height: 80rpx;
    }

    .select .uni-input {
        line-height: 80rpx;
    }

    .input .right-input {
        line-height: 88rpx;
    }
</style>