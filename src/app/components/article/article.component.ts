import { Component } from '@angular/core';
import { Article } from 'src/app/models/article.model';
import { ArticleService } from 'src/app/services/article.service';

@Component({
  selector: 'app-article',
  templateUrl: './article.component.html',
  styleUrls: ['./article.component.sass'],
})
export class ArticleComponent {
  server: string = 'http://localhost:8989/articles/uploads';
  articleList: Article[] = [];

  constructor(private articleService: ArticleService) {}

  ngOnInit() {
    this.getArticles();
    console.log(this.articleList);

  }

  async getArticles() {
    (await this.articleService.getArticles()).subscribe(
      (articles: Article[]) => {
        
        this.articleList = articles.map((item) => ({
          ...item,
          image: `${this.server}/${item.image}`,
        }));
        console.log(this.articleList);
      }
    );
  }
}
