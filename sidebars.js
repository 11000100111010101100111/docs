/**
 * Creating a sidebar enables you to:
 - create an ordered group of docs
 - render a sidebar for each doc of that group
 - provide next/previous navigation

 The sidebars can be generated from the filesystem, or explicitly defined here.

 Create as many sidebars as you want.
 */

// @ts-check

/** @type {import('@docusaurus/plugin-content-docs').SidebarsConfig} */
const sidebars = {
  // By default, Docusaurus generates a sidebar from the docs folder structure
  tutorialSidebar: [{type: 'autogenerated', dirName: '.'}],

// Tapdata Cloud docs list
  cloud: [
    'cloud/what-is-tapdata-cloud',
    {
     type: 'category',
     label: '产品简介',
     link: {type: 'doc', id: 'cloud/introduction/README'},
     items: [
            'cloud/introduction/architecture',
            'cloud/introduction/features',
            'cloud/introduction/benefits',
            'cloud/introduction/use-cases',
            'cloud/introduction/supported-databases',
            'cloud/introduction/terms',
     ]
    },
    {
     type: 'category',
     label: '快速入门',
     link: {type: 'doc', id: 'cloud/quick-start/README'},
     items: [
            {
             type: 'category',
             label: '安装 Agent',
             link: {type: 'doc', id: 'cloud/quick-start/install-agent/README'},
             items: [
                    'cloud/quick-start/install-agent/agent-on-linux',
                    'cloud/quick-start/install-agent/agent-on-windows',
                    'cloud/quick-start/install-agent/agent-on-docker',
                    'cloud/quick-start/install-agent/agent-on-mac-m1',
                    'cloud/quick-start/install-agent/agent-on-compute-nest',
             ]
            },
            'cloud/quick-start/connect-database',
            {
             type: 'category',
             label: '开始数据同步',
             link: {type: 'doc', id: 'cloud/quick-start/create-task/README'},
             items: [
                    'cloud/quick-start/create-task/full-data-synchronization',
                    'cloud/quick-start/create-task/incremental-data-synchronization',
             ]
            },
     ]
    },
    {
     type: 'category',
     label: '准备工作',
     link: {type: 'doc', id: 'cloud/prerequisites/README'},
     items: [
             'cloud/prerequisites/allow-access-network',
            {
             type: 'category',
             label: '调整数据配置并授权账号',
             link: {type: 'doc', id: 'cloud/prerequisites/config-database/README'},
             items: [
                     'cloud/prerequisites/config-database/amazon-rds-mysql',
                     'cloud/prerequisites/config-database/polardb-postgresql',
                     'cloud/prerequisites/config-database/polardb-mysql',
                     'cloud/prerequisites/config-database/hiflow',
                     'cloud/prerequisites/config-database/apache-doris',
                     'cloud/prerequisites/config-database/vika',
                     'cloud/prerequisites/config-database/tencentdb-for-sqlserver',
                     'cloud/prerequisites/config-database/tencentdb-for-pg',
                     'cloud/prerequisites/config-database/tencentdb-for-mysql',
                     'cloud/prerequisites/config-database/tencentdb-for-mongodb',
                     'cloud/prerequisites/config-database/tencentdb-for-mariadb',
                     'cloud/prerequisites/config-database/aliyun-rds-for-sqlserver',
                     'cloud/prerequisites/config-database/aliyun-rds-for-pg',
                     'cloud/prerequisites/config-database/aliyun-rds-for-mysql',
                     'cloud/prerequisites/config-database/aliyun-rds-for-mariadb',
                     'cloud/prerequisites/config-database/aliyun-rds-for-mongodb',
                     'cloud/prerequisites/config-database/tidb',
                     'cloud/prerequisites/config-database/hazelcast-cloud',
                     'cloud/prerequisites/config-database/adb-postgresql',
                     'cloud/prerequisites/config-database/adb-mysql',
                     'cloud/prerequisites/config-database/kundb',
                     'cloud/prerequisites/config-database/clickhouse',
                     'cloud/prerequisites/config-database/mq',
                     'cloud/prerequisites/config-database/greenplum',
                     'cloud/prerequisites/config-database/mysql',
                     'cloud/prerequisites/config-database/mysql-pxc',
                     'cloud/prerequisites/config-database/mariadb',
                     'cloud/prerequisites/config-database/oracle',
                     'cloud/prerequisites/config-database/sqlserver',
                     'cloud/prerequisites/config-database/mongodb',
                     'cloud/prerequisites/config-database/elasticsearch',
                     'cloud/prerequisites/config-database/postgresql',
                     'cloud/prerequisites/config-database/kafka',
                     'cloud/prerequisites/config-database/dmdb',
             ]
            },
     ]
    },
    {
     type: 'category',
     label: '用户指南',
     link: {type: 'doc', id: 'cloud/user-guide/README'},
     items: [
             'cloud/user-guide/workshop',
             'cloud/user-guide/manage-agent',
             {
              type: 'category',
              label: '连接数据库',
              link: {type: 'doc', id: 'cloud/user-guide/connect-database/README'},
              items:[
                     'cloud/user-guide/connect-database/connect-mysql',
                     'cloud/user-guide/connect-database/connect-mariadb',
                     'cloud/user-guide/connect-database/connect-oracle',
                     'cloud/user-guide/connect-database/connect-sqlserver',
                     'cloud/user-guide/connect-database/connect-mongodb',
                     'cloud/user-guide/connect-database/connect-elasticsearch',
                     'cloud/user-guide/connect-database/connect-kafka',
                     'cloud/user-guide/connect-database/connect-dmdb',
                     'cloud/user-guide/connect-database/connect-greenplum',
                     'cloud/user-guide/connect-database/connect-mq',
                     'cloud/user-guide/connect-database/connect-clickhouse',
                     'cloud/user-guide/connect-database/connect-kundb',
                     'cloud/user-guide/connect-database/connect-adb-mysql',
                     'cloud/user-guide/connect-database/connect-adb-pg',
                     'cloud/user-guide/connect-database/connect-hazelcast-cloud',
                     'cloud/user-guide/connect-database/connect-tidb',
                     'cloud/user-guide/connect-database/connect-dummydb',
              ]
             },
             'cloud/user-guide/manage-connection',
             {
              type: 'category',
              label: '数据复制',
              link: {type: 'doc', id: 'cloud/user-guide/copy-data/README'},
              items:[
                    'cloud/user-guide/copy-data/create-task',
                    'cloud/user-guide/copy-data/manage-task',
                    ]
            },
            {
             type: 'category',
             label: '数据开发（Beta）',
             link: {type: 'doc', id: 'cloud/user-guide/data-development/README'},
             items:[
                   'cloud/user-guide/data-development/create-task',
                   'cloud/user-guide/data-development/manage-task',
                   'cloud/user-guide/data-development/process-node',
                   'cloud/user-guide/data-development/monitor-task',
                   ]
             },
             'cloud/user-guide/operation-log',
             {
              type: 'category',
              label: '排查连接失败问题',
              link: {type: 'doc', id: 'cloud/user-guide/trouble-shooting-connection/README'},
              items:[
                     'cloud/user-guide/trouble-shooting-connection/ts-mysql',
                     'cloud/user-guide/trouble-shooting-connection/ts-oracle',
                     'cloud/user-guide/trouble-shooting-connection/ts-mariadb',
                     'cloud/user-guide/trouble-shooting-connection/ts-mongodb',
                     'cloud/user-guide/trouble-shooting-connection/ts-postgresql',
                     'cloud/user-guide/trouble-shooting-connection/ts-sqlserver',
                     'cloud/user-guide/trouble-shooting-connection/ts-tidb',
                     'cloud/user-guide/trouble-shooting-connection/ts-dummydb',
              ]
             },
             'cloud/user-guide/no-supported-data-type',
            ]
    },
    {
     type: 'category',
     label: '最佳实践',
     link: {type: 'doc', id: 'cloud/best-practice/README'},
     items: [
            {
             type: 'category',
             label: 'MongoDB 实时同步',
             link: {type: 'doc', id: 'cloud/best-practice/mongodb-as-source/README'},
             items:[
                    'cloud/best-practice/mongodb-as-source/mongodb-to-mysql',
                    'cloud/best-practice/mongodb-as-source/mongodb-to-elasticsearch',
                    'cloud/best-practice/mongodb-as-source/mongodb-to-oracle',
                    'cloud/best-practice/mongodb-as-source/mongodb-to-sqlserver',
                    'cloud/best-practice/mongodb-as-source/mongodb-to-postgresql',
             ]
            },
            {
             type: 'category',
             label: 'MySQL 实时同步',
             link: {type: 'doc', id: 'cloud/best-practice/mysql-as-source/README'},
             items:[
                    'cloud/best-practice/mysql-as-source/mysql-to-elasticsearch',
                    'cloud/best-practice/mysql-as-source/mysql-to-mongodb',
                    'cloud/best-practice/mysql-as-source/mysql-to-oracle',
                    'cloud/best-practice/mysql-as-source/mysql-to-sqlserver',
                    'cloud/best-practice/mysql-as-source/mysql-to-postgresql',

             ]
            },
            {
             type: 'category',
             label: 'SQL Server 实时同步',
             link: {type: 'doc', id: 'cloud/best-practice/sqlserver-as-source/README'},
             items:[
                    'cloud/best-practice/sqlserver-as-source/sqlserver-to-elasticsearch',
                    'cloud/best-practice/sqlserver-as-source/sqlserver-to-oracle',
                    'cloud/best-practice/sqlserver-as-source/sqlserver-to-mongodb',
                    'cloud/best-practice/sqlserver-as-source/sqlserver-to-mysql',
                    'cloud/best-practice/sqlserver-as-source/sqlserver-to-postgresql',
             ]
            },
            {
             type: 'category',
             label: 'PostgreSQL 实时同步',
             link: {type: 'doc', id: 'cloud/best-practice/postgresql-as-source/README'},
             items:[
                    'cloud/best-practice/postgresql-as-source/postgresql-to-elasticsearch',
                    'cloud/best-practice/postgresql-as-source/postgresql-to-oracle',
                    'cloud/best-practice/postgresql-as-source/postgresql-to-mongodb',
                    'cloud/best-practice/postgresql-as-source/postgresql-to-mysql',
                    'cloud/best-practice/postgresql-as-source/postgresql-to-sqlserver',
             ]
            },
        ]
        },
     'cloud/release-notes',
     {
      type: 'category',
      label: '常见问题',
      link: {type: 'doc', id: 'cloud/faq/README'},
      items:[
             'cloud/faq/data-security',
             'cloud/faq/agent-installation',
             'cloud/faq/database',
             'cloud/faq/task',
      ]
     },
     'cloud/faq/support',
  ],


// Tapdata Enterprise docs list
  enterprise: [
  'enterprise/what-is-tapdata-enterprise',
    {
     type: 'category',
     label: '产品简介',
     link: {type: 'doc', id: 'enterprise/introduction/README'},
     items: [
             'enterprise/introduction/features',
             'enterprise/introduction/use-cases',
             'enterprise/introduction/supported-databases',
             'enterprise/introduction/terms',
       ]
    },
    {
     type: 'category',
     label: '快速入门',
     link: {type: 'doc', id: 'enterprise/quick-start/README'},
     items: [
            'enterprise/quick-start/install-tapdata',
            'enterprise/quick-start/connect-database',
            'enterprise/quick-start/create-task',
     ]
    },
{
     type: 'category',
     label: '准备工作',
     link: {type: 'doc', id: 'enterprise/prerequisites/README'},
     items: [
            {
             type: 'category',
             label: '通用数据库',
             link: {type: 'doc', id: 'enterprise/prerequisites/common-database/README'},
             items: [
                     'enterprise/prerequisites/common-database/mysql',
                     'enterprise/prerequisites/common-database/mariadb',
                     'enterprise/prerequisites/common-database/oracle',
                     'enterprise/prerequisites/common-database/sqlserver',
                     'enterprise/prerequisites/common-database/postgresql',
                     'enterprise/prerequisites/common-database/mongodb',
                     'enterprise/prerequisites/common-database/elasticsearch',
                     'enterprise/prerequisites/common-database/apache-doris',
                     'enterprise/prerequisites/common-database/clickhouse',
             ]
            },
            {
             type: 'category',
             label: 'MQ 数据库',
             link: {type: 'doc', id: 'enterprise/prerequisites/mq-database/README'},
             items: [
                     'enterprise/prerequisites/mq-database/kafka',
                     'enterprise/prerequisites/mq-database/activemq',
                     'enterprise/prerequisites/mq-database/rabbitmq',
                     'enterprise/prerequisites/mq-database/rocketmq',
             ]
            },
     ]
    },
    {
     type: 'category',
     label: '用户指南',
     link: {type: 'doc', id: 'enterprise/user-guide/README'},
     items: [
             'enterprise/user-guide/workshop',
             {
              type: 'category',
              label: '连接数据库',
              link: {type: 'doc', id: 'enterprise/user-guide/connect-database/README'},
              items:[
                     'enterprise/user-guide/connect-database/custom-connection',
                     'enterprise/user-guide/connect-database/connect-mysql',
                     'enterprise/user-guide/connect-database/connect-oracle',
                     'enterprise/user-guide/connect-database/connect-sqlserver',
                     'enterprise/user-guide/connect-database/connect-postgresql',
                     'enterprise/user-guide/connect-database/connect-mongodb',
                     'enterprise/user-guide/connect-database/connect-kafka',
                     'enterprise/user-guide/connect-database/connect-elasticsearch',
                     'enterprise/user-guide/connect-database/connect-activemq',
                     'enterprise/user-guide/connect-database/connect-rabbitmq',
                     'enterprise/user-guide/connect-database/connect-rocketmq',
                     'enterprise/user-guide/connect-database/connect-clickhouse',
                     'enterprise/user-guide/connect-database/connect-doris',
                     'enterprise/user-guide/connect-database/connect-gbase-8a',
                     'enterprise/user-guide/connect-database/connect-gbase-8s',
                     'enterprise/user-guide/connect-database/connect-oceanbase',
                     'enterprise/user-guide/connect-database/connect-mariadb',
                     'enterprise/user-guide/connect-database/connect-db2',
                     'enterprise/user-guide/connect-database/connect-dummy',
                    ]
             },
             {
              type: 'category',
              label: '数据管道',
              link: {type: 'doc', id: 'enterprise/user-guide/data-pipeline/README'},
              items:[
                    {
                     type: 'category',
                     label: '数据复制',
                     link: {type: 'doc', id: 'enterprise/user-guide/data-pipeline/copy-data/README'},
                     items:[
                            'enterprise/user-guide/data-pipeline/copy-data/create-task',
                            'enterprise/user-guide/data-pipeline/copy-data/monitor-task',
                           ]
                    },
                    {
                     type: 'category',
                     label: '数据开发',
                     link: {type: 'doc', id: 'enterprise/user-guide/data-pipeline/data-development/README'},
                     items:[
                            'enterprise/user-guide/data-pipeline/data-development/create-task',
                            'enterprise/user-guide/data-pipeline/data-development/manage-task',
                            'enterprise/user-guide/data-pipeline/data-development/process-node',
                            'enterprise/user-guide/data-pipeline/data-development/monitor-task',
                           ]
                    },
                    'enterprise/user-guide/data-pipeline/manage-function',
                    'enterprise/user-guide/data-pipeline/custom-node',
                    'enterprise/user-guide/data-pipeline/share-mining',
                    'enterprise/user-guide/data-pipeline/share-cache',
                    ]
             },
             'enterprise/user-guide/data-discovery',
             {
              type: 'category',
              label: '数据服务',
              link: {type: 'doc', id: 'enterprise/user-guide/data-service/README'},
              items:[
                     'enterprise/user-guide/data-service/create-api-service',
                     'enterprise/user-guide/data-service/create-api-client',
                     'enterprise/user-guide/data-service/create-api-server',
                     'enterprise/user-guide/data-service/audit-api',
                     'enterprise/user-guide/data-service/monitor-api-request',
                    ]
             },
             {
              type: 'category',
              label: '系统管理',
              link: {type: 'doc', id: 'enterprise/user-guide/manage-system/README'},
              items:[
                     'enterprise/user-guide/manage-system/manage-cluster',
                    ]
             },
             {
              type: 'category',
              label: '其他设置',
              link: {type: 'doc', id: 'enterprise/user-guide/other-settings/README'},
              items:[
                     'enterprise/user-guide/other-settings/system-settings',
                     'enterprise/user-guide/other-settings/manage-license',
                     'enterprise/user-guide/other-settings/check-version',
                    ]
             },
             'enterprise/user-guide/notification',
        ]
    },
  'enterprise/release-notes',
  'enterprise/faq',
  'enterprise/support',
 ]
};

module.exports = sidebars;
