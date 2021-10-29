<template>
  <div class="container container_base">
    <header class="tw_header">
      <div class="header_inner">
        <h1 class="header_logo sp_none"><svg xmlns="http://www.w3.org/2000/svg" width="36" height="36" class="navbar-nav-svg" id="logo" viewBox="0 0 512 416.32" role="img"><title>Twitter</title><path fill="currentColor" d="M160.83 416.32c193.2 0 298.92-160.22 298.92-298.92 0-4.51 0-9-.2-13.52A214 214 0 0 0 512 49.38a212.93 212.93 0 0 1-60.44 16.6 105.7 105.7 0 0 0 46.3-58.19 209 209 0 0 1-66.79 25.37 105.09 105.09 0 0 0-181.73 71.91 116.12 116.12 0 0 0 2.66 24c-87.28-4.3-164.73-46.3-216.56-109.82A105.48 105.48 0 0 0 68 159.6a106.27 106.27 0 0 1-47.53-13.11v1.43a105.28 105.28 0 0 0 84.21 103.06 105.67 105.67 0 0 1-47.33 1.84 105.06 105.06 0 0 0 98.14 72.94A210.72 210.72 0 0 1 25 370.84a202.17 202.17 0 0 1-25-1.43 298.85 298.85 0 0 0 160.83 46.92"></path></svg></h1>
        <nav>
          <ul class="gnav">
            <li class="current"><a href="#"><svg width="1em" height="1em" viewBox="0 0 16 16" class="bi bi-house-door-fill" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
              <path d="M6.5 10.995V14.5a.5.5 0 0 1-.5.5H2a.5.5 0 0 1-.5-.5v-7a.5.5 0 0 1 .146-.354l6-6a.5.5 0 0 1 .708 0l6 6a.5.5 0 0 1 .146.354v7a.5.5 0 0 1-.5.5h-4a.5.5 0 0 1-.5-.5V11c0-.25-.25-.5-.5-.5H7c-.25 0-.5.25-.5.495z"/>
              <path fill-rule="evenodd" d="M13 2.5V6l-2-2V2.5a.5.5 0 0 1 .5-.5h1a.5.5 0 0 1 .5.5z"/>
            </svg><span class="gnav_txt">Home</span></a></li>
            <li><a href="#"><svg width="1em" height="1em" viewBox="0 0 16 16" class="bi bi-search" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
              <path fill-rule="evenodd" d="M10.442 10.442a1 1 0 0 1 1.415 0l3.85 3.85a1 1 0 0 1-1.414 1.415l-3.85-3.85a1 1 0 0 1 0-1.415z"/>
              <path fill-rule="evenodd" d="M6.5 12a5.5 5.5 0 1 0 0-11 5.5 5.5 0 0 0 0 11zM13 6.5a6.5 6.5 0 1 1-13 0 6.5 6.5 0 0 1 13 0z"/>
            </svg><span class="gnav_txt">Explore</span></a></li>
            <li><a href="#"><svg width="1em" height="1em" viewBox="0 0 16 16" class="bi bi-bell" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
              <path d="M8 16a2 2 0 0 0 2-2H6a2 2 0 0 0 2 2z"/>
              <path fill-rule="evenodd" d="M8 1.918l-.797.161A4.002 4.002 0 0 0 4 6c0 .628-.134 2.197-.459 3.742-.16.767-.376 1.566-.663 2.258h10.244c-.287-.692-.502-1.49-.663-2.258C12.134 8.197 12 6.628 12 6a4.002 4.002 0 0 0-3.203-3.92L8 1.917zM14.22 12c.223.447.481.801.78 1H1c.299-.199.557-.553.78-1C2.68 10.2 3 6.88 3 6c0-2.42 1.72-4.44 4.005-4.901a1 1 0 1 1 1.99 0A5.002 5.002 0 0 1 13 6c0 .88.32 4.2 1.22 6z"/>
            </svg><span class="gnav_txt">Notifications</span></a></li>
            <li><a href="#"><svg width="1em" height="1em" viewBox="0 0 16 16" class="bi bi-envelope" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
              <path fill-rule="evenodd" d="M0 4a2 2 0 0 1 2-2h12a2 2 0 0 1 2 2v8a2 2 0 0 1-2 2H2a2 2 0 0 1-2-2V4zm2-1a1 1 0 0 0-1 1v.217l7 4.2 7-4.2V4a1 1 0 0 0-1-1H2zm13 2.383l-4.758 2.855L15 11.114v-5.73zm-.034 6.878L9.271 8.82 8 9.583 6.728 8.82l-5.694 3.44A1 1 0 0 0 2 13h12a1 1 0 0 0 .966-.739zM1 11.114l4.758-2.876L1 5.383v5.73z"/>
            </svg><span class="gnav_txt">Message</span></a></li>
            <li class="sp_none"><a href="#"><svg width="1em" height="1em" viewBox="0 0 16 16" class="bi bi-bookmark" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
              <path fill-rule="evenodd" d="M2 2a2 2 0 0 1 2-2h8a2 2 0 0 1 2 2v13.5a.5.5 0 0 1-.777.416L8 13.101l-5.223 2.815A.5.5 0 0 1 2 15.5V2zm2-1a1 1 0 0 0-1 1v12.566l4.723-2.482a.5.5 0 0 1 .554 0L13 14.566V2a1 1 0 0 0-1-1H4z"/>
            </svg><span class="gnav_txt">Bookmarks</span></a></li>
            <li class="sp_none"><a href="#"><svg width="1em" height="1em" viewBox="0 0 16 16" class="bi bi-file-text" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
              <path fill-rule="evenodd" d="M4 0h8a2 2 0 0 1 2 2v12a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V2a2 2 0 0 1 2-2zm0 1a1 1 0 0 0-1 1v12a1 1 0 0 0 1 1h8a1 1 0 0 0 1-1V2a1 1 0 0 0-1-1H4z"/>
              <path fill-rule="evenodd" d="M4.5 10.5A.5.5 0 0 1 5 10h3a.5.5 0 0 1 0 1H5a.5.5 0 0 1-.5-.5zm0-2A.5.5 0 0 1 5 8h6a.5.5 0 0 1 0 1H5a.5.5 0 0 1-.5-.5zm0-2A.5.5 0 0 1 5 6h6a.5.5 0 0 1 0 1H5a.5.5 0 0 1-.5-.5zm0-2A.5.5 0 0 1 5 4h6a.5.5 0 0 1 0 1H5a.5.5 0 0 1-.5-.5z"/>
            </svg><span class="gnav_txt">Lists</span></a></li>
            <li class="sp_none"><a href="#"><svg width="1em" height="1em" viewBox="0 0 16 16" class="bi bi-person" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
              <path fill-rule="evenodd" d="M10 5a2 2 0 1 1-4 0 2 2 0 0 1 4 0zM8 8a3 3 0 1 0 0-6 3 3 0 0 0 0 6zm6 5c0 1-1 1-1 1H3s-1 0-1-1 1-4 6-4 6 3 6 4zm-1-.004c-.001-.246-.154-.986-.832-1.664C11.516 10.68 10.289 10 8 10c-2.29 0-3.516.68-4.168 1.332-.678.678-.83 1.418-.832 1.664h10z"/>
            </svg><span class="gnav_txt">Profile</span></a></li>
            <li class="sp_none"><a href="#"><svg width="1em" height="1em" viewBox="0 0 16 16" class="bi bi-three-dots" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
              <path fill-rule="evenodd" d="M3 9.5a1.5 1.5 0 1 1 0-3 1.5 1.5 0 0 1 0 3zm5 0a1.5 1.5 0 1 1 0-3 1.5 1.5 0 0 1 0 3zm5 0a1.5 1.5 0 1 1 0-3 1.5 1.5 0 0 1 0 3z"/>
            </svg><span class="gnav_txt">More</span></a></li>
          </ul>
        </nav>
        <el-button type="text" @click="dialogVisible = true" class="btn btn-primary btn_tweet"><svg width="1em" height="1em" viewBox="0 0 16 16" class="bi bi-pencil-square" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
          <path d="M15.502 1.94a.5.5 0 0 1 0 .706L14.459 3.69l-2-2L13.502.646a.5.5 0 0 1 .707 0l1.293 1.293zm-1.75 2.456l-2-2L4.939 9.21a.5.5 0 0 0-.121.196l-.805 2.414a.25.25 0 0 0 .316.316l2.414-.805a.5.5 0 0 0 .196-.12l6.813-6.814z"/>
          <path fill-rule="evenodd" d="M1 13.5A1.5 1.5 0 0 0 2.5 15h11a1.5 1.5 0 0 0 1.5-1.5v-6a.5.5 0 0 0-1 0v6a.5.5 0 0 1-.5.5h-11a.5.5 0 0 1-.5-.5v-11a.5.5 0 0 1 .5-.5H9a.5.5 0 0 0 0-1H2.5A1.5 1.5 0 0 0 1 2.5v11z"/>
        </svg><span class="gnav_txt">Tweet</span></el-button>
      </div><!--hedaer_inner-->
    </header><!--/ header -->

    <main class="tw_main">
      <div class="posts_wrapper">
        <div class="login_wrapper">
            <!--ログイン時にはフォームとログインアウトボタンを表示  -->
            <div v-if="user.uid" key="login">
              <button @click="logOut" class="btn btn-primary">ログアウト</button>
              <p>{{user.email}}</p>
            </div>
            <!-- 未ログイン時にはログインボタンを表示 -->
            <div v-else key="logout">
              <button @click="logIn" class="btn btn-primary">ログイン</button>
            </div>
        </div>
        <div class="home_post_edit_inner">
          <div class="sp_header">
            <div class="sp_header_icon pc_none"><a href="#"><img src="@/assets/images/logo.jpg" width="400" height="400" alt="MetalHammer"></a></div>
            <h1 class="home_post_edit_inner_ttl">Home</h1>
          </div><!--sp_header-->
            <div class="home_post_edit">
            <div class="home_post_edit_icon"><a href="#"><img src="@/assets/images/logo.jpg" width="400" height="400" alt="MetalHammer"></a></div>
            <div class="home_post_edit_field">
              <input type="text" placeholder="What's happening?">
              <div class="home_post_edit_field_btn_wrapper">
                <ul class="home_post_edit_field_icon">
                  <li><a href="#"><svg width="1.0625em" height="1em" viewBox="0 0 17 16" class="bi bi-image" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
                    <path fill-rule="evenodd" d="M14.002 2h-12a1 1 0 0 0-1 1v9l2.646-2.354a.5.5 0 0 1 .63-.062l2.66 1.773 3.71-3.71a.5.5 0 0 1 .577-.094L15.002 9.5V3a1 1 0 0 0-1-1zm-12-1a2 2 0 0 0-2 2v10a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V3a2 2 0 0 0-2-2h-12zm4 4.5a1.5 1.5 0 1 1-3 0 1.5 1.5 0 0 1 3 0z"/>
                  </svg></a></li>
                  <li><a href="#"><svg width="1em" height="1em" viewBox="0 0 16 16" class="bi bi-bar-chart-line horizontal" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
                    <path fill-rule="evenodd" d="M11 2a1 1 0 0 1 1-1h2a1 1 0 0 1 1 1v12h.5a.5.5 0 0 1 0 1H.5a.5.5 0 0 1 0-1H1v-3a1 1 0 0 1 1-1h2a1 1 0 0 1 1 1v3h1V7a1 1 0 0 1 1-1h2a1 1 0 0 1 1 1v7h1V2zm1 12h2V2h-2v12zm-3 0V7H7v7h2zm-5 0v-3H2v3h2z"/>
                  </svg></a></li>
                  <li><a href="#"><svg width="1em" height="1em" viewBox="0 0 16 16" class="bi bi-emoji-smile" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
                    <path fill-rule="evenodd" d="M8 15A7 7 0 1 0 8 1a7 7 0 0 0 0 14zm0 1A8 8 0 1 0 8 0a8 8 0 0 0 0 16z"/>
                    <path fill-rule="evenodd" d="M4.285 9.567a.5.5 0 0 1 .683.183A3.498 3.498 0 0 0 8 11.5a3.498 3.498 0 0 0 3.032-1.75.5.5 0 1 1 .866.5A4.498 4.498 0 0 1 8 12.5a4.498 4.498 0 0 1-3.898-2.25.5.5 0 0 1 .183-.683z"/>
                    <path d="M7 6.5C7 7.328 6.552 8 6 8s-1-.672-1-1.5S5.448 5 6 5s1 .672 1 1.5zm4 0c0 .828-.448 1.5-1 1.5s-1-.672-1-1.5S9.448 5 10 5s1 .672 1 1.5z"/>
                  </svg></a></li>
                  <li><a href="#"><svg width="1em" height="1em" viewBox="0 0 16 16" class="bi bi-calendar3" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
                    <path fill-rule="evenodd" d="M14 0H2a2 2 0 0 0-2 2v12a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V2a2 2 0 0 0-2-2zM1 3.857C1 3.384 1.448 3 2 3h12c.552 0 1 .384 1 .857v10.286c0 .473-.448.857-1 .857H2c-.552 0-1-.384-1-.857V3.857z"/>
                    <path fill-rule="evenodd" d="M6.5 7a1 1 0 1 0 0-2 1 1 0 0 0 0 2zm3 0a1 1 0 1 0 0-2 1 1 0 0 0 0 2zm3 0a1 1 0 1 0 0-2 1 1 0 0 0 0 2zm-9 3a1 1 0 1 0 0-2 1 1 0 0 0 0 2zm3 0a1 1 0 1 0 0-2 1 1 0 0 0 0 2zm3 0a1 1 0 1 0 0-2 1 1 0 0 0 0 2zm3 0a1 1 0 1 0 0-2 1 1 0 0 0 0 2zm-9 3a1 1 0 1 0 0-2 1 1 0 0 0 0 2zm3 0a1 1 0 1 0 0-2 1 1 0 0 0 0 2zm3 0a1 1 0 1 0 0-2 1 1 0 0 0 0 2z"/>
                  </svg></a></li>
                </ul>
                <button class="btn btn-primary">Tweet</button>
              </div><!--/home_post_edit_field_btn_wrapper-->
            </div><!--/home_post_edit_field-->
          </div><!--/home_post_edit-->
        </div><!--/home_post_edit_inner-->


        <div class="posts_inner" v-if="user.uid" key="login">
          <!--///////// ここからTweet投稿 ///////////-->
          <article class="posts_container" v-for="(tweet,key) in tweetList" v-bind:key="key">
            <div class="post_author"><a href="#"><img src="@/assets/images/nJwipzLT_400x400.jpg" width="400" height="400" alt="MetalHammer"></a></div>
            <div class="post_content">
              <h2 class="post_account_name"><a href="#">Kerrang! Magazine<span class="post_account">@KerrangMagazine - 1h</span></a></h2>
              <div class="post_content_txt">
                <p class="tweet_txt">{{tweet.tweet}}</p>


              </div><!--post_content_txt-->
              <div class="function_btn">
                <ul>
                  <li><a href="#"><svg width="1em" height="1em" viewBox="0 0 16 16" class="bi bi-chat" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
                    <path fill-rule="evenodd" d="M2.678 11.894a1 1 0 0 1 .287.801 10.97 10.97 0 0 1-.398 2c1.395-.323 2.247-.697 2.634-.893a1 1 0 0 1 .71-.074A8.06 8.06 0 0 0 8 14c3.996 0 7-2.807 7-6 0-3.192-3.004-6-7-6S1 4.808 1 8c0 1.468.617 2.83 1.678 3.894zm-.493 3.905a21.682 21.682 0 0 1-.713.129c-.2.032-.352-.176-.273-.362a9.68 9.68 0 0 0 .244-.637l.003-.01c.248-.72.45-1.548.524-2.319C.743 11.37 0 9.76 0 8c0-3.866 3.582-7 8-7s8 3.134 8 7-3.582 7-8 7a9.06 9.06 0 0 1-2.347-.306c-.52.263-1.639.742-3.468 1.105z"/>
                  </svg></a>12</li>
                  <li><a href="#"><svg width="1em" height="1em" viewBox="0 0 16 16" class="bi bi-arrow-repeat" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
                    <path d="M11.534 7h3.932a.25.25 0 0 1 .192.41l-1.966 2.36a.25.25 0 0 1-.384 0l-1.966-2.36a.25.25 0 0 1 .192-.41zm-11 2h3.932a.25.25 0 0 0 .192-.41L2.692 6.23a.25.25 0 0 0-.384 0L.342 8.59A.25.25 0 0 0 .534 9z"/>
                    <path fill-rule="evenodd" d="M8 3c-1.552 0-2.94.707-3.857 1.818a.5.5 0 1 1-.771-.636A6.002 6.002 0 0 1 13.917 7H12.9A5.002 5.002 0 0 0 8 3zM3.1 9a5.002 5.002 0 0 0 8.757 2.182.5.5 0 1 1 .771.636A6.002 6.002 0 0 1 2.083 9H3.1z"/>
                  </svg></a>21</li>
                  <li><a href="#"><svg width="1em" height="1em" viewBox="0 0 16 16" class="bi bi-heart" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
                    <path fill-rule="evenodd" d="M8 2.748l-.717-.737C5.6.281 2.514.878 1.4 3.053c-.523 1.023-.641 2.5.314 4.385.92 1.815 2.834 3.989 6.286 6.357 3.452-2.368 5.365-4.542 6.286-6.357.955-1.886.838-3.362.314-4.385C13.486.878 10.4.28 8.717 2.01L8 2.748zM8 15C-7.333 4.868 3.279-3.04 7.824 1.143c.06.055.119.112.176.171a3.12 3.12 0 0 1 .176-.17C12.72-3.042 23.333 4.867 8 15z"/>
                  </svg></a>120</li>
                </ul>
              </div>
            </div><!--post_content-->
          </article>
          <!--///////// ここまでTweet投稿 ///////////-->

          <!-- -----------ここからモーダルウィンドーーーーーーーーーーーーーーーーーーーーーー -->
                    <el-dialog :visible.sync="dialogVisible" width="80%">
            <form action="" @submit.prevent="doSend" class="form">
              <el-input v-model="input"
                @keypress.enter.exact.prevent="doSend"
                autosize type="textarea"
                placeholder="Let's Tweet!"
                class="home_tweet">
              </el-input>
              <div class="modal_submit">
                <button @click="dialogVisible = false" type="submit" class="send-button btn btn-primary">Tweet</button>
              </div><!--modal_submit-->
            </form>
          </el-dialog>
          <!-- ---------------------------------------------------------------- -->
          

        </div><!--posts_inner-->
        <!-- 未ログインの場合は下記を表示 -->
        <div v-else key="logout" class="notLogin">ログインしてください</div>

      </div><!--/post_wrapper-->
      <Side />
    </main>

  </div>
