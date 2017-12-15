package rudaks.blog.da.jpa;

import nara.share.exception.store.AlreadyExistsException;
import nara.share.exception.store.NonExistenceException;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.PageRequest;
import org.springframework.data.domain.Sort;
import org.springframework.stereotype.Repository;
import rudaks.blog.da.jpa.jpo.PostJpo;
import rudaks.blog.da.jpa.springdata.PostRepository;
import rudaks.blog.domain.entity.Post;
import rudaks.blog.domain.store.PostStore;

import java.util.List;
import java.util.NoSuchElementException;

@Repository
public class PostJpaStore implements PostStore
{
    @Autowired
    private PostRepository postRepository;

    @Override
    public List<Post> retrieveListByCategory(String category, int offset) {
        PageRequest request = new PageRequest(offset, 10, Sort.Direction.DESC, "createdDate");
        Page<PostJpo> postJpos = postRepository.findByCategory(category, request);

        List<PostJpo> contentList = postJpos.getContent();
        return PostJpo.toDomains(contentList);
    }

    @Override
    public String create(Post post)
    {
        String id = post.getId();
        if (postRepository.exists(id))
        {
            throw new AlreadyExistsException(String.format("Post jpo[ID:%s already exit", id));
        }

        postRepository.save(new PostJpo(post));
        return id;
    }

    @Override
    public Post retrieve(String id) throws NoSuchElementException
    {
        PostJpo postJpo = postRepository.findOne(id);
        if(postJpo == null)
        {
            throw new NoSuchElementException(String.format("No Post jpo[ID:%s] to retrieve", id));
        }
        return postJpo.toDomain();
    }

    @Override
    public void update(Post post)
    {
        String id = post.getId();
        if(!postRepository.exists(id))
        {
            throw new NonExistenceException(String.format("No Post jpo[ID:%s] to update", id));
        }
        PostJpo postJpo = postRepository.findOne(id);
        postJpo.update(post);
        postRepository.save(postJpo);
    }

    @Override
    public void delete(Post post)
    {
        String id = post.getId();
        if(!postRepository.exists(id))
        {
            throw new NonExistenceException(String.format("No Post jpo[ID:%s] to update", id));
        }
        PostJpo postJpo = postRepository.findOne(id);
        postJpo.update(post);
        postRepository.save(postJpo);
    }
}
