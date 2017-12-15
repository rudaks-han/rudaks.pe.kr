package rudaks.blog.da.jpa.jpo;

import lombok.Data;
import org.springframework.beans.BeanUtils;
import rudaks.blog.domain.entity.Category;

import javax.persistence.Entity;
import javax.persistence.Id;
import java.util.List;
import java.util.stream.Collectors;

@Data
@Entity(name = "t_category")
public class CategoryJpo
{
    @Id
    private String id;

    private String category;
    private String name;
    private String deleteFlag;
    private String publicFlag;
    private long sortOrder;
    private String description;
    private String createdDate;
    private String updatedDate;

    public CategoryJpo() {}

    public CategoryJpo(Category category)
    {
        BeanUtils.copyProperties(category, this);
    }

    public void update(Category category)
    {
        BeanUtils.copyProperties(category, this);
    }

    public Category toDomain()
    {
        Category category = new Category(id);
        BeanUtils.copyProperties(this, category);
        return category;
    }

    public static List<Category> toDomains(List<CategoryJpo> categoryJpos)
    {
        return categoryJpos.stream()
                        .map(jpo -> jpo.toDomain())
                        .collect(Collectors.toList());
    }
}
