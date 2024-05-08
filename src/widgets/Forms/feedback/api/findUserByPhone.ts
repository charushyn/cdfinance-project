const findUserByPhone = async (values : {mobilecode: string, phone: string}) => {
    // group.id === 1 === client
    const body = JSON.stringify({
        "offset": 0,
        "pageSize": 1,
        "fields": "id,name,email,group",
        "filters": [
            {
              "type": 4008,
              "operator": "equal",
              "value": 1
            },
            {
                "type": 4003,
                "operator": "equal",
                "value": `${values.mobilecode}${values.phone}`
            }
          ]
      })
    let response = await fetch('https://proxy-for-best-friend-illya-charushyn.onrender.com/crm/proxy/rest/contact/list', {
    method: 'POST',
    headers: {
      'accept': 'application/json',
      'Content-Type': 'application/json',
  },
  body: body,
  mode: 'cors',
  cache: 'default',
}).then((res) => {
  if(res.ok){
    return res.json()
  } else if (res.status == 500){
    throw new Error('server error')
  } else if (res.status == 401){
    throw new Error('not allowed')
  } else {
    throw new Error('unexpected error')
  } 
})
.then((res) => {
  return res
}).catch((error) => {
  throw error
})
return response
}

export {findUserByPhone}