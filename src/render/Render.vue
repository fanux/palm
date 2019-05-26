<template>
import { METHODS } from 'http';
import { METHODS } from 'http';
    <Row>
        <Col span="3">base</Col>
        <Col span="16">
            <Row>
                <Divider orientation="left" >app meta</Divider>
            </Row>
            <Row>
                <Col span="20">
                    <div class="render">
                        <Form :model="appMeta" label-position="left" :label-width="100">
                            <FormItem label="appName" >
                                <Input v-model="appMeta.appName" class="inputShort"></Input>
                            </FormItem>
                            <FormItem label="namespace" >
                                <Input v-model="appMeta.namespace" class="inputShort"></Input>
                            </FormItem>
                            <FormItem label="labels">
                                <FormItem
                                        v-for="(item, index) in appMeta.labels"
                                        v-if="item.status"
                                        :key="index"
                                        :prop="'items.' + index + '.value'"
                                        :rules="{required: true, message: 'Item ' + item.index +' can not be empty', trigger: 'blur'}">
                                    <Row>
                                        <div style="width:10%;">
                                            <Input type="text" v-model="item.key" class="inputShorter" placeholder="key"></Input>
                                        </div>
                                        <div style="width:1%;"></div>
                                        <div style="width:10%;">
                                            <Input type="text" v-model="item.value" class="inputShorter" placeholder="value"></Input>
                                        </div>
                                        <div style="width:10%;">
                                            <Button @click="handleRemoveIndex(index)">Delete</Button>
                                        </div>
                                        <div span="4"></div>
                                    </Row>
                                </FormItem>
                                <FormItem>
                                    <Row>
                                        <Col span="12">
                                            <Button type="dashed" long @click="handleAddIndex" icon="md-add">Add item</Button>
                                        </Col>
                                    </Row>
                                </FormItem>
                            </FormItem>
                            <FormItem label="annotations">
                                <FormItem
                                        v-for="(item, index) in appMeta.annotations"
                                        v-if="item.status"
                                        :key="index"
                                        :prop="'items.' + index + '.value'"
                                        :rules="{required: true, message: 'Item ' + item.index +' can not be empty', trigger: 'blur'}">
                                    <Row>
                                        <div style="width:10%;">
                                            <Input type="text" v-model="item.key" class="inputShorter" placeholder="key"></Input>
                                        </div>
                                        <div style="width:1%;"></div>
                                        <div style="width:10%;">
                                            <Input type="text" v-model="item.value" class="inputShorter" placeholder="value"></Input>
                                        </div>
                                        <div style="width:10%;">
                                            <Button @click="handleRemoveAnnotation(index)">Delete</Button>
                                        </div>
                                        <div span="4"></div>
                                    </Row>
                                </FormItem>
                                <FormItem>
                                    <Row>
                                        <Col span="12">
                                            <Button type="dashed" long @click="handleAddAnnotation" icon="md-add">Add item</Button>
                                        </Col>
                                    </Row>
                                </FormItem>
                                    <!-- <Col span="3">
                                    <Input v-model="appMeta.annotations" placeholder="key" class="inputShorter"  />
                                    </Col>
                                    <Col span="2"></Col>
                                    <Col span="3">
                                    <Input v-model="appMeta.annotations" placeholder="value" class="inputShorter" />
                                    </Col>
                                    <Col span="8"></Col> -->
                            </FormItem>
                        </Form>
                    </div>
                </Col>
            </Row>
            <Row>
                <Divider orientation="left">app detail</Divider>
            </Row>
            <Row>
                <Col span="10">
                    <div class="render">
                        <Form label-position="left" :label-width="100">
                            <FormItem label="replicas">
                                <Input v-model="appDetail.replicas"></Input>
                            </FormItem>                          
                            <FormItem label="imageName">
                                <Input v-model="appDetail.imageName"></Input>
                            </FormItem>
                            <FormItem label="imagePullPolicy">
                                <Input v-model="appDetail.imagePullPolicy"></Input>
                            </FormItem>
                            <FormItem label="command">
                                <Input v-model="appDetail.command"></Input>
                            </FormItem>
                            <FormItem label="port">
                                <Input v-model="appDetail.port"></Input>
                            </FormItem>
                            <FormItem label="resource">
                                <FormItem label="request">
                                    <div style="margin-top: 15px;">
                                    <Input v-model="appDetail.resource.requestCPU" type="text"></Input>
                                    <span class="span" slot="append">C</span>
                                    </div>
                                    <div style="margin-top: 15px;">
                                    <Input v-model="appDetail.resource.requestMEM"></Input>
                                    <span class="span" slot="append">G</span>
                                    </div>
                                    <div style="margin-top: 15px;">
                                    <Input v-model="appDetail.resource.requestDISK"></Input>
                                    <span class="span" slot="append">G</span>
                                    </div>
                                </FormItem>
                                <FormItem label="limit">
                                    <div style="margin-top: 15px;">
                                    <Input v-model="appDetail.resource.limitCPU"></Input>
                                    <span class="span" slot="append">C</span>
                                    </div>
                                    <div style="margin-top: 15px;">
                                    <Input v-model="appDetail.resource.limitMEM"></Input>
                                    <span class="span" slot="append">G</span>
                                    </div>
                                    <div style="margin-top: 15px;">
                                    <Input v-model="appDetail.resource.limitDISK"></Input>
                                    <span class="span" slot="append">G</span>
                                    </div>
                                </FormItem>
                            </FormItem>
                        </Form>
                    </div>
                </Col>
                <Col span="4" >
                    <div class="center" style="text-align:center">
                    <Button type="primary" @click="handleRenderAppYaml" class="button button-center">>></Button>              
                    </div>
                </Col>
                <Col span="10">
                    <p>yaml</p>
                    <Input v-model="renderYaml" type="textarea" :autosize="{minRows: 20,}" placeholder="deploy.yaml..."/>
                </Col>
            </Row>
            <Row>
                <div>
                    <Button type="primary" @click="handleCreateApp" class="button-opr button-right2">create</Button>                    
                </div>
                <div>
                    <Button type="primary" @click="handleUpdateApp" class="button-opr button-right1">update</Button>
                </div>
            </Row>
        </Col>
        <Col span="3"></Col>
    </Row>   
    
