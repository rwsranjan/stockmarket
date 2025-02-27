import { useRouter } from 'next/router';
import { QueryClient, QueryClientProvider } from 'react-query';
const queryClient = new QueryClient();
import View from '@/components/Home/ViewBlogdetail';

function Index() {
    const router = useRouter();
    const { blog_path } = router.query;
    
    return (
        <QueryClientProvider client={queryClient}>
            <View slug={blog_path} />
        </QueryClientProvider>
    );
}
export default Index;
