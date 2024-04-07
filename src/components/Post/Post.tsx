import { ChangeEvent, FormEvent, InvalidEvent, useState } from "react";

import { DateConversion } from "../../functions/DateConversion";

import { Avatar } from "../Avatar/Avatar";
import { Comment } from "../Comment/Comment";

import styles from "./Post.module.css";

interface Author {
  name: string;
  role: string;
  avatarUrl: string;
}

interface Content {
  type: "paragraph" | "link";
  content: string;
}

export interface PostType {
  id: number;
  author: Author;
  publishedAt: Date;
  content: Content[];
}

interface PostProps {
  post: PostType;
}

export function Post({ post }: PostProps) {
  const [comments, setComments] = useState([
    {
      id: 1,
      comment: "Post muito bacana!",
      publishedAt: new Date("2023-05-12 20:00:00"),
    },
  ]);

  const [newCommentText, setNewCommentText] = useState("");

  const { dateFormatted, dateRelativeToNow, dateFormattedToIso } =
    DateConversion(post.publishedAt);

  function handleCreateNewComment(event: FormEvent) {
    event.preventDefault();

    const newCommentData = {
      id: comments.length + 1,
      comment: newCommentText,
      publishedAt: new Date(),
    };

    setComments([...comments, newCommentData]);
    setNewCommentText("");
  }

  function handleNewCommentChange(event: ChangeEvent<HTMLTextAreaElement>) {
    event.target.setCustomValidity("");
    setNewCommentText(event.target.value);
  }

  function handleNewCommentInvalid(event: InvalidEvent<HTMLTextAreaElement>) {
    event.target.setCustomValidity("Esse campo é obrigatório");
  }

  function deleteComment(commentToDelete: number) {
    const commentsWithoutDeleteOne = comments.filter(({ id }) => {
      return id !== commentToDelete;
    });

    setComments(commentsWithoutDeleteOne);
  }

  const isNewCommentEmpty = newCommentText.length === 0;

  return (
    <article className={styles.post}>
      <header className={styles.header}>
        <div className={styles.author}>
          <Avatar src={post.author.avatarUrl} />
          <div className={styles.authorInfo}>
            <h2>{post.author.name}</h2>
            <p>{post.author.role}</p>
          </div>
        </div>
        <time title={dateFormatted} dateTime={dateFormattedToIso}>
          {dateRelativeToNow}
        </time>
      </header>

      <div className={styles.content}>
        {post.content.map((line) => {
          if (line.type === "paragraph") {
            return <p key={line.content}>{line.content}</p>;
          } else if (line.type === "link") {
            return (
              <p key={line.content}>
                <a href="#">{line.content}</a>
              </p>
            );
          }
        })}
      </div>

      <form onSubmit={handleCreateNewComment} className={styles.commentForm}>
        <h3>Deixe seu feedback</h3>
        <textarea
          name="comment"
          placeholder="Deixe um comentário"
          value={newCommentText}
          onChange={handleNewCommentChange}
          onInvalid={handleNewCommentInvalid}
          required
        />
        <footer className={styles.footer}>
          <button type="submit" disabled={isNewCommentEmpty}>
            Publicar
          </button>
        </footer>
      </form>

      <div className={styles.commentList}>
        {comments
          .slice()
          .reverse()
          .map(({ id, comment, publishedAt }) => {
            return (
              <Comment
                key={id}
                id={id}
                content={comment}
                publishedAt={publishedAt}
                onDeleteComment={deleteComment}
              />
            );
          })}
      </div>
    </article>
  );
}