</template>
<script>
    export default {
        data () {
            return {
                index: 1,
                appMeta: {
                    appName: '',
                    namespace: '',
                    labels: [
                        {
                            key:'',
                            value:'',
                            index: 1,
                            status: 1
                        }
                    ],
                    annotations: [
                        {
                            key:'',
                            value:'',
                            index: 1,
                            status: 1
                        }
                    ],
                },
                appDetail: {
                    imageName: '',
                    imagePullPolicy: '',
                    command: '',
                    replicas: '',
                    port: '',
                    resource:{
                        requestCPU:'',
                        requestMEM:'',
                        requestDISK:'',
                        limitCPU:'',
                        limitMEM:'',
                        limitDISK:'',
                    },
                },
               
                renderYaml:'',
            }
        },
        methods: {

            handleAddIndex () {
                this.index++;
                this.appMeta.labels.push({
                    value: '',
                    index: this.index,
                    status: 1
                });
            },
            handleAddAnnotation () {
                this.index++;
                this.appMeta.annotations.push({
                    value: '',
                    index: this.index,
                    status: 1
                });
            },
            handleRemoveIndex (index) {
                this.appMeta.labels[index].status = 0;
            },
            handleRemoveAnnotation (annotation) {
                this.appMeta.annotations[annotation].status = 0;
            },
            handleRenderAppYaml () {
                //调用fist/render模块
                // 传参
               // var url_render = "http://172.31.81.85:8080/tempaltes?type=text";
                //console.log(url);
                
                // var options= {

                // }

                this.$http({
                    // url : 'http://template.185-sealyuntty.svc.hfb.ipaas.cn::8080/templates?type=text',
                    url : 'http://172.31.81.85:8080/templates?type=text',
                    method : 'POST',
                    body: [
                        {
                        "name":"Deployment",  
                        "value": {                       
                            "Name": this.appMeta.appName,
                            "Image": this.appMeta.imageName,
                            "Replicas": this.appDetail.replicas,
                            "Namespace": this.appMeta.namespace ,
                            "Command": this.appDetail.command,
                            "ImagePolicy": this.appDetail.imagePullPolicy,
                            "Port": this.appDetail.port,
                            }
                        },
                    ],
                    
                    // {
                    //     'name':'Deployment',
                    //     'value': {
                    //         'Name' : 'fist',
                    //         'Image' : 'sealyun/fist',
                    //         'Replicas' : 3,
                    //         'Namespace': 'sealyun',
                    //         'Command': '["./fist"]',
                    //         'ImagePolicy': 'IfnotPresent',
                    //         'Port': 9090,
                    //     }
                    // },
                    Headers : {
                        'Content-Type': 'application/json'
                    }
                }).then(
                    function(res) {
                        console.log("ok")
                        console.log(res.data);
                        console.log(res.code)
                        
                        this.renderYaml = res.data;
                      
                    },
                    function(res) {
                        console.log("fetch token failed");
                    }
                );

                //解析

            },
            handleCreateApp () {
                //调用k8s api 
            },
            handleUpdateApp () {
                // 调用k8s api
            }
       }
    }
</script>

<style scoped>
.inputShort {
 Width:250px;
}
.inputShorter {
 Width:180px;
}
.base {
  height: 30px;
}
.time {
  height: 100px;
  resize: none;
}
.line {
   height: 10px; 
   margin: 30px;
   font-family: 'Courier New', Courier, monospace,#464c5b;
}
.input {
    margin: 100px;
}
.center {
    height: 500px;
}
.button-center {
    position: absolute;
    top: 50%;
    left: 50%;
}
.button
{
 font-size:14px;
 text-align:center;
 padding:0px;
 vertical-align:middle ;
 line-height:22px;
 margin:0px; 
 Height: 36px;
 Width: 36px;
}

.button-opr
{
 font-size:15px;
 text-align:center;
 padding:0px;
 vertical-align:middle ;
 line-height:22px;
 margin:0px; 
 Height:30px;
 Width:60px;
}
.button-right1 {
    position: absolute;
    top: 50%;
    right: 0%;
}

.button-right2 {
    position: absolute;
    top: 50%;
    right: 15%;
}
.line
{
line-height:30px;
padding: 100px;
margin:0px;
}
.span{
    position:absolute;
    right:5%;
}
</style>