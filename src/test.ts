import listManager,{todos} from "./index";

interface User{
    id:number,
    name:string,
}

var a = new listManager<User>();

describe("list reducer", () => {
	it("should return the initial state", () => {
		expect(a.rootReducer(undefined, {})).toEqual({
			list: [],
			isLoading: true,
		});
	});

	it("should handle add user", () => {
		expect(
			a.rootReducer(
				{
					list:[],
				},
				{
					type: todos.ADD,
					payload : {
                        id:1,
                        name: 'nazar',
                    }
				}
			)
		).toEqual({
            list: [
                {
                    id:1,
                    name: 'nazar'
                }
                ],
		});
	});
	it("should handle del user", () => {
		expect(
			a.rootReducer(
				{
                    list: [
                        {
                            id:1,
                            name: 'nazar'
                        },
                        {
                            id:1,
                            name: 'abdullah'
                        },
                        {
                            id:1,
                            name: 'test'
                        },
                        {
                            id:1,
                            name: 'paypazz'
                        },
                        ],
				},
                {
					type: todos.DELETE,
					payload : {
                        id:1,
                        name: 'nazar',
                    }
				}
			)
		).toEqual({
            list: [
                {
                    id:1,
                    name: 'abdullah'
                },
                {
                    id:1,
                    name: 'test'
                },
                {
                    id:1,
                    name: 'paypazz'
                },
                ],
		});
    });
    it("should handle update user", () => {
		expect(
			a.rootReducer(
				{
                    list: [
                        {
                            id:1,
                            name: 'nazar'
                        },
                        {
                            id:1,
                            name: 'abdullah'
                        },
                        {
                            id:1,
                            name: 'test'
                        },
                        {
                            id:1,
                            name: 'paypazz'
                        },
                        ],
				},
                {
					type: todos.UPDATE,
					payload : {
                        id:1,
                        name: 'nazar2',
                    }
				}
			)
		).toEqual({
            list: [
                {
                    id:1,
                    name: 'nazar2'
                },
                {
                    id:1,
                    name: 'abdullah'
                },
                {
                    id:1,
                    name: 'test'
                },
                {
                    id:1,
                    name: 'paypazz'
                },
                ],
		});
    });
    it("should handle update user", () => {
		expect(
			a.rootReducer(
				{
                    list: [
                        {
                            id:1,
                            name: 'nazar'
                        },
                        {
                            id:1,
                            name: 'abdullah'
                        },
                        {
                            id:1,
                            name: 'test'
                        },
                        {
                            id:1,
                            name: 'paypazz'
                        },
                        ],
				},
                {
					type: todos.CLEAR,
				}
			)
		).toEqual({
            list: [],
		});
	});
});