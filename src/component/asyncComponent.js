function asyncComponent() {
  return {
    template: `<div>
    <!-- 按钮区域 -->
    <el-row :gutter="20">
        <el-col :span="24">
            <div class="grid-content bg-purple" style="float: right; padding: 3px 0">
                <el-button>刷新</el-button>
                <el-button type="primary">保存</el-button>
            </div>
        </el-col>
    </el-row>
    <!-- 配置区域 -->
    <el-row>
        <el-col :span="24">
            <el-divider content-position="left">客户端设置</el-divider>
            <div>
            <el-form :model="async" status-icon ref="ruleForm" label-width="150px" class="demo-ruleForm"
            size="small">
            <el-form-item label="服务器地址" prop="serverIp">
                <el-input type="text" v-model="async.serverIp" autocomplete="off" style="width:150px"
                    size="small"></el-input>
            </el-form-item>
            <el-form-item label="端口" prop="port">
                <el-input type="text" v-model="async.port" autocomplete="off" style="width:100px"
                size="small"></el-input>
            </el-form-item>
            <el-form-item label="同步结果" prop="result">
                    <el-input type="text" v-model="async.result" autocomplete="off" style="width:150px"
                    size="small"></el-input>
            </el-form-item>
            <el-form-item label="">
                <el-button type="primary" plain>时间同步测试</el-button>
            </el-form-item>
        </el-form>
            </div>
        </el-col>
    </el-row>
    <el-row>
        <el-col :span="24">
            <el-divider content-position="left">服务端设置</el-divider>
            <div>
                <el-form :model="async" status-icon ref="ruleForm" label-width="150px" class="demo-ruleForm"
                    size="small">
                    <el-form-item label="服务端时间同步端口" prop="serverPort">
                     <el-input type="text" v-model="async.serverPort" autocomplete="off" style="width:100px"
                     size="small"></el-input>
                    </el-form-item>
                </el-form>
            </div>
        </el-col>
    </el-row>
</div>
  `,
    data() {
      return {
        async: {
            serverIp: '',
            port: null,
            result: '',
            serverPort: null
        }
      }
    },
    methods: {
    }
  }
}