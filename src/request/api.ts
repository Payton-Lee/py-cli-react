import request, { EHttpMethods } from './request';

export const getIndex = () => {
    return request('./api/index', {
        method: EHttpMethods.GET,
    });
};

export const login = (user: { username: string; password: string }) => {
    return request('./api/admin/login', {
        method: EHttpMethods.POST,
        data: user,
    });
};
