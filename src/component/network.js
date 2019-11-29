function network() {
  return {
    template: ` <div class="net-container">
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
    <el-row :gutter="20">
        <el-col :span="12">
            <el-card class="box-card">
                <div slot="header" class="clearfix">
                    <span>接入设置</span>
                </div>
                <el-form :model="inspect" status-icon :rules="rules" ref="ruleForm" label-width="100px"
                    class="demo-ruleForm" size="small">
                    <el-form-item label="" prop="hard">
                        <el-checkbox v-model="inspect.hard">监护仪</el-checkbox>
                    </el-form-item>
                    <el-form-item label="" prop="soft">
                        <el-checkbox v-model="inspect.soft">中央监护系统</el-checkbox>
                    </el-form-item>
                    <el-form-item>
                        &nbsp;
                    </el-form-item>
                </el-form>
            </el-card>
        </el-col>
        <el-col :span="12">
            <el-card class="box-card">
                <div slot="header" class="clearfix">
                    <span>本地监听</span>
                </div>
                <el-form :model="localInspect" status-icon :rules="rules" ref="ruleForm" label-width="100px"
                    class="demo-ruleForm" size="small">
                    <el-form-item label="IP" prop="ip">
                        <el-input type="password" v-model="localInspect.ip" autocomplete="off"></el-input>
                    </el-form-item>
                    <el-form-item label="" prop="query">
                        <el-row :gutter="10">
                            <el-col :span="8">
                                <el-checkbox v-model="localInspect.query">设备查询监听端口</el-checkbox>
                            </el-col>
                            <el-col :span="16">
                                <el-form-item label="端口" prop="queryport" v-show="localInspect.query"
                                    style="margin-bottom:0" label-width="50px">
                                    <el-input type="text" v-model="localInspect.queryport" style="width:80px">
                                    </el-input>
                                </el-form-item>
                            </el-col>
                        </el-row>
                    </el-form-item>
                    <el-form-item label="" prop="adt">
                        <el-row :gutter="10">
                            <el-col :span="8">
                                <el-checkbox v-model="localInspect.adt">ADT消息监听端口</el-checkbox>
                            </el-col>
                            <el-col :span="16">
                                <el-form-item label="端口" prop="adtport" v-show="localInspect.adt"
                                    style="margin-bottom:0" label-width="50px">
                                    <el-input type="text" v-model="localInspect.adtport" style="width:80px">
                                    </el-input>
                                </el-form-item>
                            </el-col>
                        </el-row>
                    </el-form-item>
                </el-form>
            </el-card>
        </el-col>
    </el-row>
    <el-row :gutter="20">
        <el-col :span="12">
            <el-card class="box-card">
                <div slot="header" class="clearfix">
                    <span>EMR列表</span>
                </div>
                <div>
                    <el-form :inline="true" :model="formInline" class="form-inline" label-position="right"
                        size="mini">
                        <el-form-item label="地址">
                            <el-input v-model="emrTemp.ip"></el-input>
                        </el-form-item>
                        <el-form-item>
                            <el-button type="primary" @click="addEmr" plain>添加</el-button>
                        </el-form-item>
                    </el-form>
                    <el-table :data="emrList" size="mini">
                        <el-table-column prop="ip" label="ip">
                        </el-table-column>
                        <el-table-column label="操作">
                            <template slot-scope="scope">
                                <el-button size="mini" type="danger" @click="emrDelete(scope.$index, scope.row)"
                                    plain>删除</el-button>
                            </template>
                        </el-table-column>
                        </el-table-column>
                    </el-table>
                </div>
            </el-card>
        </el-col>
        <el-col :span="12">
            <el-card class="box-card">
                <div slot="header" class="clearfix">
                    <span>网卡设置</span>
                </div>
                <div v-for="o in 4" :key="o" class="text item">
                    {{'暂无 ' + o }}
                </div>
            </el-card>
        </el-col>
    </el-row>
    <el-row :gutter="20">
        <el-col :span="24">
            <el-card class="box-card">
                <div slot="header" class="clearfix">
                    <span>上传通道</span>
                </div>
                <el-table :data="access" size="small">
                    <el-table-column prop="admin" label="是否启用" width="100">
                        <template slot-scope="scope">
                            <el-checkbox v-model="scope.row.admin">{{scope.row.label}}</el-checkbox>
                        </template>
                    </el-table-column>
                    <el-table-column prop="addr" label="地址">
                        <template slot-scope="scope">
                            <el-input v-model="scope.row.addr" size="small"></el-input>
                        </template>
                    </el-table-column>
                    <el-table-column prop="port" label="端口" width="80">
                        <template slot-scope="scope">
                            <el-input v-model="scope.row.port" size="small"></el-input>
                        </template>
                    </el-table-column>
                    <el-table-column prop="timeout" label="超时" width="200">
                        <template slot-scope="scope">
                            <el-input-number v-model="scope.row.timeout" :min="1" size="small">
                            </el-input-number>
                        </template>
                    </el-table-column>
                    <el-table-column prop="isreSend" label="重发" width="80">
                        <template slot-scope="scope">
                            <el-checkbox v-model="scope.row.isreSend">重发</el-checkbox>
                        </template>
                    </el-table-column>
                    <el-table-column prop="recicle" label="轮次" width="150">
                        <template slot-scope="scope">
                            <el-input-number v-model="scope.row.recicle" :min="1" size="small">
                            </el-input-number>
                        </template>
                    </el-table-column>
                    <el-table-column prop="interval" label="间隔" width="150">
                        <template slot-scope="scope">
                            <el-input-number v-model="scope.row.interval" :min="1" size="small">
                            </el-input-number>
                        </template>
                    </el-table-column>
                    <el-table-column label="操作">
                        <template slot-scope="scope">
                            <el-button size="mini" type="danger" @click="emrDelete(scope.$index, scope.row)"
                                plain>测试
                            </el-button>
                        </template>
                    </el-table-column>
                    </el-table-column>
                </el-table>
            </el-card>
        </el-col>
    </el-row>
</div>
  `,
    data() {
      return {
        inspect: {
          soft: false,
          hard: true
        },
        localInspect: {
          ip: '',
          query: false,
          queryport: '',
          adt: false,
          adtport: ''
        },
        emrTemp: {
          ip: ''
        },
        emrList: [],
        access: [
          {
            path: 1,
            label: '通道1',
            admin: false,
            addr: '',
            port: null,
            timeout: 30,
            isreSend: false,
            recicle: 3,
            interval: 20
          },
          {
            path: 2,
            label: '通道2',
            admin: false,
            addr: '',
            port: null,
            timeout: 30,
            isreSend: false,
            recicle: 3,
            interval: 20
          },
          {
            path: 3,
            label: '通道3',
            admin: false,
            addr: '',
            port: null,
            timeout: 30,
            isreSend: false,
            recicle: 3,
            interval: 20
          },
          {
            path: 4,
            label: '通道4',
            admin: false,
            addr: '',
            port: null,
            timeout: 30,
            isreSend: false,
            recicle: 3,
            interval: 20
          },
          {
            path: 5,
            label: 'ADT查询',
            admin: false,
            addr: '',
            port: null,
            timeout: 30,
            isreSend: false,
            recicle: 3,
            interval: 20
          }
        ]
      }
    },
    methods: {
      addEmr() {
        if (!this.emrTemp.ip) {
            return
        }
        this.emrList.push({ ip: this.emrTemp.ip })
    },
    emrDelete(index, row) {
        this.emrList.splice(index, 1)
    }
    }
  }
}