{let n=function(){let n=$("#new-post-form");n.submit((function(o){o.preventDefault(),$.ajax({type:"post",url:"/post/create",data:n.serialize(),success:function(n){let o=t(n.data.post);$("#posts-list-container>ul").prepend(o),e($(" .delete-post-button",o))},error:function(n){console.log("error="+n.responseText)}})}))},t=function(n){return $(`\n            <li id="post-${n._id}">\n                    <p>\n                    <small>\n            \n                    <a class="delete-post-button" href="/post/destroy/${n._id}" >X</a>\n            \n                    </small>\n\n                    ${n.content}\n                    <br/>\n                    <small>\n                    ${n.user.name}\n                    </small>\n                    </p>\n                    <div class="post-comments"> \n            \n                    <form action="/comment/create" method="post">\n                    <input type="text" name="content" placeholder="Type here to add comment..."  required>\n                    <input type="hidden" name="post" value="${n._id}" >\n                    <input type="submit" value="Add value">\n                    </form>\n            \n            \n                    <div id="posts-comments-list" >\n                    <ul  id="posts-comments-${n._id}">\n            \n                    </ul>\n                    </div>\n            \n                    </div>    \n            </li>\n     `)},e=function(n){$(n).click((function(t){t.preventDefault(),$.ajax({type:"get",url:$(n).prop("href"),success:function(n){console.log("post="+n.data.post_id),$("#post-"+n.data.post_id).remove()},error:function(n){console.log("error="+n.responseText)}})}))};n()}