</template>

<script>
// import Header from '@/components/Header.vue'
// import Posts from '../components/Posts.vue'
import firebase from 'firebase/compat/app';
import "firebase/compat/auth";
import "firebase/compat/database"
import Side from '../components/Side.vue'

export default {
  data() {
    return {
      dialogVisible: false,
      input: '', //投稿入力
      tweerList: [], //取得したTweet
      user: {}, //ユーザー情報
    };
  },
  components: {
    // Header,
    // Posts,
    Side
  },
  // ーーーーーーーーーーーーーーーーーーーーーーーーーーー格納されたデータベースからデータを取得ーーーーーーーーーーーーーー
  created() {
    firebase.auth().onAuthStateChanged(user => {
      this.user = user ? user : {}
      const ref_tweets = firebase.database().ref('tweets')
      if (user) {
        this.tweetList = []
        //childAddedアイテムのリストを取得するか、アイテムのリストへの追加がないかをリッスンする
        //limitToLast後方からn件取得
        ref_tweets.limitToLast(20).on('child_added', this.childAdded);
      } else {
        ref_tweets.limitToLast(20).off('child_added', this.childAdded);
      }
      })
    },
  methods: {
    // --------------------------------------ログイン機能-----------------------------------------
    logIn() {
      var provider = new firebase.auth.GoogleAuthProvider()
      firebase.auth().signInWithPopup(provider)
      .then(obj => {
        console.log('Create account: ' + obj.user.email)
      })
      .catch(error => {
        alert(error.message)
      })
    },
    logOut() {
      firebase.auth().signOut()
    },
    // -----------------------------------------------------------------------------------------
    childAdded(snap) {
      //スナップショットとは、ある時点における特定のデータベース参照にあるデータの全体像を全体像を写し撮ったもの
      //スナップショットのval(),getValue()を呼び出すと、データの言語固有のオブジェクト表現が返される
      const tweets = snap.val()
      this.tweetList.push({
        key: snap.key,
        tweet: tweets.tweet
      })
    },
// ーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーー

    doSend() {
      // return this.input
      if (this.input == '') return;
      // let tweet = this.input;
      // this.tweetList.push(tweet);
      // this.input = '';
      firebase.database().ref('tweets').push({
        tweet: this.input,
      }, () => {
        this.input = '' //フォームを空にする
      })
    }
  }
}
</script>


<style scoped>
.posts_inner {
  display: flex;
  flex-direction: column-reverse;
}
.tweet_txt {
  white-space: pre-wrap;
}

</style>