import React from "react";
import { Grid, List } from "semantic-ui-react";
import { Post } from "../../../app/models/post";
import PostDetails from "../details/PostDetails";
import PostForm from "../form/PostForm";
import PostList from "./PostList";

interface Props {
  posts: Post[];
  selectedPost: Post | undefined;
  selectPost: (id: string) => void;
  cancelSelectPost: () => void;
  editMode: boolean;
  openForm: (id: string) => void;
  closeForm: () => void;
}

export default function PostDashboard({
  posts,
  selectedPost,
  selectPost,
  cancelSelectPost,
  editMode,
  openForm,
  closeForm,
}: Props) {
  return (
    <Grid>
      <Grid.Column width="10">
        <PostList posts={posts} selectPost={selectPost} />
      </Grid.Column>
      <Grid.Column width="6">
        {selectedPost && !editMode && (
          <PostDetails
            post={selectedPost}
            cancelSelectPost={cancelSelectPost}
            openForm={openForm}
          />
        )}

        {/*
        
          {posts.map((post) => (
          <PostDetails  key={post.id} post={post} />
        ))}

        */}
        {editMode && <PostForm closeForm={closeForm} post={selectedPost} />}
      </Grid.Column>
    </Grid>
  );
}
