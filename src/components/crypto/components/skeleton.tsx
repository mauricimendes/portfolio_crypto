import React from "react"
import SkeletonLoader from "expo-skeleton-loader"

const CryptoSkeleton = () => {

    const list = [1, 2, 3, 4, 5, 6, 7]

    return (
        <SkeletonLoader
            boneColor='#F9F9FB'
            highlightColor="#aeaeae"
        >
            {list.map(i => (
                <SkeletonLoader.Container
                    key={i}
                    style={{
                        marginTop: 36,
                        display: 'flex',
                        flexDirection: 'row',
                        justifyContent: 'space-between',
                        alignItems: 'center',
                        width: '100%'
                    }}
                >
                    <SkeletonLoader.Item
                        style={{
                            width: 46,
                            height: 46,
                            borderRadius: 23,
                        }}
                    />
                    <SkeletonLoader.Container
                        style={{
                            marginLeft: 16,
                            flex: 1
                        }}
                    >
                        <SkeletonLoader.Item
                            style={{
                                height: 16,
                                width: 68
                            }}
                        />
                        <SkeletonLoader.Item
                            style={{
                                marginTop: 8,
                                height: 14,
                                width: 56
                            }}
                        />
                    </SkeletonLoader.Container>
                    <SkeletonLoader.Container
                        style={{
                            alignItems: 'flex-end'
                        }}
                    >
                        <SkeletonLoader.Item
                            style={{
                                height: 16,
                                width: 68
                            }}
                        />
                        <SkeletonLoader.Item
                            style={{
                                marginTop: 8,
                                height: 14,
                                width: 56
                            }}
                        />
                    </SkeletonLoader.Container>
                </SkeletonLoader.Container>))}
        </SkeletonLoader>
    )
}

export default CryptoSkeleton