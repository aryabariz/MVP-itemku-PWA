/* eslint-disable @typescript-eslint/no-explicit-any */
/* eslint-disable @typescript-eslint/explicit-function-return-type */
/* eslint-disable @typescript-eslint/explicit-module-boundary-types */
import axios from 'axios'

interface IProps {
  method?: any
  url?: any
  data?: any
  headers?: any
}

const executeAxios = async (props: IProps) => {
  try {
    const result = await axios({ ...props })

    if (result.status <= 400) {
      return result
    }

    throw new Error(`[${props.url}] status ${result.status}`)
  } catch (ex: any) {
    if (ex.response.status === 400) {
      // alert(ex.response.data.message)
    } else if (ex.response.status === 500) {
      // alert(ex.response.data.message);
    }
    // throw new Error(`[Fetch error][${url}]: ${ex}`);
    throw {
      ...ex.response.data,
      status: ex.response.status,
    }
  }
}

export default executeAxios
