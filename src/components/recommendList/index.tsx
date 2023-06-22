import React from "react";
import styles from "./styles.module.scss";
import { getCount } from "@/utils/utils";
import { LazyLoadImage } from "react-lazy-load-image-component";
import placeholderSrc from "./music.png";

type List = {
  id: number;
  picUrl: string;
  playCount: number;
  name: string;
};

type Props = {
  list: List[];
};

const RecommendList: React.FC<Props> = ({ list }) => {
  return (
    <div className={styles.wrapper}>
      <h1 className={styles.title}>推荐歌单</h1>

      <main className={styles.list}>
        {list.map((item) => (
          <div className={styles.listItem} key={item.id}>
            <div className={styles.imgWrapper}>
              <div className={styles.decorate}>
                <i className="iconfont play">&#xe885;</i>
                <span className="count">{getCount(item.playCount)}</span>
              </div>

              <LazyLoadImage
                className={styles.img}
                src={item.picUrl + "?param=300x300"}
                placeholderSrc={placeholderSrc}
                alt="music"
              />
            </div>

            <div className={styles.desc}>{item.name}</div>
          </div>
        ))}
      </main>
    </div>
  );
};

export default RecommendList;
