const apiKeys = require('../../apiKeys')
const RequestV0Protocol = require('./request')
const RESOURCE_TYPES = require('../../../resourceTypes')

describe('Protocol > Requests > AlterConfigs > v0', () => {
  describe('request', () => {
    test('metadata about the API', () => {
      const request = RequestV0Protocol({})
      expect(request.apiKey).toEqual(apiKeys.AlterConfigs)
      expect(request.apiVersion).toEqual(0)
      expect(request.apiName).toEqual('AlterConfigs')
    })

    test('encode', async () => {
      const { buffer } = await RequestV0Protocol({
        resources: [
          {
            type: RESOURCE_TYPES.TOPIC,
            name: 'test-topic-d7fa92c03177d87573b1-38076-21364f66-8613-47e0-b273-bc9de397515e',
            configEntries: [{ name: 'cleanup.policy', value: 'compact' }],
          },
        ],
        validateOnly: false,
      }).encode()
      expect(buffer).toEqual(Buffer.from(require('../fixtures/v0_request.json')))
    })
  })
})
