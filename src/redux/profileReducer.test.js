import profileReducer, {addPost, deletePost} from "./profileReducer";

const state = {
    totalCountPosts: 2,
    postsData:
        [
            {
                postId: 1,
                text: "1234",
                countLikes: 5,
                isLiking: false,
            },
            {
                postId: 2,
                text: "qwerty",
                countLikes: 10,
                isLiking: true,
            },
        ]
}

it('after added postsData length should be incrementing', function () {
    const action = addPost("Hello world!");
    const newState = profileReducer(state, action);
    expect(newState.postsData.length).toBe(3);
    expect(newState.totalCountPosts).toBe(3);
});

it('added post should be correct', function () {
    const action = addPost("Hello world!");
    const newState = profileReducer(state, action);
    expect(newState.postsData[2].postId).toBe(3);
    expect(newState.postsData[2].text).toBe("Hello world!");
    expect(newState.postsData[2].countLikes).toBe(0);
    expect(newState.postsData[2].isLiking).toBe(false);
});

it('after deleting postsData length should be decrementing', function () {
    const action = deletePost(1);
    const newState = profileReducer(state, action);
    expect(newState.postsData.length).toBe(1);
    expect(newState.totalCountPosts).toBe(2);
});

it('after deleting postsData length shouldn\'t be decrementing with incorrect id', function () {
    const action = deletePost(-1);
    const newState = profileReducer(state, action);
    expect(newState.postsData.length).toBe(2);
    expect(newState.totalCountPosts).toBe(2);
});

