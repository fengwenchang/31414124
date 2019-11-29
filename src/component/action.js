function action() {
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
            <el-collapse v-model="activeNames">
                <el-collapse-item title="直连设备开关" name="1">

                    <el-form :model="switchs" status-icon ref="ruleForm" label-width="200" class="demo-ruleForm"
                        size="small">
                        <el-form-item label="向EMR通知病人信息" prop="emr">
                            <el-checkbox v-model="switchs.emr"></el-checkbox>
                        </el-form-item>
                        <el-form-item label="发送周期性数据" prop="intervalInfo">
                            <el-checkbox v-model="switchs.intervalInfo"></el-checkbox>
                        </el-form-item>
                        <el-form-item label="周期性数据中包含无创血压" prop="noBlood">
                            <el-checkbox v-model="switchs.noBlood"></el-checkbox>
                        </el-form-item>
                        <el-form-item label="周期性数据发送间隔" prop="interval">
                            <el-input-number v-model="switchs.interval" :min="1" size="small">
                            </el-input-number>

                        </el-form-item>
                        <el-form-item label="发送无创血压数据" prop="sendNoBlood">
                            <el-checkbox v-model="switchs.sendNoBlood"></el-checkbox>
                        </el-form-item>
                        <el-form-item label="发送快速体温" prop="sendHeat">
                            <el-checkbox v-model="switchs.sendHeat"></el-checkbox>
                        </el-form-item>
                    </el-form>
                </el-collapse-item>
                <el-collapse-item title="中央站开关" name="2">
                    <el-form :model="centerSwitchs" status-icon ref="ruleForm" label-width="200"
                        class="demo-ruleForm" size="small">
                        <el-form-item label="中央监护系统IP" prop="ip">
                            <el-input type="text" v-model="centerSwitchs.ip" autocomplete="off"
                                style="width:150px" size="small"></el-input>
                        </el-form-item>
                        <el-form-item label="向中央监护系统通知病人信息" prop="centerEmr">
                            <el-checkbox v-model="centerSwitchs.centerEmr"></el-checkbox>
                        </el-form-item>
                        <el-form-item label="参数报警" prop="paramAlarm">
                            <el-checkbox v-model="centerSwitchs.paramAlarm"></el-checkbox>
                        </el-form-item>
                        <el-form-item label="心律失常报警" prop="heartBeat">
                            <el-checkbox v-model="centerSwitchs.heartBeat"></el-checkbox>
                        </el-form-item>
                        <el-form-item label="生命报警" prop="lifeAlarm">
                            <el-checkbox v-model="centerSwitchs.lifeAlarm"></el-checkbox>
                        </el-form-item>
                    </el-form>
                </el-collapse-item>
            </el-collapse>
        </el-col>
    </el-row>
</div>
  `,
    data() {
      return {
        activeNames: ['1'],
        switchs: {
            emr: false,
            intervalInfo: false,
            noBlood: false,
            interval: 60,
            sendNoBlood: false,
            sendHeat: false
        },
        centerSwitchs: {
            ip: '127.0.0.1',
            centerEmr: false,
            paramAlarm: false,
            heartBeat: false,
            lifeAlarm: false
        }
      }
    },
    methods: {
    }
  }
}