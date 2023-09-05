import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AppCountDownTimerComponent } from './app-count-down-timer/app-count-down-timer.component';
import { UserCardComponentComponent } from './user-card-component/user-card-component.component';
import { TaskListComponentComponent } from './task-list-component/task-list-component.component';
import { ProductListComponentComponent } from './product-list-component/product-list-component.component';
import { NameListComponent } from './name-list/name-list.component';
import { ShoppingCartComponent } from './shopping-cart/shopping-cart.component';
import { CounterComponent } from './counter/counter.component';
import { TodoListComponent } from './todo-list/todo-list.component';
import { GreetingFormComponent } from './greeting-form/greeting-form.component';
import { TaskList1Component } from './task-list1/task-list1.component';
import { UserListComponent } from './user-list/user-list.component';
import { BlogListComponent } from './blog-list/blog-list.component';
import { BlogPostComponent } from './blog-post/blog-post.component';
import { ReactiveFormComponent } from './reactive-form/reactive-form.component';
import { CalculatorComponent } from './calculator/calculator.component';
import { NewTodoListComponent } from './new-todo-list/new-todo-list.component';
import { ImageGalleryComponent } from './image-gallery/image-gallery.component';
import { GalleryComponent } from './gallery/gallery.component';
import { RegistrationComponent } from './registration/registration.component';

@NgModule({
  declarations: [
    AppComponent,
    AppCountDownTimerComponent,
    UserCardComponentComponent,
    TaskListComponentComponent,
    ProductListComponentComponent,
    NameListComponent,
    ShoppingCartComponent,
    CounterComponent,
    TodoListComponent,
    GreetingFormComponent,
    TaskList1Component,
    UserListComponent,
    BlogListComponent,
    BlogPostComponent,
    ReactiveFormComponent,
    CalculatorComponent,
    NewTodoListComponent,
    ImageGalleryComponent,
    GalleryComponent,
    RegistrationComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
