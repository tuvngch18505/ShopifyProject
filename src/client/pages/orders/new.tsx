import {
    Page,
    Button,
    FormLayout,
    TextField
} from '@shopify/polaris';
import { LegacyCard, EmptyState} from '@shopify/polaris';

function CreateBooster() {
    return (
        <Page
            breadcrumbs={[{ content: 'Order', url: '/' }]}
            title='Order value booster'
        >
            <LegacyCard sectioned>
                <FormLayout>
                    <TextField
                        label="Store name"
                        onChange={() => { }}
                        autoComplete="off"
                    />
                    <TextField
                        type="email"
                        label="Account email"
                        onChange={() => { }}
                        autoComplete="email"
                    />
                </FormLayout>
            </LegacyCard>
        </Page>
    )
}

export default CreateBooster;