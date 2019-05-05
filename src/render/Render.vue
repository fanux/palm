<template>
import { METHODS } from 'http';
import { METHODS } from 'http';
    <Row>
        <Col span="5">base</Col>
        <Col span="12">
            <Row>
                <Divider orientation="left" >app meta</Divider>
            </Row>
            <Row>
                <Col span="20">
                    <div class="render">
                        <Form :model="appMeta" label-position="left" :label-width="100">
                            <FormItem label="appName" >
                                <Input v-model="appMeta.appName" class="inputShort"></Input>说明：1-20个字符（英文小写、数字、-），不能以数字开头。
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
                                        <Col span="10">
                                            <Input type="text" v-model="item.value" class="inputShorter" placeholder="Enter something..."></Input>
                                        </Col>
                                        <Col span="4" offset="1">
                                            <Button @click="handleRemove(index)">Delete</Button>
                                        </Col>
                                    </Row>
                                </FormItem>
                                <FormItem>
                                    <Row>
                                        <Col span="12">
                                            <Button type="dashed" long @click="handleAdd" icon="md-add">Add item</Button>
                                        </Col>
                                    </Row>
                                </FormItem>
                            </FormItem>
                            <FormItem label="annotations">
                                    <Input v-model="appMeta.annotations" placeholder="key" class="inputShorter"  />
                                    <Input v-model="appMeta.annotations" placeholder="value" class="inputShorter" />
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
                            <FormItem label="imageName">
                                <Input v-model="imageName"></Input>
                            </FormItem>
                            <FormItem label="command">
                                <Input v-model="command"></Input>
                            </FormItem>
                            <FormItem label="resource">
                                <FormItem label="request">
                                    <div style="margin-top: 15px;">
                                    <Input v-model="resource.requestCPU" type="text"></Input>
                                    <span class="span" slot="append">C</span>
                                    </div>
                                    <div style="margin-top: 15px;">
                                    <Input v-model="resource.requestMEM"></Input>
                                    <span class="span" slot="append">G</span>
                                    </div>
                                    <div style="margin-top: 15px;">
                                    <Input v-model="resource.requestDISK"></Input>
                                    <span class="span" slot="append">G</span>
                                    </div>
                                </FormItem>
                                <FormItem label="limit">
                                    <div style="margin-top: 15px;">
                                    <Input v-model="resource.limitCPU"></Input>
                                    <span class="span" slot="append">C</span>
                                    </div>
                                    <div style="margin-top: 15px;">
                                    <Input v-model="resource.limitMEM"></Input>
                                    <span class="span" slot="append">G</span>
                                    </div>
                                    <div style="margin-top: 15px;">
                                    <Input v-model="resource.limitDISK"></Input>
                                    <span class="span" slot="append">G</span>
                                    </div>
                                </FormItem>
                            </FormItem>
                        </Form>
                    </div>
                </Col>
                <Col span="4">
                    <div style="text-align:center">
                    <Button type="primary" class="button">>></Button>              
                    </div>
                </Col>
                <Col span="10">
                    <p>yaml</p>
                    <Input v-model="renderYaml" type="textarea" :autosize="{minRows: 20,}" placeholder="deploy.yaml..."/>
                </Col>
            </Row>
        </Col>
        <Col span="5"></Col>
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
                            value: '',
                            index: 1,
                            status: 1
                        }
                    ],
                    annotations: [
                    ],
                },
                imageName: '',
                resource:{
                    requestCPU:'',
                    requestMEM:'',
                    requestDISK:'',
                    limitCPU:'',
                    limitMEM:'',
                    limitDISK:'',
                },
                renderYaml:'',
            }
        },
        methods: {
            handleAdd () {
                this.index++;
                this.appMeta.labels.push({
                    value: '',
                    index: this.index,
                    status: 1
                });
            },
            handleRemove (index) {
                this.appMeta.labels[index].status = 0;
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
.button
{
 font-size:12px;
 text-align:center;
 padding:0px;
 vertical-align:middle ;
 line-height:22px;
 margin:0px; 
 Height:26px;
 Width:26px;
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