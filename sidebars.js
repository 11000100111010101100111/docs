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
     label: '产品计费',
     link: {type: 'doc', id: 'cloud/billing/README'},
     items: [
            'cloud/billing/billing-overview',
            'cloud/billing/purchase',
            'cloud/billing/renew-subscribe',
            'cloud/billing/expiration',
            'cloud/billing/refund',
     ]
    },
    {
     type: 'category',
     label: '快速入门',
     link: {type: 'doc', id: 'cloud/quick-start/README'},
     items: [
            {
             type: 'category',
             label: '步骤一：安装 Agent',
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
            'cloud/quick-start/create-task',
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
                    {
                       type: 'category',
                       label: '认证数据源',
                       link: {type: 'doc', id: 'cloud/prerequisites/config-database/certified/README'},
                       items: [
                              'cloud/prerequisites/config-database/certified/clickhouse',
                              'cloud/prerequisites/config-database/certified/kafka',
                              'cloud/prerequisites/config-database/certified/mysql',
                              'cloud/prerequisites/config-database/certified/mongodb',
                              'cloud/prerequisites/config-database/certified/oracle',
                              'cloud/prerequisites/config-database/certified/postgresql',
                              'cloud/prerequisites/config-database/certified/sqlserver',
                       ]
                      },
                      {
                       type: 'category',
                       label: 'Beta 数据源',
                       link: {type: 'doc', id: 'cloud/prerequisites/config-database/beta/README'},
                       items: [
                             'cloud/prerequisites/config-database/beta/apache-doris',
                             'cloud/prerequisites/config-database/beta/larktask',
                             'cloud/prerequisites/config-database/beta/mariadb',
                             'cloud/prerequisites/config-database/beta/tidb',
                       ]
                      },
                      {
                       type: 'category',
                       label: 'Alpha 数据源',
                       link: {type: 'doc', id: 'cloud/prerequisites/config-database/alpha/README'},
                       items: [
                             'cloud/prerequisites/config-database/alpha/activemq',
                             'cloud/prerequisites/config-database/alpha/elasticsearch',
                             'cloud/prerequisites/config-database/alpha/opengauss',
                             'cloud/prerequisites/config-database/alpha/rabbitmq',
                             'cloud/prerequisites/config-database/alpha/rocketmq',
                             'cloud/prerequisites/config-database/alpha/vika',
                       ]
                      },                      
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
                    {
                     type: 'category',
                     label: '认证数据源',
                     link: {type: 'doc', id: 'cloud/user-guide/connect-database/certified/README'},
                     items:[
                            'cloud/user-guide/connect-database/certified/connect-clickhouse',
                            'cloud/user-guide/connect-database/certified/connect-kafka',
                            'cloud/user-guide/connect-database/certified/connect-mysql',
                            'cloud/user-guide/connect-database/certified/connect-mongodb',
                            'cloud/user-guide/connect-database/certified/connect-oracle',
                            'cloud/user-guide/connect-database/certified/connect-postgresql',
                            'cloud/user-guide/connect-database/certified/connect-sqlserver',
                           ]
                    }, 
                    {
                     type: 'category',
                     label: 'Beta 数据源',
                     link: {type: 'doc', id: 'cloud/user-guide/connect-database/beta/README'},
                     items:[
                            'cloud/user-guide/connect-database/beta/connect-bigquery',
                            'cloud/user-guide/connect-database/beta/connect-dummydb',
                            'cloud/user-guide/connect-database/beta/connect-larktask',
                            'cloud/user-guide/connect-database/beta/connect-mariadb',
                            'cloud/user-guide/connect-database/beta/connect-tidb',
                           ]
                    },
                    {
                     type: 'category',
                     label: 'Alpha 数据源',
                     link: {type: 'doc', id: 'cloud/user-guide/connect-database/alpha/README'},
                     items:[
                            'cloud/user-guide/connect-database/alpha/connect-adb-mysql',
                            'cloud/user-guide/connect-database/alpha/connect-adb-pg',
                            'cloud/user-guide/connect-database/alpha/connect-elasticsearch',
                            'cloud/user-guide/connect-database/alpha/connect-hazelcast-cloud',
                            'cloud/user-guide/connect-database/alpha/connect-mq',
                            'cloud/user-guide/connect-database/alpha/connect-opengauss',
                            'cloud/user-guide/connect-database/alpha/connect-tablestore',
                           ]
                    }, 
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
                    'cloud/user-guide/copy-data/monitor-task',
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
             'cloud/user-guide/custom-node',
             'cloud/user-guide/operation-log',
             'cloud/user-guide/trouble-shooting-connection',
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
                    'cloud/best-practice/mysql-as-source/mysql-to-bigquery',
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
            {
             type: 'category',
             label: 'Oracle 实时同步',
             link: {type: 'doc', id: 'cloud/best-practice/oracle-as-source/README'},
             items:[
                    'cloud/best-practice/oracle-as-source/oracle-to-tablestore',
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
     {
      type: 'category',
      label: '附录',
      link: {type: 'doc', id: 'cloud/appendix/README'},
      items: [
              'cloud/appendix/standard-js',
              'cloud/appendix/enhanced-js'
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
             'enterprise/introduction/architecture',
             'enterprise/introduction/features',
             'enterprise/introduction/benefits',
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
            {
             type: 'category',
             label: '部署 Tapdata',
             link: {type: 'doc', id: 'enterprise/quick-start/install/README'},
             items: [
                    'enterprise/quick-start/install/install-tapdata-ha',
                    'enterprise/quick-start/install/install-tapdata-stand-alone',                    
             ]
            },
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
             label: '认证数据源',
             link: {type: 'doc', id: 'enterprise/prerequisites/certified/README'},
             items: [
                     'enterprise/prerequisites/certified/clickhouse',
                     'enterprise/prerequisites/certified/kafka',
                     'enterprise/prerequisites/certified/mysql',
                     'enterprise/prerequisites/certified/mongodb',
                     'enterprise/prerequisites/certified/oracle',
                     'enterprise/prerequisites/certified/postgresql',
                     'enterprise/prerequisites/certified/sqlserver',
             ]
            },
            {
             type: 'category',
             label: 'Beta 数据源',
             link: {type: 'doc', id: 'enterprise/prerequisites/beta/README'},
             items: [
                     'enterprise/prerequisites/beta/apache-doris',
                     'enterprise/prerequisites/beta/larktask', 
                     'enterprise/prerequisites/beta/lark-im',
                     'enterprise/prerequisites/beta/mariadb', 
                     'enterprise/prerequisites/beta/mongodb-atlas', 
                     'enterprise/prerequisites/beta/selectdb',
                     'enterprise/prerequisites/beta/tidb',
                     'enterprise/prerequisites/beta/zoho-crm',
             ]
            },                        
            {
             type: 'category',
             label: 'Alpha 数据源',
             link: {type: 'doc', id: 'enterprise/prerequisites/alpha/README'},
             items: [
                     'enterprise/prerequisites/alpha/activemq',                     
                     'enterprise/prerequisites/alpha/elasticsearch',
                     'enterprise/prerequisites/alpha/opengauss',                     
                     'enterprise/prerequisites/alpha/rabbitmq',
                     'enterprise/prerequisites/alpha/rocketmq',                     
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
                    {
                     type: 'category',
                     label: '认证数据源',
                     link: {type: 'doc', id: 'enterprise/user-guide/connect-database/certified/README'},
                     items:[
                            'enterprise/user-guide/connect-database/certified/connect-clickhouse',
                            'enterprise/user-guide/connect-database/certified/connect-kafka',
                            'enterprise/user-guide/connect-database/certified/connect-mysql',
                            'enterprise/user-guide/connect-database/certified/connect-mongodb',
                            'enterprise/user-guide/connect-database/certified/connect-oracle',
                            'enterprise/user-guide/connect-database/certified/connect-postgresql',
                            'enterprise/user-guide/connect-database/certified/connect-sqlserver',
                           ]
                    },
                    {
                     type: 'category',
                     label: 'Beta 数据源',
                     link: {type: 'doc', id: 'enterprise/user-guide/connect-database/beta/README'},
                     items:[
                            'enterprise/user-guide/connect-database/beta/custom-connection',
                            'enterprise/user-guide/connect-database/beta/connect-db2',
                            'enterprise/user-guide/connect-database/beta/connect-doris',
                            'enterprise/user-guide/connect-database/beta/connect-dummy',
                            'enterprise/user-guide/connect-database/beta/connect-excel',
                            'enterprise/user-guide/connect-database/beta/connect-github',
                            'enterprise/user-guide/connect-database/beta/connect-larktask',
                            'enterprise/user-guide/connect-database/beta/connect-lark-im',
                            'enterprise/user-guide/connect-database/beta/connect-mariadb',
                            'enterprise/user-guide/connect-database/beta/connect-mongodb-atlas',
                            'enterprise/user-guide/connect-database/beta/connect-redis',
                            'enterprise/user-guide/connect-database/beta/connect-salesforce',
                            'enterprise/user-guide/connect-database/beta/connect-selectdb',
                            'enterprise/user-guide/connect-database/beta/connect-tdengine',
                            'enterprise/user-guide/connect-database/beta/connect-tidb',
                            'enterprise/user-guide/connect-database/beta/connect-zoho', 
                           ]
                    },
                    {
                     type: 'category',
                     label: 'Alpha 数据源',
                     link: {type: 'doc', id: 'enterprise/user-guide/connect-database/alpha/README'},
                     items:[
                            'enterprise/user-guide/connect-database/alpha/connect-activemq',
                            'enterprise/user-guide/connect-database/alpha/connect-elasticsearch',
                            'enterprise/user-guide/connect-database/alpha/connect-gbase-8a',
                            'enterprise/user-guide/connect-database/alpha/connect-gbase-8s', 
                            'enterprise/user-guide/connect-database/alpha/connect-oceanbase',
                            'enterprise/user-guide/connect-database/alpha/connect-opengauss',
                            'enterprise/user-guide/connect-database/alpha/connect-rabbitmq',
                            'enterprise/user-guide/connect-database/alpha/connect-rocketmq',
                           ]
                    },
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
                    'enterprise/user-guide/data-pipeline/verify-data',
                    'enterprise/user-guide/data-pipeline/manage-function',
                    'enterprise/user-guide/data-pipeline/custom-node',
                    'enterprise/user-guide/data-pipeline/share-mining',
                    'enterprise/user-guide/data-pipeline/share-cache',
                    'enterprise/user-guide/data-pipeline/pre-check',
                    'enterprise/user-guide/data-pipeline/error-code-solution',
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
                     'enterprise/user-guide/manage-system/manage-external-storage',
                     'enterprise/user-guide/manage-system/manage-user',
                     'enterprise/user-guide/manage-system/manage-role',
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
    {
     type: 'category',
     label: '最佳实践',
     link: {type: 'doc', id: 'enterprise/best-practice/README'},
     items: [
            'enterprise/best-practice/excel-to-mysql',
            'enterprise/best-practice/mysql-to-redis'
        ]
    },
  'enterprise/release-notes',
    {
     type: 'category',
     label: '常见问题',
     link: {type: 'doc', id: 'enterprise/faq/README'},
     items: [
            'enterprise/faq/use-product',
            'enterprise/faq/operation'
        ]
    },
    {
     type: 'category',
     label: '附录',
     link: {type: 'doc', id: 'enterprise/appendix/README'},
     items: [
            'enterprise/appendix/standard-js',
            'enterprise/appendix/enhanced-js'
        ]
    },
  'enterprise/support',
 ]
};

module.exports = sidebars;
