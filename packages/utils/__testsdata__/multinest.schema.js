/**
 * 测试数据
 * @type {{schema: [{schema: [{schema: [{ui: {type: string}, fieldKey: string, type: string, title: string}, {ui: {type: string}, fieldKey: string, type: string, title: string}], ui: {type: string}, fieldKey: string, type: string, title: string}, {schema: [{ui: {type: string}, fieldKey: string, type: string, title: string}], ui: {type: string}, fieldKey: string, type: string, title: string}], ui: {type: string}, fieldKey: string, type: string, title: string}, {fieldKey: string, type: string, title: string, 'ui:type': string, items: {schema: [{fieldKey: string, type: string, title: string, 'ui:type': string, items: {ui: {type: string}, type: string}}], type: string, title: string, 'ui:type': string}}]}}
 */
export const unitedSchema = {
  theme: 'antd',
  validateTime: 'submit',
  type: 'object',
  ui: {
    mode: 'edit',
  },
  schema: [
    {
      type: 'object',
      fieldKey: 'nestObject',
      title:
        "2层嵌套对象 { personInfo: { erp: 'drip', age: 1 }, address: { location: '上海' } }",
      ui: {
        type: 'object',
      },
      schema: [
        {
          type: 'object',
          fieldKey: 'personInfo',
          title: '个人信息',
          ui: { type: 'object' },
          schema: [
            {
              type: 'string',
              fieldKey: 'erp',
              title: 'ERP',
              ui: { type: 'input' },
            },
            {
              type: 'number',
              fieldKey: 'age',
              title: '年龄',
              ui: { type: 'number' },
            },
          ],
        },
        {
          type: 'object',
          fieldKey: 'address',
          title: '住宅地址',
          ui: { type: 'object' },
          schema: [
            {
              type: 'string',
              fieldKey: 'location',
              title: '地址',
              ui: { type: 'textarea' },
            },
          ],
        },
      ],
    },
    {
      type: 'array',
      fieldKey: 'nestArray',
      title: '3层嵌套数组 [{ xxx: [1,2,3] }, { xxx: [3,4,5] }...]',
      ui: { type: 'array' },
      items: {
        type: 'object',
        title: '',
        ui: { type: 'object' },
        schema: [
          {
            type: 'array',
            fieldKey: 'xxx',
            title: 'xxx',
            ui: { type: 'array' },
            items: {
              type: 'string',
              ui: {
                type: 'input',
              },
            },
          },
        ],
      },
    },
  ],
}

/**
 * 验证数据
 * @type {{dataSchema: {validateTime: string, type: string, properties: {nestArray: {type: string, title: string, items: {type: string, title: string, properties: {xxx: {type: string, title: string, items: {type: string}}}}}, nestObject: {type: string, title: string, properties: {address: {type: string, title: string, properties: {location: {type: string, title: string}}}, personInfo: {type: string, title: string, properties: {erp: {type: string, title: string}, age: {type: string, title: string}}}}}}}, uiSchema: {theme: string, properties: {nestArray: {type: string, properties: {$container: {type: string, properties: {xxx: {type: string, properties: {$container: {type: string}}, order: string[]}}, order: string[]}}, order: string[]}, nestObject: {type: string, properties: {address: {type: string, properties: {location: {type: string}}, order: string[]}, personInfo: {type: string, properties: {erp: {type: string}, age: {type: string}}, order: string[]}}, order: string[]}}, order: string[]}}}
 */
export const parsedSchema = {
  uiSchema: {
    theme: 'antd',
    order: ['nestObject', 'nestArray'],
    mode: 'edit',
    properties: {
      nestObject: {
        type: 'object',
        order: ['personInfo', 'address'],
        properties: {
          personInfo: {
            type: 'object',
            order: ['erp', 'age'],
            properties: {
              erp: {
                type: 'input',
              },
              age: {
                type: 'number',
              },
            },
          },
          address: {
            type: 'object',
            order: ['location'],
            properties: {
              location: {
                type: 'textarea',
              },
            },
          },
        },
      },
      nestArray: {
        type: 'array',
        order: ['$container'],
        properties: {
          $container: {
            type: 'object',
            order: ['xxx'],
            properties: {
              xxx: {
                type: 'array',
                order: ['$container'],
                properties: {
                  $container: {
                    type: 'input',
                  },
                },
              },
            },
          },
        },
      },
    },
  },
  dataSchema: {
    validateTime: 'submit',
    type: 'object',
    properties: {
      nestObject: {
        type: 'object',
        title:
          "2层嵌套对象 { personInfo: { erp: 'drip', age: 1 }, address: { location: '上海' } }",
        properties: {
          personInfo: {
            type: 'object',
            title: '个人信息',
            properties: {
              erp: {
                type: 'string',
                title: 'ERP',
              },
              age: {
                type: 'number',
                title: '年龄',
              },
            },
          },
          address: {
            type: 'object',
            title: '住宅地址',
            properties: {
              location: {
                type: 'string',
                title: '地址',
              },
            },
          },
        },
      },
      nestArray: {
        type: 'array',
        title: '3层嵌套数组 [{ xxx: [1,2,3] }, { xxx: [3,4,5] }...]',
        items: {
          type: 'object',
          title: '',
          properties: {
            xxx: {
              type: 'array',
              title: 'xxx',
              items: {
                type: 'string',
              },
            },
          },
        },
      },
    },
  },
  typePath: {
    nestObject: { fatherKey: '', type: 'object' },
    'nestObject.personInfo': { fatherKey: 'nestObject', type: 'object' },
    'nestObject.personInfo.erp': {
      fatherKey: 'nestObject.personInfo',
      type: 'string',
    },
    'nestObject.personInfo.age': {
      fatherKey: 'nestObject.personInfo',
      type: 'number',
    },
    'nestObject.address': { fatherKey: 'nestObject', type: 'object' },
    'nestObject.address.location': {
      fatherKey: 'nestObject.address',
      type: 'string',
    },
    nestArray: { fatherKey: '', type: 'array' },
    'nestArray.$container': { fatherKey: 'nestArray', type: 'object' },
    'nestArray.$container.xxx': {
      fatherKey: 'nestArray.$container',
      type: 'array',
    },
    'nestArray.$container.xxx.$container': {
      fatherKey: 'nestArray.$container.xxx',
      type: 'string',
    },
  },
}
