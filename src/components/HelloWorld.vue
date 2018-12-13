<template>
  <div>
    {{kk}}

    <el-form :model="formValue">
          <el-input v-model="msg" style="width:400px" placeholder="123"></el-input>
      <el-form-item label="">
        <el-upload class="upload-demo" action="/api"
        :on-success ="handleUpload"
        :on-error ="errorUpload"
        :on-preview="handlePreview" :on-remove="handleRemove" :before-remove="beforeRemove" multiple :limit="3" :on-exceed="handleExceed" :file-list="fileList">
          <el-button size="small" type="primary">点击上传</el-button>
          <div slot="tip" class="el-upload__tip">只能上传jpg/png文件，且不超过500kb</div>
        </el-upload>
      </el-form-item>
    </el-form>
    <div class="test">
        <el-button type="" @click="testUrl">这个是测试</el-button>
        <div class="sub-test popover" style="display:none">
          <div>2342</div>

        </div>
    </div>

    <template>
      <!-- <div>
        下面的内容是echart
      </div>
      <div id="main" style="width:600px;height:600px;"></div> -->
      <div class="pic_box">
           <img src="http://image.zhangxinxu.com/image/study/s/s256/mm1.jpg" />
      </div>

    </template>

  </div>
</template>

<script>
// import axios from 'axios'
export default {
  name: 'HelloWorld',
  data () {
    return {
      msg: 'Welcome to Your Vue.js App',
      kk: '123',
      formValue: {
        a: 1,
        b: 2
      },
      fileList: []
    }
  },
  mounted () {

  },
  methods: {
    handleRemove (file, fileList) {
      console.log(file, fileList)
    },
    handlePreview (file) {
      console.log(file)
    },
    handleExceed (files, fileList) {
      this.$message.warning(`当前限制选择 3 个文件，本次选择了 ${files.length} 个文件，共选择了 ${files.length + fileList.length} 个文件`)
    },
    beforeRemove (file, fileList) {
      return this.$confirm(`确定移除 ${file.name}？`)
    },
    handleUpload (res, file, fileList) {
      if (res.result === true) {
        // 成功之后弹框，上传成功
        this.$message({
          message: '恭喜你，上传成功',
          type: 'success'
        })
      }
      console.error()
      console.error(file)
      console.error(fileList)
    },
    errorUpload (err, file, fileList) {
      console.error(err)
      console.error(file)
      console.error(fileList)
    },
    testUrl () {
      $('.sub-test').toggle()
      $('body').on('mouseup', function (event) {
        console.error(event.target)
        if (!$(event.target).parents().is($('.popover'))) {
          $('.sub-test').hide()
        }
      })

      // axios.get('/api').then((req, res) => {
      //   console.error(req)
      //   console.error(res)
      // }).catch(err => {
      //   console.error(err)
      // })
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
  h1,
  h2 {
    font-weight: normal;
  }

  ul {
    list-style-type: none;
    padding: 0;
  }

  li {
    display: inline-block;
    margin: 0 10px;
  }

  a {
    color: #42b983;
  }

  #my-echart{
    background: gray;
  }
.pic_box{width:300px; height:300px; background-color:#beceeb;text-align: center;}
.pic_box img{vertical-align:middle;}
.pic_box:after{display:inline-block; width:0; height:100%; content:"center"; vertical-align:middle; overflow:hidden;}
.test{
  position: relative;
}
.sub-test{
    height: 200px;
    width: 200px;
    position: absolute;
    z-index: 1000;
    background: red;
    margin-top: 16px;
}
.sub-test:after{
   content: " ";
    position: absolute;
    height: 0;
    width: 0;
    border: solid #350f0f00;
    pointer-events: none;
    border-width: 16px;
    margin-left: -16px;
    border-bottom-color: red;
    top: -32px;
    left: 20%;

}
</style>
