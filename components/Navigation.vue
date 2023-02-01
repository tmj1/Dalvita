<template>
    <ul>
        <li>
            <n-link to="/">Home </n-link>
        </li>
      <li>
        <n-link to="/about">About Us </n-link>
      </li>
        <li>
            <n-link to="/shop"> Shop </n-link>
        </li>
        <li>
            <n-link to="/blog">Blog </n-link>
            <ul class="submenu">
                <li>
                    <n-link to="/blog">Стандартен</n-link>
                </li>
                <li>
                    <n-link to="/blog/blog-right-sidebar">Със сайдбар</n-link>
                </li>
                <li>
                    <n-link to="/blog/blog-without-sidebar">Без сайдбар</n-link>
                </li>
                <li>
                    <n-link to="/blog/a-guide-to-latest-trends-product">Блог детайл/n-link>
                </li>
            </ul>
        </li>
        <li>
            <n-link to="/contact">Contact </n-link>
        </li>
    </ul>
</template>
