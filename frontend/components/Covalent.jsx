let headers = new Headers();
    headers.set('Authorization', "Bearer ckey_4143cc2ad74e4b94a75168f7de4")

fetch("https://api.covalenthq.com/v1/eth-mainnet/address/0x495De456E4DBf47879669BC5bf762aEf72EE5eEA/transactions_v3/?",
 {method: 'GET', headers: headers})
  .then((resp) => resp.json())
  .then((data) => console.log(data));

  key = cqt_rQcfYxCwrQPVcjy8t6QgFCq3px7x