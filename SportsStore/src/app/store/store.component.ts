import {Component, OnInit} from '@angular/core';
import {Product} from '../dal/model';
import {ProductsService} from '../dal/products.service';
import {CartService} from '../dal/cart.service';
import {Router} from '@angular/router';

@Component({
    selector: 'app-store',
    templateUrl: './store.component.html',
    styleUrls: ['./store.component.css']
})
export class StoreComponent implements OnInit {
    public selectedCategory = null;
    public productsPerPage = 4;
    public selectedPage = 1;

    constructor(private productRepository: ProductsService,
                private cartService: CartService,
                private router: Router) {

    }

    addProductToCart(product: Product) {
        this.cartService.addLine(product);
        this.router.navigateByUrl('/cart');
    }

    getProducts(): Product[] {
        // console.log('store.component.getProducts')
        return this.productRepository
            .getProducts(this.selectedCategory);
    }

    get products(): Product[] {
        // console.log('store.component.get products');
        const pageIndex = (this.selectedPage - 1) * this.productsPerPage;

        return this.productRepository
            .getProducts(this.selectedCategory)
            .slice(pageIndex, pageIndex + this.productsPerPage);
    }

    getCategories(): string[] {
        // console.log('store.component.getCategories');
        return this.productRepository.getCategories();
    }

    changeCategory(newCategory?: string) {
        this.selectedCategory = newCategory;
    }

    changePage(newPage: number) {
        this.selectedPage = newPage;
    }

    changePageSize(newSize: number) {
        this.productsPerPage = newSize;
        this.changePage(1);
    }

    get pageNumbers(): number[] {
        // console.log('store.component.get pageNumbers');
        let nums: number[] = [];
        const productCount = this.productRepository.getProducts(this.selectedCategory).length;
        const quotient = productCount / this.productsPerPage;
        const pagesCount = Math.ceil(quotient);
        // debugger;
        nums = Array(pagesCount).fill(0).map((x, i) => i + 1);
        return nums;
    }

    get pageCount(): number {
        const nums: number[] = [];
        const productCount = this.productRepository.getProducts(this.selectedCategory).length;
        const quotient = productCount / this.productsPerPage;
        return Math.ceil(quotient);
    }

    ngOnInit() {
        const dt = new Date();
        // console.log('' + dt.toISOString() + ': store onInit');
    }

}
