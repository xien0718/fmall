import request from './request';
const getFoundList = () => request({
    url: '/mock/found/getfoundlist',
    method: 'post'
})
const getFoundDetail = () => request({
    url: '/mock/found/getfounddetail',
    method: 'post'
});
export {
    getFoundList,
    getFoundDetail
}